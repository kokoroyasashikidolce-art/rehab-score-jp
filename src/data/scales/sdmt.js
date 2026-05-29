export const sdmtScale = {
  id: "sdmt",

  title:
    "Symbol Digit Modalities Test",

  shortTitle: "SDMT",

  headerTitle:
    "SDMT：Symbol Digit Modalities Test",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "注意",
    "処理速度",
    "認知機能",
    "高次脳機能",
    "脳卒中",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SDMTは、注意機能や情報処理速度を評価する検査です。",
  },

  domains: [
    {
      id: "processing",
      title: "処理速度",

      items: [
        {
          id: "sdmt-score",
          label: "SDMT得点",
          type: "number",
          min: 0,
          max: 999,
        },
      ],
    },
  ],
};