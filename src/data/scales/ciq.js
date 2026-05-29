export const ciqScale = {
  id: "ciq",

  title:
    "Community Integration Questionnaire",

  shortTitle: "CIQ",

  headerTitle:
    "CIQ：Community Integration Questionnaire",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
    "adl-iadl",
    "qol-psychology",
  ],

  tags: [
    "社会参加",
    "社会復帰",
    "脳外傷",
    "ADL",
    "IADL",
    "復職",
    "QOL",
    "OT",
    "医師",
  ],

  showTotal: true,

  tabs: {
    overview:
      "CIQは、地域生活や社会参加の程度を評価する尺度です。",
  },

  domains: [
    {
      id: "integration",
      title: "社会統合",

      items: [
        {
          id: "ciq-total",
          label: "CIQ合計点",
          type: "number",
          min: 0,
          max: 29,
        },
      ],
    },
  ],
};