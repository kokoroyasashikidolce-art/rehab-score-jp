export const wcstScale = {
  id: "wcst",

  title:
    "Wisconsin Card Sorting Test",

  shortTitle: "WCST",

  headerTitle:
    "WCST：Wisconsin Card Sorting Test",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "遂行機能",
    "前頭葉",
    "認知機能",
    "セット転換",
    "注意",
    "高次脳機能",
    "脳卒中",
    "OT",
    "心理士",
  ],

  showTotal: false,

  tabs: {
    overview:
      "WCSTは、遂行機能や概念形成、セット転換能力を評価する検査です。",
  },

  domains: [
    {
      id: "executive",
      title: "遂行機能",

      items: [
        {
          id: "wcst-result",
          label: "WCST所見",
          type: "text",
        },
      ],
    },
  ],
};