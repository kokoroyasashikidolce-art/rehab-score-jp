export const badsScale = {
  id: "bads",

  title:
    "Behavioural Assessment of the Dysexecutive Syndrome",

  shortTitle: "BADS",

  headerTitle:
    "BADS：遂行機能障害症候群の行動評価",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "遂行機能",
    "前頭葉",
    "高次脳機能",
    "認知機能",
    "脳卒中",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: true,

  tabs: {
    overview:
      "BADSは、遂行機能障害を日常生活に近い課題で評価する検査です。",

    interpretation:
      "計画、問題解決、柔軟性、行動調整などを評価します。",
  },

  domains: [
    {
      id: "executive",
      title: "遂行機能",

      description:
        "遂行機能障害を包括的に評価します。",

      items: [
        {
          id: "bads-total",
          label: "総プロフィール点",
          type: "number",
          min: 0,
          max: 24,
        },

        {
          id: "bads-age",
          label: "年齢補正標準化得点",
          type: "number",
          min: 0,
          max: 10,
        },
      ],
    },
  ],
};