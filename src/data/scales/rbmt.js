export const rbmtScale = {
  id: "rbmt",

  title:
    "Rivermead Behavioural Memory Test",

  shortTitle: "RBMT",

  headerTitle:
    "RBMT：Rivermead Behavioural Memory Test",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "記憶",
    "認知機能",
    "高次脳機能",
    "脳卒中",
    "健忘",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: true,

  tabs: {
    overview:
      "RBMTは、日常生活に近い記憶機能を評価する検査です。",

    interpretation:
      "展望記憶やエピソード記憶を含めた実用的記憶機能を評価します。",
  },

  domains: [
    {
      id: "memory",
      title: "記憶機能",

      description:
        "日常生活場面で必要な記憶機能を評価します。",

      items: [
        {
          id: "rbmt-standard",
          label: "標準プロフィール点",
          type: "number",
          min: 0,
          max: 24,
        },

        {
          id: "rbmt-screening",
          label: "スクリーニング点",
          type: "number",
          min: 0,
          max: 12,
        },
      ],
    },
  ],
};