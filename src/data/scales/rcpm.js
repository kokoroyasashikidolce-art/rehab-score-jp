export const rcpmScale = {
  id: "rcpm",

  title:
    "Raven's Coloured Progressive Matrices",

  shortTitle: "RCPM",

  headerTitle:
    "RCPM：Raven色彩マトリックス検査",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "非言語性知能",
    "認知機能",
    "高次脳機能",
    "失語",
    "脳卒中",
    "注意",
    "OT",
    "ST",
    "心理士",
  ],

  showTotal: true,

  maxScore: 36,

  tabs: {
    overview:
      "RCPMは、非言語性知能や推理能力を評価する検査です。",

    tips:
      "失語症例でも比較的実施しやすく、急性期脳卒中でも用いられます。",
  },

  domains: [
    {
      id: "reasoning",
      title: "非言語性推理",

      items: [
        {
          id: "rcpm-total",
          label: "RCPM得点",
          type: "number",
          min: 0,
          max: 36,
        },
      ],
    },
  ],
};