export const sdsaScale = {
  id: "sdsa",

  title:
    "Stroke Drivers Screening Assessment",

  shortTitle: "SDSA",

  headerTitle:
    "SDSA：脳卒中運転評価",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "運転",
    "脳卒中",
    "注意",
    "遂行機能",
    "高次脳機能",
    "OT",
    "医師",
    "復職",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SDSAは、脳卒中後患者の運転再開に関連する認知機能を評価する検査です。",

    interpretation:
      "注意、視空間認知、遂行機能など運転関連認知機能を評価します。",
  },

  domains: [
    {
      id: "driving",
      title: "運転関連認知機能",

      description:
        "運転に必要な認知機能を評価します。",

      items: [
        {
          id: "sdsa-result",
          label: "SDSA所見",
          type: "text",
        },
      ],
    },
  ],
};