export const fourScoreScale = {
  id: "four-score",

  title: "Full Outline of UnResponsiveness score",

  shortTitle: "FOUR score",

  headerTitle: "FOUR score：意識障害評価",

  category: "consciousness",

  categories: ["consciousness"],

  tags: [
    "意識",
    "覚醒",
    "意識障害",
    "急性期",
    "ICU",
    "救急",
    "脳血管",
    "外傷",
    "医師",
    "看護",
  ],

  showTotal: false,

  tabs: {
    overview:
      "FOUR scoreは、開眼、運動反応、脳幹反射、呼吸パターンの4領域で意識障害を評価する尺度です。",

    tips:
      "GCSと異なり、言語反応を含まないため、挿管中の患者でも評価しやすい点が特徴です。",
  },

  domains: [
    {
      id: "eye-response",
      title: "E：開眼反応",
      description: "開眼・追視・瞬目などを評価します。",
      items: [
        {
          id: "four-e4",
          label: "E4：開眼または追視・瞬目あり",
          type: "text",
          description:
            "自発開眼し、追視または命令による瞬目が可能。",
        },
        {
          id: "four-e3",
          label: "E3：開眼するが追視なし",
          type: "text",
          description:
            "開眼はあるが、追視や命令による瞬目はみられない。",
        },
        {
          id: "four-e2",
          label: "E2：大きな声で開眼",
          type: "text",
          description:
            "大きな声や強い呼びかけで開眼する。",
        },
        {
          id: "four-e1",
          label: "E1：痛み刺激で開眼",
          type: "text",
          description:
            "痛み刺激で開眼する。",
        },
        {
          id: "four-e0",
          label: "E0：開眼なし",
          type: "text",
          description:
            "刺激しても開眼しない。",
        },
      ],
    },

    {
      id: "motor-response",
      title: "M：運動反応",
      description: "命令動作、疼痛刺激への反応などを評価します。",
      items: [
        {
          id: "four-m4",
          label: "M4：命令に従う",
          type: "text",
          description:
            "指示に従って手指サインなどが可能。",
        },
        {
          id: "four-m3",
          label: "M3：痛み刺激を局在",
          type: "text",
          description:
            "痛み刺激部位へ手を持っていくなど、局在反応を示す。",
        },
        {
          id: "four-m2",
          label: "M2：屈曲反応",
          type: "text",
          description:
            "痛み刺激に対して屈曲反応を示す。",
        },
        {
          id: "four-m1",
          label: "M1：伸展反応",
          type: "text",
          description:
            "痛み刺激に対して伸展反応を示す。",
        },
        {
          id: "four-m0",
          label: "M0：運動反応なし",
          type: "text",
          description:
            "痛み刺激に対して運動反応がみられない。",
        },
      ],
    },

    {
      id: "brainstem-reflexes",
      title: "B：脳幹反射",
      description: "瞳孔反射・角膜反射・咳反射を評価します。",
      items: [
        {
          id: "four-b4",
          label: "B4：瞳孔・角膜反射あり",
          type: "text",
          description:
            "瞳孔反射と角膜反射が保たれている。",
        },
        {
          id: "four-b3",
          label: "B3：片側瞳孔散大固定",
          type: "text",
          description:
            "片側の瞳孔が散大し固定している。",
        },
        {
          id: "four-b2",
          label: "B2：瞳孔または角膜反射の消失",
          type: "text",
          description:
            "瞳孔反射または角膜反射のいずれかが消失している。",
        },
        {
          id: "four-b1",
          label: "B1：瞳孔・角膜反射消失",
          type: "text",
          description:
            "瞳孔反射と角膜反射がともに消失している。",
        },
        {
          id: "four-b0",
          label: "B0：瞳孔・角膜・咳反射消失",
          type: "text",
          description:
            "瞳孔反射、角膜反射、咳反射が消失している。",
        },
      ],
    },

    {
      id: "respiration",
      title: "R：呼吸",
      description: "自発呼吸や人工呼吸器との関係を評価します。",
      items: [
        {
          id: "four-r4",
          label: "R4：挿管なし、規則的呼吸",
          type: "text",
          description:
            "挿管されておらず、規則的な呼吸がみられる。",
        },
        {
          id: "four-r3",
          label: "R3：挿管なし、Cheyne-Stokes呼吸",
          type: "text",
          description:
            "挿管されておらず、Cheyne-Stokes呼吸がみられる。",
        },
        {
          id: "four-r2",
          label: "R2：挿管なし、不規則呼吸",
          type: "text",
          description:
            "挿管されておらず、不規則な呼吸がみられる。",
        },
        {
          id: "four-r1",
          label: "R1：人工呼吸器より高い呼吸数",
          type: "text",
          description:
            "人工呼吸管理中で、設定より高い自発呼吸がある。",
        },
        {
          id: "four-r0",
          label: "R0：人工呼吸器設定と同じ呼吸数または無呼吸",
          type: "text",
          description:
            "人工呼吸器に同調している、または無呼吸。",
        },
      ],
    },
  ],
};