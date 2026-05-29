export const kohsScale = {
  id: "kohs",

  title:
    "Kohs Block Design Test",

  shortTitle: "Kohs",

  headerTitle:
    "Kohs：コース立方体組み合わせテスト",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "視空間",
    "構成",
    "知能",
    "認知機能",
    "高次脳機能",
    "脳卒中",
    "OT",
    "心理士",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Kohsは、視空間認知や構成能力を評価する検査です。",
  },

  domains: [
    {
      id: "construction",
      title: "構成能力",

      items: [
        {
          id: "kohs-score",
          label: "Kohs所見",
          type: "text",
        },
      ],
    },
  ],
};