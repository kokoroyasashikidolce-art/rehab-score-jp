export const dexScale = {
  id: "dex",

  title:
    "Dysexecutive Questionnaire",

  shortTitle: "DEX",

  headerTitle:
    "DEX：Dysexecutive Questionnaire",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
    "qol-psychology",
  ],

  tags: [
    "遂行機能",
    "前頭葉",
    "行動障害",
    "高次脳機能",
    "脳外傷",
    "病識",
    "家族評価",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "DEXは、遂行機能障害に伴う日常行動上の問題を評価する質問紙です。",
  },

  domains: [
    {
      id: "behavior",
      title: "遂行機能障害行動",

      items: [
        {
          id: "dex-observation",
          label: "DEX所見",
          type: "text",
        },
      ],
    },
  ],
};