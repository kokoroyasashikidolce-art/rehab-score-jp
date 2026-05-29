export const pcrsScale = {
  id: "pcrs",

  title:
    "Patient Competency Rating Scale",

  shortTitle: "PCRS",

  headerTitle:
    "PCRS：Patient Competency Rating Scale",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
    "adl-iadl",
    "qol-psychology",
  ],

  tags: [
    "病識",
    "社会復帰",
    "脳外傷",
    "高次脳機能",
    "ADL",
    "復職",
    "家族評価",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "PCRSは、本人と家族評価の差から病識や生活能力認識を評価する尺度です。",

    interpretation:
      "本人評価と家族評価の乖離が大きい場合、病識低下が示唆されます。",
  },

  domains: [
    {
      id: "self-awareness",
      title: "病識・自己認識",

      items: [
        {
          id: "pcrs-self",
          label: "本人評価",
          type: "text",
        },

        {
          id: "pcrs-family",
          label: "家族評価",
          type: "text",
        },

        {
          id: "pcrs-gap",
          label: "乖離",
          type: "text",
        },
      ],
    },
  ],
};