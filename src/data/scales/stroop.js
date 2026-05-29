export const stroopScale = {
  id: "stroop",

  title: "Stroop Test",

  shortTitle: "Stroop",

  headerTitle:
    "Stroop Test：ストループ検査",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "注意",
    "遂行機能",
    "抑制",
    "前頭葉",
    "高次脳機能",
    "脳卒中",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Stroop Testは、注意制御や反応抑制を評価する検査です。",
  },

  domains: [
    {
      id: "attention",
      title: "注意・抑制",

      items: [
        {
          id: "stroop-result",
          label: "Stroop所見",
          type: "text",
        },
      ],
    },
  ],
};