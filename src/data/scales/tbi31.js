export const tbi31Scale = {
  id: "tbi-31",

  title:
    "TBI-31",

  shortTitle: "TBI-31",

  headerTitle:
    "TBI-31：脳外傷生活障害評価",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
    "qol-psychology",
  ],

  tags: [
    "脳外傷",
    "高次脳機能",
    "社会復帰",
    "生活障害",
    "QOL",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "TBI-31は、脳外傷後の生活障害や行動障害を評価する尺度です。",
  },

  domains: [
    {
      id: "daily-life",
      title: "生活障害",

      items: [
        {
          id: "tbi31-observation",
          label: "TBI-31所見",
          type: "text",
        },
      ],
    },
  ],
};