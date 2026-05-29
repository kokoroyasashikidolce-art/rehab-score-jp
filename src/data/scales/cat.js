export const catScale = {
  id: "cat",

  title: "Clinical Assessment for Attention",

  shortTitle: "CAT",

  headerTitle:
    "CAT：標準注意検査法",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "注意",
    "注意障害",
    "高次脳機能",
    "脳卒中",
    "半側空間無視",
    "遂行機能",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CATは、注意機能障害を詳細に評価する標準検査です。",

    interpretation:
      "選択性注意、持続性注意、転換性注意、配分性注意などを評価します。",
  },

  domains: [
    {
      id: "attention",
      title: "注意機能",

      description:
        "注意機能を包括的に評価します。",

      items: [
        {
          id: "cat-observation",
          label: "CAT所見",
          type: "text",
          description:
            "注意障害の特徴や低下領域を記録します。",
        },
      ],
    },
  ],
};