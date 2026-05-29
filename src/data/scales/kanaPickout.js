export const kanaPickoutScale = {
  id: "kana-pickout",

  title:
    "かな拾いテスト",

  shortTitle: "かな拾い",

  headerTitle:
    "かな拾いテスト",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "注意",
    "注意障害",
    "高次脳機能",
    "脳卒中",
    "遂行機能",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "かな拾いテストは、注意機能や二重課題能力を簡便に評価する検査です。",
  },

  domains: [
    {
      id: "attention",
      title: "注意機能",

      items: [
        {
          id: "kana-result",
          label: "かな拾い所見",
          type: "text",
        },
      ],
    },
  ],
};