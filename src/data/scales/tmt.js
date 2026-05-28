export const tmtScale = {
  id: "tmt",

  title: "Trail Making Test",

  shortTitle: "TMT",

  headerTitle:
    "TMT：Trail Making Test",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "注意",
    "遂行機能",
    "処理速度",
    "認知機能",
    "高次脳機能",
    "脳卒中",
    "前頭葉",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "TMTは、注意機能、遂行機能、情報処理速度を評価する検査です。",

    interpretation:
      "Part Bで特に遂行機能やセット転換能力を評価します。",
  },

  domains: [
    {
      id: "tmt-a",
      title: "TMT-A",

      description:
        "注意・視覚探索・処理速度を評価します。",

      items: [
        {
          id: "tmt-a-time",
          label: "所要時間（秒）",
          type: "number",
          min: 0,
          max: 999,
        },
      ],
    },

    {
      id: "tmt-b",
      title: "TMT-B",

      description:
        "注意配分・遂行機能を評価します。",

      items: [
        {
          id: "tmt-b-time",
          label: "所要時間（秒）",
          type: "number",
          min: 0,
          max: 999,
        },
      ],
    },
  ],
};