export const casScale = {
  id: "cas",

  title:
    "Clinical Assessment for Spontaneity",

  shortTitle: "CAS",

  headerTitle:
    "CAS：標準意欲評価法",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
    "qol-psychology",
  ],

  tags: [
    "意欲",
    "アパシー",
    "前頭葉",
    "高次脳機能",
    "脳卒中",
    "パーキンソン病",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CASは、意欲低下・自発性低下を評価する検査です。",

    interpretation:
      "アパシーや前頭葉機能障害に伴う自発性低下を評価します。",
  },

  domains: [
    {
      id: "motivation",
      title: "意欲・自発性",

      description:
        "自発性や意欲低下を評価します。",

      items: [
        {
          id: "cas-total",
          label: "CAS所見",
          type: "text",
        },
      ],
    },
  ],
};