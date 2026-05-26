export const vasScale = {
  id: "vas",

  title: "Visual Analog Scale",

  shortTitle: "VAS",

  headerTitle: "VAS：Visual Analog Scale",

  category: "sensory-pain",

  categories: [
    "sensory-pain",
  ],

  tags: [
    "疼痛",
    "痛み",
    "自己評価",
    "急性痛",
    "慢性痛",
    "運動器",
    "神経障害性疼痛",
    "QOL",
    "医師",
    "PT",
    "OT",
    "看護",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "VASは、直線上に痛みの強さを示してもらう自己評価式の疼痛尺度です。",

    tips:
      "一般に左端を痛みなし、右端を最悪の痛みとして、患者が示した位置を距離として測定します。",
  },

  domains: [
    {
      id: "method",
      title: "評価方法",
      description:
        "直線上で痛みの強さを表します。",
      items: [
        {
          id: "vas-line",
          label: "直線尺度",
          type: "text",
          description:
            "一定の長さの直線を用い、患者が痛みの強さに相当する位置を示します。",
        },
        {
          id: "vas-left",
          label: "左端",
          type: "text",
          description:
            "痛みなしを表します。",
        },
        {
          id: "vas-right",
          label: "右端",
          type: "text",
          description:
            "想像できる最悪の痛みを表します。",
        },
      ],
    },
    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "疼痛の程度や治療効果を連続量として評価します。",
      items: [
        {
          id: "vas-quantitative",
          label: "連続量として評価",
          type: "text",
          description:
            "NRSより細かな変化を記録しやすい一方、理解力や視覚・運動機能の影響を受けることがあります。",
        },
        {
          id: "vas-follow",
          label: "経時評価",
          type: "text",
          description:
            "治療前後やリハビリ経過で疼痛の変化を比較します。",
        },
      ],
    },
  ],
};