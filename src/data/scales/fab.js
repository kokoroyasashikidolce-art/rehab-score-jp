export const fabScale = {
  id: "fab",

  title: "Frontal Assessment Battery",

  shortTitle: "FAB",

  headerTitle:
    "FAB：Frontal Assessment Battery",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "前頭葉",
    "遂行機能",
    "認知機能",
    "高次脳機能",
    "注意",
    "パーキンソン病",
    "脳卒中",
    "医師",
    "OT",
    "ST",
  ],

  showTotal: true,

  maxScore: 18,

  tabs: {
    overview:
      "FABは、前頭葉機能・遂行機能を簡便に評価する検査です。",

    interpretation:
      "低下時は前頭葉機能障害や遂行機能障害を示唆します。",
  },

  domains: [
    {
      id: "fab-main",
      title: "前頭葉機能",

      description:
        "概念化、語流暢性、運動系列、干渉抑制などを評価します。",

      items: [
        {
          id: "fab-total",
          label: "FAB合計点",
          type: "number",
          min: 0,
          max: 18,
        },
      ],
    },
  ],
};