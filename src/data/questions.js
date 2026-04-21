export const questions = [
  {
    title: '周一早会，大老板突然让大家轮流分享周末见闻以“活跃气氛”，你的内心：',
    options: [
      { text: '抢先发言：谈笑风生讲个段子，这可是让全场（特别是老板）记住我的好机会。', dimension: 'E', weight: 2 },
      { text: '顺势配合：等大家说得差不多了，大方分享一个安全话题，不冷场是我的修养。', dimension: 'E', weight: 1 },
      { text: '默默打稿：内心开始反复排练，只求轮到自己时能干巴巴说完，赶紧坐下。', dimension: 'I', weight: 1 },
      { text: '绝望避雷：脚趾扣地，恨不得立刻装病去洗手间躲过这一轮社交霸凌。', dimension: 'I', weight: 2 },
    ],
  },
  {
    title: '跨部门大型聚餐，面对一桌子半生不熟的“盟友”和“对手”，你会：',
    options: [
      { text: '交换名片：满场飞起，迅速摸清每个人的底细，甚至能把隔壁桌的也聊熟。', dimension: 'E', weight: 2 },
      { text: '礼貌社交：跟身边的人聊聊项目，偶尔举杯致意，确保自己看起来合群且得体。', dimension: 'E', weight: 1 },
      { text: '饭搭子模式：只跟自己部门熟悉的人小声说话，对桌上的陌生人报以礼貌微笑。', dimension: 'I', weight: 1 },
      { text: '灵魂出窍：全程低头吃菜，内心祈祷这顿饭赶紧结束，谁跟我说话我都觉得累。', dimension: 'I', weight: 2 },
    ],
  },
  {
    title: '工作中遇到一个非常棘手的难题，你通常倾向于：',
    options: [
      { text: '广而告之：立刻拉个群或者冲到同事工位前，大家当面碰一下，碰撞出火花。', dimension: 'E', weight: 2 },
      { text: '询问专家：先找一两个靠谱的同事私下交流，看看大家有没有类似的经验。', dimension: 'E', weight: 1 },
      { text: '自行参悟：先自己查资料、想方案，确定自己搞不定了再打字请教别人。', dimension: 'I', weight: 1 },
      { text: '闭关深耕：拒绝一切干扰，直到自己彻底研究透彻，否则绝不向外界暴露进度。', dimension: 'I', weight: 2 },
    ],
  },
  {
    title: '连续参加了一整天密集的“头脑风暴会”，下班后的状态：',
    options: [
      { text: '意犹未尽：感觉思维被点燃了，甚至想约几个同事去喝杯咖啡继续聊。', dimension: 'E', weight: 2 },
      { text: '还算平稳：虽然有点累，但觉得这种沟通挺有效，回家刷刷手机就能回血。', dimension: 'E', weight: 1 },
      { text: '电量警报：感觉身体被掏空，现在只想一个人呆着，谁发微信都不想回。', dimension: 'I', weight: 1 },
      { text: '社交瘫痪：灵魂已经下班，只想钻进一个没人的树洞，彻底切断与人类的联系。', dimension: 'I', weight: 2 },
    ],
  },
  {
    title: '公司里那些错综复杂的“宫廷八卦”，你通常：',
    options: [
      { text: '情报中心：不仅知道谁和谁不和，连老板的小舅子在哪儿上班都门儿清。', dimension: 'E', weight: 2 },
      { text: '吃瓜群众：大家聊的时候顺便听一耳朵，掌握一点生存必备的人际风向标。', dimension: 'E', weight: 1 },
      { text: '被动接收：除非八卦撞到我脸上，否则我很少主动打听，总觉得事不关己。', dimension: 'I', weight: 1 },
      { text: '隔绝外界：别人都撕破脸了你还一脸懵，甚至不知道带你的人刚离职。', dimension: 'I', weight: 2 },
    ],
  },
  {
    title: '面对新入职的“小主”（新同事），你会：',
    options: [
      { text: '主动示好：第一时间带他们熟悉环境，甚至主动拉人进午饭搭子群。', dimension: 'E', weight: 2 },
      { text: '礼貌欢迎：点头致意，简单介绍一下工作，展现前辈的和蔼可亲。', dimension: 'E', weight: 1 },
      { text: '被动观察：等对方主动来找我，或者看大家怎么对他，我再决定社交深度。', dimension: 'I', weight: 1 },
      { text: '保持边界：公事公办，只要不影响我的进度，大家做一辈子陌生人也挺好。', dimension: 'I', weight: 2 },
    ],
  },
  {
    title: '领导交代一个新项目，只给了一个“我们要搞个大动作”的模糊方向，你会：',
    options: [
      { text: '追问到底：极度不安。没有具体预算、SOP和对标案例，这怎么干？', dimension: 'S', weight: 2 },
      { text: '照猫画虎：先翻翻公司以前类似的旧案，找个模板搭架子，求个稳妥。', dimension: 'S', weight: 1 },
      { text: '脑补蓝图：根据老板的只言片语画个思维导图，初步推演几种可能的方案。', dimension: 'N', weight: 1 },
      { text: '灵感狂欢：狂喜！既然老板没定死，我的各种颠覆性创意终于有地方施展了。', dimension: 'N', weight: 2 },
    ],
  },
  {
    title: '在听取别人的工作汇报时，你最先注意到的是：',
    options: [
      { text: '数据瑕疵：具体的数字对不对？案例有没有真实性？细节是否经得起推敲？', dimension: 'S', weight: 2 },
      { text: '执行过程：这事儿是怎么一步步做出来的？流程顺不顺？落地性强不强？', dimension: 'S', weight: 1 },
      { text: '核心逻辑：这事儿背后的底层逻辑是什么？跟公司的年度大目标匹配吗？', dimension: 'N', weight: 1 },
      { text: '未来潜能：这事儿能不能玩出新花样？未来有没有可能引爆新的增长点？', dimension: 'N', weight: 2 },
    ],
  },
  {
    title: '日常撰写周报或PPT总结时，你的风格更接近：',
    options: [
      { text: '详细台账：几点开了什么会，发了多少邮件，精确到个位数的成果展示。', dimension: 'S', weight: 2 },
      { text: '事实清单：清晰罗列本周完成的任务，重点突出进度，不掺杂废话。', dimension: 'S', weight: 1 },
      { text: '方法论提炼：喜欢总结本周遇到的坑，并提炼出一套下次能避坑的模型。', dimension: 'N', weight: 1 },
      { text: '愿景描述：喜欢讲故事，用宏大的叙事感和高级词汇去定义本周的价值。', dimension: 'N', weight: 2 },
    ],
  },
  {
    title: '对于行业内刚兴起的新概念（如某个新的AI工具），你：',
    options: [
      { text: '观望怀疑：觉得多半是收割智商税，等别人测试稳定、有具体产出再说。', dimension: 'S', weight: 2 },
      { text: '局部试水：先看别人怎么用，选一个最小的业务场景尝试一下，不冒进。', dimension: 'S', weight: 1 },
      { text: '敏锐关注：去搜集资料研究它的原理，思考这玩意儿能不能优化我的流程。', dimension: 'N', weight: 1 },
      { text: '全面拥抱：第一时间尝试，甚至想把现在的业务逻辑按新工具重构一遍。', dimension: 'N', weight: 2 },
    ],
  },
  {
    title: '如果你要和同事争论一个业务分歧，你的“必杀技”是：',
    options: [
      { text: '历史数据：拿出白纸黑字的数据和过往的失败案例，堵住对方的嘴。', dimension: 'S', weight: 2 },
      { text: 'SOP规范：指出现在的做法不符合公司的规章制度或行业标准。', dimension: 'S', weight: 1 },
      { text: '逻辑链条：通过一套严密的因果逻辑，推导对方的做法在未来行不通。', dimension: 'N', weight: 1 },
      { text: '趋势预测：用行业未来的演变和战略高度，降维打击对方的短视。', dimension: 'N', weight: 2 },
    ],
  },
  {
    title: '你的电脑桌面和文件夹状态通常是：',
    options: [
      { text: '强迫症现场：按日期、项目、紧急程度分级归档，找东西不超过5秒。', dimension: 'S', weight: 2 },
      { text: '基本有序：重要文件有分类，不常用的直接扔文件夹，基本能找着。', dimension: 'S', weight: 1 },
      { text: '逻辑分类：按“待处理”、“思考中”、“已结束”这种模糊但有逻辑的方式分。', dimension: 'N', weight: 1 },
      { text: '混乱星域：满屏幕的文件，但在你脑子的“直觉地图”里，你总能神奇地定位。', dimension: 'N', weight: 2 },
    ],
  },
  {
    title: '同事因为失误被领导痛骂，在工位上偷偷抹眼泪，此时你需要去对接工作，你会：',
    options: [
      { text: '开门见山：职场不相信眼泪。等她稍微停一下，立刻指出失误点并要求重做。', dimension: 'T', weight: 2 },
      { text: '客观止损：递张纸巾，但话题迅速切回业务：“别难过，咱们得赶紧想补救办法。”', dimension: 'T', weight: 1 },
      { text: '情感缓冲：先不安慰，也不谈工作，等她心情稍微平复了再用温和的语气开口。', dimension: 'F', weight: 1 },
      { text: '极度共情：递纸巾、倒热水，甚至拉着她去茶水间一起骂领导，比她还委屈。', dimension: 'F', weight: 2 },
    ],
  },
  {
    title: '年底绩效打分，你手里只有一个“优秀”名额，你会给谁？',
    options: [
      { text: '业绩第一：虽然他性格孤僻、得罪全组，但他的KPI数据确实无人能及。', dimension: 'T', weight: 2 },
      { text: '贡献综合：选那个业务能力强，且在合作中比较讲究规则和效率的人。', dimension: 'T', weight: 1 },
      { text: '团队脊梁：选那个业务中上，但平时极其尽责，总是在帮大家解决麻烦的人。', dimension: 'F', weight: 1 },
      { text: '情感粘合：选那个让全组气氛融洽、大家都很喜欢，且最近正需要鼓励的人。', dimension: 'F', weight: 2 },
    ],
  },
  {
    title: '离职交接时，面对即将接手你“烂摊子”的新人，你的内心：',
    options: [
      { text: '公事公办：按清单交接，互不相欠。走出这道门，你的死活与我无关。', dimension: 'T', weight: 2 },
      { text: '职业素养：交代清楚所有的风险点，确保流程不断，这是对岗位的负责。', dimension: 'T', weight: 1 },
      { text: '些许内疚：觉得把坑留给新人有点不好意思，会私下嘱咐几句“避坑秘籍”。', dimension: 'F', weight: 1 },
      { text: '托付心态：拉着对方的手交代很久，甚至离职后还会回复对方的请教微信。', dimension: 'F', weight: 2 },
    ],
  },
  {
    title: '当你的业务见解和团队大多数人产生激烈分歧时，你会：',
    options: [
      { text: '战斗到底：坚信真理在少数人手里，哪怕吵到老板办公室也要证明自己是对的。', dimension: 'T', weight: 2 },
      { text: '逻辑说服：整理出一份详实的报告，试图通过事实证据来逐一纠偏。', dimension: 'T', weight: 1 },
      { text: '灵活妥协：为了不让气氛太尴尬，选择折中方案，或者保留意见随大流。', dimension: 'F', weight: 1 },
      { text: '照顾情绪：如果坚持己见会让大家不开心，我宁愿放弃自己的坚持，求个太平。', dimension: 'F', weight: 2 },
    ],
  },
  {
    title: '职场上，你认为哪种评价最能让你获得“爽感”？',
    options: [
      { text: '“你简直是个没有感情的KPI收割机，太强了！”', dimension: 'T', weight: 2 },
      { text: '“你的逻辑极其严密，专业度让人心服口服。”', dimension: 'T', weight: 1 },
      { text: '“和你合作太省心了，你总是能照顾到每个人的需求。”', dimension: 'F', weight: 1 },
      { text: '“你是我见过最温暖的职场伙伴，是团队的定海神针。”', dimension: 'F', weight: 2 },
    ],
  },
  {
    title: '如果要你开除一个能力不行但态度极好、甚至全组都挺喜欢的老员工：',
    options: [
      { text: '杀伐果断：职场不是慈善机构，不行就立刻谈补偿走人，绝不拖泥带水。', dimension: 'T', weight: 2 },
      { text: '利益置换：帮他推荐一个难度更低的岗位，或者建议他自己主动离职。', dimension: 'T', weight: 1 },
      { text: '极度煎熬：找各种理由拖延，甚至想自己帮他把活儿干了，不忍心开这个口。', dimension: 'F', weight: 1 },
      { text: '情感内耗：会替对方哭一场，觉得自己像个坏人，甚至产生强烈的职业危机感。', dimension: 'F', weight: 2 },
    ],
  },
  {
    title: '下班前5分钟，老板突然扔来一个“今晚辛苦下”的非紧急繁琐任务：',
    options: [
      { text: '怒火中烧：这完全打乱了我原本的晚间规划！黑着脸做完，内心已拉黑老板。', dimension: 'J', weight: 2 },
      { text: '强迫解决：为了保证明天的待办清单是干净的，叹口气把它做完再走。', dimension: 'J', weight: 1 },
      { text: '灵活顺延：明天早点来做一样。顺手记在日程表上，然后愉快下班。', dimension: 'P', weight: 1 },
      { text: '随缘处理：先存在桌面上，明天看心情和精力什么时候处理，反正不死人。', dimension: 'P', weight: 2 },
    ],
  },
  {
    title: '安排一次重要的商务出差，你的行程表会是：',
    options: [
      { text: '精确到分：几点接机、几点开会、几点回房休息，全部白纸黑字打印出来。', dimension: 'J', weight: 2 },
      { text: '框架分明：几大块的核心节点定死，中间留出一点点灵活转换的时间。', dimension: 'J', weight: 1 },
      { text: '随性而为：只定好往返机票和开会地点，具体怎么走、吃什么，到地方再说。', dimension: 'P', weight: 1 },
      { text: '漂流模式：除了大目标，一切皆可变。最美的风景往往在计划之外。', dimension: 'P', weight: 2 },
    ],
  },
  {
    title: '你的工作状态通常呈现为：',
    options: [
      { text: '匀速直线：每天按部就班，拒绝拖延，喜欢今日事今日毕的掌控感。', dimension: 'J', weight: 2 },
      { text: '阶段推进：把大目标拆成小周期的节点，每完成一段奖励自己一下。', dimension: 'J', weight: 1 },
      { text: '灵活调整：根据当天的精力和紧急程度来安排，不强求非要按计划走。', dimension: 'P', weight: 1 },
      { text: '脉冲爆发：前期疯狂摸鱼、积攒灵感，死线前24小时爆肝产出惊人成果。', dimension: 'P', weight: 2 },
    ],
  },
  {
    title: '面对公司经常“朝令夕改”的规章制度，你的态度是：',
    options: [
      { text: '无法容忍：没有规矩和确定性，这公司迟早要完！', dimension: 'J', weight: 2 },
      { text: '试图适应：虽然烦，但会努力弄清楚新规矩，调整自己的行为边界。', dimension: 'J', weight: 1 },
      { text: '见怪不怪：反正是打工，兵来将挡水来土掩，灵活应变是我的强项。', dimension: 'P', weight: 1 },
      { text: '玩世不恭：规矩是死的人是活的，总能找到漏洞继续按我的方式干活。', dimension: 'P', weight: 2 },
    ],
  },
  {
    title: '关于“待办事项清单”（To-do list），你：',
    options: [
      { text: '命根子：每划掉一项都伴随着巨大的多巴胺分泌，不写清单无法工作。', dimension: 'J', weight: 2 },
      { text: '导航仪：早上列一下，提醒自己别忘事，完成大半就很满足。', dimension: 'J', weight: 1 },
      { text: '选做题：偶尔写写，但通常完成率不高，全凭当下的直觉和兴趣开展。', dimension: 'P', weight: 1 },
      { text: '纸上谈兵：写了也从来不看，甚至经常找不到那张写了清单的纸。', dimension: 'P', weight: 2 },
    ],
  },
  {
    title: '你的工位桌面风格通常是：',
    options: [
      { text: '极简禁欲：除了电脑和水杯，没有任何杂物。下班时桌面空无一物。', dimension: 'J', weight: 2 },
      { text: '功能分区：资料在左，文具在右，虽然有点生活气息但井然有序。', dimension: 'J', weight: 1 },
      { text: '随性堆放：乱中有序，虽然外人看着乱，但你随手就能掏出想要的东西。', dimension: 'P', weight: 1 },
      { text: '混乱美学：零食、资料、小摆件混杂，有一种“在废墟中搞创作”的自由感。', dimension: 'P', weight: 2 },
    ],
  },
  {
    title: '对你来说，完成一个项目的最佳体验是：',
    options: [
      { text: '严丝合缝：所有环节都在预料之中，最后精准地在死线前一秒完美交付。', dimension: 'J', weight: 2 },
      { text: '结果达成：虽然中间有小波折，但最终还是按既定目标拿到了想要的结果。', dimension: 'J', weight: 1 },
      { text: '过程惊喜：中间虽然乱套了，但意外收获了更好的方案或合作关系。', dimension: 'P', weight: 1 },
      { text: '极限反杀：在几乎要搞砸的边缘，靠着最后时刻的神来之笔成功翻盘。', dimension: 'P', weight: 2 },
    ],
  },
]
