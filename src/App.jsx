import { useEffect, useMemo, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { questions } from './data/questions'
import { results } from './data/results'

const VIEW = {
  landing: 'landing',
  quiz: 'quiz',
  loading: 'loading',
  result: 'result',
}

const SCORE_TEMPLATE = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

const loadingTexts = [
  '正在推演职场命盘...',
  '正在匹配宿命角色...',
  '结果生成中...',
]

const avatarModules = import.meta.glob(
  './assets/avatars/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

function getAvatarByMbti(mbti) {
  const target = mbti.toUpperCase()
  const matched = Object.entries(avatarModules).find(([path]) => {
    const filename = path.split('/').pop() ?? ''
    const name = filename.split('.')[0]
    return name.toUpperCase() === target
  })
  return matched?.[1] ?? ''
}

function resolveMbti(score) {
  const pairs = [
    ['E', 'I', 'I'],
    ['S', 'N', 'N'],
    ['T', 'F', 'F'],
    ['J', 'P', 'P'],
  ]
  return pairs
    .map(([left, right, tie]) => {
      if (score[left] > score[right]) return left
      if (score[left] < score[right]) return right
      return tie
    })
    .join('')
}

function App() {
  const [view, setView] = useState(VIEW.landing)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(SCORE_TEMPLATE)
  const [activeOptionIndex, setActiveOptionIndex] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loadingTextIndex, setLoadingTextIndex] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState('')
  const cardRef = useRef(null)

  const mbtiResult = useMemo(() => {
    const mbti = resolveMbti(score)
    const matched = results.find((item) => item.mbti === mbti)
    return matched ?? { ...results[0], mbti }
  }, [score])
  const avatarSrc = getAvatarByMbti(mbtiResult.mbti)

  useEffect(() => {
    if (view !== VIEW.loading) return undefined

    const textTimer = window.setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 700)

    const viewTimer = window.setTimeout(() => {
      setView(VIEW.result)
    }, 2500)

    return () => {
      window.clearInterval(textTimer)
      window.clearTimeout(viewTimer)
    }
  }, [view])

  function startQuiz() {
    setView(VIEW.quiz)
    setCurrentQuestionIndex(0)
    setScore(SCORE_TEMPLATE)
    setActiveOptionIndex(null)
    setIsTransitioning(false)
    setGeneratedImage('')
  }

  function resetAll() {
    setView(VIEW.landing)
    setCurrentQuestionIndex(0)
    setScore(SCORE_TEMPLATE)
    setActiveOptionIndex(null)
    setIsTransitioning(false)
    setLoadingTextIndex(0)
    setGeneratedImage('')
  }

  function handleOptionSelect(option, optionIndex) {
    if (activeOptionIndex !== null) return

    setActiveOptionIndex(optionIndex)
    setScore((prev) => ({
      ...prev,
      [option.dimension]: prev[option.dimension] + option.weight,
    }))
    setIsTransitioning(true)

    window.setTimeout(() => {
      const isLastQuestion = currentQuestionIndex >= questions.length - 1
      if (isLastQuestion) {
        setLoadingTextIndex(0)
        setView(VIEW.loading)
      } else {
        setCurrentQuestionIndex((prev) => prev + 1)
      }
      setActiveOptionIndex(null)
      setIsTransitioning(false)
    }, 300)
  }

  async function handleSave() {
    if (!cardRef.current) return
    setIsGenerating(true)
    setGeneratedImage('')

    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#111111',
        scale: 2,
        useCORS: true,
      })
      const dataUrl = canvas.toDataURL('image/png')
      setGeneratedImage(dataUrl)
    } catch {
      setGeneratedImage('')
    } finally {
      setIsGenerating(false)
    }
  }

  function handleDownloadPoster() {
    if (!generatedImage) return
    const link = document.createElement('a')
    link.href = generatedImage
    link.download = '我的职场宫斗命盘.png'
    link.rel = 'noopener'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <main className="min-h-screen bg-ink px-4 py-8 text-paper">
      <div className="mx-auto w-full max-w-md">
        {view === VIEW.landing && (
          <section className="landing-scene">
            <div className="fate-mesh" aria-hidden="true" />
            <article className="palace-door">
              <div className="door-leaf door-left" aria-hidden="true" />
              <div className="door-leaf door-right" aria-hidden="true" />
              <div className="door-glow" aria-hidden="true" />
              <div className="landing-content">
                <h1 className="landing-title">打工人宫斗图鉴</h1>
                <p className="landing-subtitle">
                  入世为剑，出世为琴，推演你骨子里的职场底色。
                </p>
                <button className="seal-btn" onClick={startQuiz}>
                  开启命盘推演
                </button>
              </div>
            </article>
          </section>
        )}

        {view === VIEW.quiz && (
          <section className="neo-panel rounded-2xl border border-gold/25 p-6 shadow-gold">
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs text-paper/70">
                <span>命盘进度</span>
                <span>
                  {currentQuestionIndex + 1} / {questions.length}
                </span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div
              className={`space-y-4 transition-all duration-300 ${
                isTransitioning ? 'translate-x-1 opacity-0' : 'translate-x-0 opacity-100'
              }`}
            >
              <h2 className="font-serif-cn text-xl leading-8 text-gold-light">
                {currentQuestion.title}
              </h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isActive = activeOptionIndex === index
                  return (
                    <button
                      key={option.text}
                      onClick={() => handleOptionSelect(option, index)}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                        isActive
                          ? 'border-gold bg-gold/10 text-gold-light'
                          : 'border-white/10 bg-white/5 text-paper/90 hover:border-gold/60'
                      }`}
                    >
                      {option.text}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {view === VIEW.loading && (
          <section className="neo-panel flex min-h-[55vh] items-center justify-center rounded-2xl border border-gold/20 p-6 text-center shadow-gold">
            <div>
              <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
              <p className="font-serif-cn text-lg tracking-wide text-gold-light">
                {loadingTexts[loadingTextIndex]}
              </p>
            </div>
          </section>
        )}

        {view === VIEW.result && (
          <section>
            <article
              ref={cardRef}
              className="tarot-card"
              style={{
                '--theme-gradient': mbtiResult.themeColor,
                '--theme-border': mbtiResult.borderColor,
              }}
            >
              <div className="tarot-ornament" />
              <section className="tarot-center">
                <div className="tarot-portrait-frame">
                  {avatarSrc ? (
                    <img
                      src={avatarSrc}
                      alt={`${mbtiResult.mbti} 人物插画`}
                      className="tarot-portrait-image"
                    />
                  ) : (
                    <div className="tarot-portrait-fallback">画像待入卷</div>
                  )}
                </div>
                <p className="tarot-prefix">
                  MBTI: {mbtiResult.mbti} | {mbtiResult.tags[0]}
                </p>
                <p className="tarot-role">[ {mbtiResult.role} ]</p>
              </section>

              <p className="tarot-description">{mbtiResult.description}</p>

              <footer className="tarot-quote-wrap">
                <p className="tarot-quote">{mbtiResult.quote}</p>
              </footer>
              <div className="tarot-ornament tarot-ornament-bottom" />
            </article>

            <div className="mt-5 space-y-3">
              <button
                className="gold-btn w-full"
                onClick={handleSave}
                disabled={isGenerating}
              >
                {isGenerating ? '命盘生成中...' : '保存我的命理牌'}
              </button>
              <button className="ink-btn w-full" onClick={resetAll}>
                重新推演
              </button>
            </div>
          </section>
        )}
      </div>
      {generatedImage && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 px-6 backdrop-blur-sm">
          <p className="animate-pulse text-center font-serif-cn text-lg text-[#e8c37d]">
            长按图片保存到手机
          </p>
          <button
            type="button"
            className="seal-btn seal-btn-compact mb-1 w-full max-w-sm"
            onClick={handleDownloadPoster}
          >
            点击保存到相册
          </button>
          <img
            src={generatedImage}
            alt="生成的命理牌"
            className="max-h-[68vh] w-full max-w-sm rounded-xl border border-[#e5c27e]/60 shadow-[0_0_25px_rgba(251,191,36,0.22)]"
            style={{
              WebkitTouchCallout: 'default',
              pointerEvents: 'auto',
              userSelect: 'auto',
            }}
            draggable={false}
          />
          <button className="ink-btn min-w-28" type="button" onClick={() => setGeneratedImage('')}>
            关闭
          </button>
        </div>
      )}
    </main>
  )
}

export default App
