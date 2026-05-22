export const crsrScale = {
  id: "crs-r",

  title:
    "Coma Recovery Scale-Revised",

  shortTitle: "CRS-R",

  headerTitle:
    "CRS-R：Coma Recovery Scale-Revised",

  category: "consciousness",

  categories: [
    "consciousness",
  ],

  tags: [
    "意識",
    "覚醒",
    "意識障害",
    "慢性意識障害",
    "DOC",
    "遷延性意識障害",
    "リハビリ",
    "入院",
    "医師",
    "PT",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CRS-Rは、昏睡・植物状態/無反応覚醒症候群・最小意識状態などの意識障害を評価する尺度です。",

    tips:
      "聴覚、視覚、運動、口腔運動/言語、コミュニケーション、覚醒の6領域で構成されます。診断分類の補助として用いられます。",
  },

  domains: [
    {
      id: "crsr-domains",
      title: "評価領域",
      description:
        "CRS-Rは6つの下位尺度で構成されます。",
      items: [
        {
          id: "crsr-auditory",
          label: "聴覚機能",
          type: "text",
          description:
            "音や呼びかけへの反応、命令追従などを評価します。",
        },
        {
          id: "crsr-visual",
          label: "視覚機能",
          type: "text",
          description:
            "視覚追跡、視覚定位、物体認識などを評価します。",
        },
        {
          id: "crsr-motor",
          label: "運動機能",
          type: "text",
          description:
            "疼痛への反応、自動運動、物品使用などを評価します。",
        },
        {
          id: "crsr-oromotor",
          label: "口腔運動・言語機能",
          type: "text",
          description:
            "発声、口腔運動、発語などを評価します。",
        },
        {
          id: "crsr-communication",
          label: "コミュニケーション",
          type: "text",
          description:
            "一貫した意思伝達や yes/no 反応を評価します。",
        },
        {
          id: "crsr-arousal",
          label: "覚醒",
          type: "text",
          description:
            "開眼や覚醒維持の程度を評価します。",
        },
      ],
    },
    {
      id: "crsr-note",
      title: "注意点",
      description:
        "評価時の注意点です。",
      items: [
        {
          id: "crsr-repeat",
          label: "反復評価が重要",
          type: "text",
          description:
            "意識障害患者では日内変動や疲労の影響が大きく、複数回の評価が重要です。",
        },
        {
          id: "crsr-diagnosis",
          label: "診断分類の補助",
          type: "text",
          description:
            "植物状態/無反応覚醒症候群、最小意識状態、意識回復の判定補助に用いられます。",
        },
      ],
    },
  ],
};