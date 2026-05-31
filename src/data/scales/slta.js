export const sltaScale = {
  id: "slta",

  title: "標準失語症検査",

  shortTitle: "SLTA",

  headerTitle:
    "SLTA：標準失語症検査",

  category:
    "language-communication",

  categories: [
    "language-communication",
    "higher-brain-function",
  ],

  tags: [
    "失語症",
    "言語",
    "コミュニケーション",
    "脳卒中",
    "高次脳機能",
    "ST",
    "OT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SLTAは、日本で最も広く使用される失語症評価です。聴く・話す・読む・書く能力を包括的に評価します。",

    interpretation:
      "失語症のタイプや重症度を把握し、経過観察やリハビリテーション方針の検討に用います。",

    tips:
      "失語症評価の基本となる検査です。標準プロフィールや誤反応傾向も重要です。",
  },

  domains: [
    {
      id: "auditory",

      title: "聴く",

      description:
        "聴覚的理解を評価します。",

      items: [
        {
          id: "slta-auditory",

          label: "聴覚的理解",

          type: "text",

          description:
            "単語・短文・口頭命令などの理解を評価します。",
        },
      ],
    },

    {
      id: "speech",

      title: "話す",

      description:
        "発話能力を評価します。",

      items: [
        {
          id: "slta-speech",

          label: "発話",

          type: "text",

          description:
            "呼称、復唱、説明発話などを評価します。",
        },
      ],
    },

    {
      id: "reading",

      title: "読む",

      description:
        "読字能力を評価します。",

      items: [
        {
          id: "slta-reading",

          label: "読字",

          type: "text",

          description:
            "文字・単語・文章の読解を評価します。",
        },
      ],
    },

    {
      id: "writing",

      title: "書く",

      description:
        "書字能力を評価します。",

      items: [
        {
          id: "slta-writing",

          label: "書字",

          type: "text",

          description:
            "書取、自発書字などを評価します。",
        },
      ],
    },

    {
      id: "summary",

      title: "総合所見",

      description:
        "失語症全体像をまとめます。",

      items: [
        {
          id: "slta-summary",

          label: "総合所見",

          type: "text",

          description:
            "失語症タイプや特徴を記載します。",
        },
      ],
    },
  ],
};