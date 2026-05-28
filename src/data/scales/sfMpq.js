export const sfMpqScale = {
  id: "sf-mpq",
  title: "Short-Form McGill Pain Questionnaire",
  shortTitle: "SF-MPQ",
  headerTitle: "SF-MPQ：疼痛性状評価",

  category: "sensory-pain",
  categories: ["sensory-pain", "qol-psychology"],

  tags: [
    "疼痛",
    "痛み",
    "慢性痛",
    "疼痛性状",
    "QOL",
    "運動器",
    "神経障害性疼痛",
    "医師",
    "PT",
    "OT",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SF-MPQは、痛みの性質や強さを多面的に評価するMcGill Pain Questionnaireの短縮版です。",

    tips:
      "単なる痛みの強さだけでなく、感覚的・情動的な痛みの表現を整理できます。",
  },

  domains: [
    {
      id: "sensory",
      title: "感覚的側面",
      description:
        "痛みの感覚的な性質を確認します。",
      items: [
        {
          id: "sfmpq-throbbing",
          label: "ズキズキする痛み",
          type: "text",
          description:
            "拍動性の痛みを確認します。",
        },
        {
          id: "sfmpq-shooting",
          label: "走るような痛み",
          type: "text",
          description:
            "神経走行に沿うような痛みを確認します。",
        },
        {
          id: "sfmpq-burning",
          label: "焼けるような痛み",
          type: "text",
          description:
            "灼熱感を伴う痛みを確認します。",
        },
      ],
    },
    {
      id: "affective",
      title: "情動的側面",
      description:
        "痛みに伴う不快感やつらさを評価します。",
      items: [
        {
          id: "sfmpq-tiring",
          label: "疲れるような痛み",
          type: "text",
          description:
            "痛みによる消耗感を確認します。",
        },
        {
          id: "sfmpq-fearful",
          label: "恐ろしい痛み",
          type: "text",
          description:
            "痛みに対する恐怖や心理的負担を確認します。",
        },
      ],
    },
    {
      id: "intensity",
      title: "痛みの強さ",
      description:
        "痛みの全体的な強さを評価します。",
      items: [
        {
          id: "sfmpq-present-pain",
          label: "現在の痛み",
          type: "text",
          description:
            "現在の痛みの強さを段階的に評価します。",
        },
        {
          id: "sfmpq-vas",
          label: "VAS",
          type: "text",
          description:
            "必要に応じてVASと併用して痛みの強さを記録します。",
        },
      ],
    },
  ],
};