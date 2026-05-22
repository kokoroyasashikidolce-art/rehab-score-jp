export const brunnstromScale = {
  id: "brunnstrom",

  title: "Brunnstrom Stage",

  shortTitle: "BRS",

  headerTitle:
    "Brunnstrom Stage：運動回復段階",

  category: "motor-function",

  categories: [
    "motor-function",
    "stroke",
  ],

  tags: [
    "脳卒中",
    "片麻痺",
    "運動機能",
    "回復段階",
    "上肢",
    "手指",
    "下肢",
    "医師",
    "PT",
    "OT",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Brunnstrom Stageは脳卒中後片麻痺の運動回復過程をStage I〜VIで評価する尺度です。",

    tips:
      "上肢、手指、下肢を別々に評価します。Stageが進むほど共同運動から分離運動へ移行します。",
  },

  domains: [
    {
      id: "upper-limb",

      title: "上肢",

      description:
        "肩・肘を中心とした上肢運動回復",

      items: [
        {
          id: "ul-1",
          label: "Stage I",
          type: "text",
          description:
            "弛緩性麻痺。随意運動なし。",
        },

        {
          id: "ul-2",
          label: "Stage II",
          type: "text",
          description:
            "痙縮出現。共同運動がわずかに出現。",
        },

        {
          id: "ul-3",
          label: "Stage III",
          type: "text",
          description:
            "共同運動が随意的に可能。痙縮最強。",
        },

        {
          id: "ul-4",
          label: "Stage IV",
          type: "text",
          description:
            "共同運動から一部分離。",
        },

        {
          id: "ul-5",
          label: "Stage V",
          type: "text",
          description:
            "分離運動優位。",
        },

        {
          id: "ul-6",
          label: "Stage VI",
          type: "text",
          description:
            "協調運動ほぼ正常。",
        },
      ],
    },

    {
      id: "hand",

      title: "手指",

      description:
        "手指巧緻運動・把握機能",

      items: [
        {
          id: "hand-1",
          label: "Stage I",
          type: "text",
          description:
            "随意運動なし。",
        },

        {
          id: "hand-2",
          label: "Stage II",
          type: "text",
          description:
            "わずかな屈曲。",
        },

        {
          id: "hand-3",
          label: "Stage III",
          type: "text",
          description:
            "集団屈曲可能。",
        },

        {
          id: "hand-4",
          label: "Stage IV",
          type: "text",
          description:
            "側方つまみ開始。",
        },

        {
          id: "hand-5",
          label: "Stage V",
          type: "text",
          description:
            "指伸展や把持改善。",
        },

        {
          id: "hand-6",
          label: "Stage VI",
          type: "text",
          description:
            "個別指運動良好。",
        },
      ],
    },

    {
      id: "lower-limb",

      title: "下肢",

      description:
        "歩行・支持性を含む運動回復",

      items: [
        {
          id: "ll-1",
          label: "Stage I",
          type: "text",
          description:
            "弛緩性麻痺。",
        },

        {
          id: "ll-2",
          label: "Stage II",
          type: "text",
          description:
            "共同運動開始。",
        },

        {
          id: "ll-3",
          label: "Stage III",
          type: "text",
          description:
            "共同運動完成。",
        },

        {
          id: "ll-4",
          label: "Stage IV",
          type: "text",
          description:
            "足関節背屈など分離開始。",
        },

        {
          id: "ll-5",
          label: "Stage V",
          type: "text",
          description:
            "複雑運動可能。",
        },

        {
          id: "ll-6",
          label: "Stage VI",
          type: "text",
          description:
            "正常に近い協調運動。",
        },
      ],
    },
  ],
};