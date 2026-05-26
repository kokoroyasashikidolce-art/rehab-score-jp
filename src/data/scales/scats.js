export const scatsScale = {
  id: "scats",

  title:
    "Spinal Cord Assessment Tool for Spastic Reflexes",

  shortTitle: "SCATS",

  headerTitle:
    "SCATS：Spastic Reflexes",

  category: "tone-spasticity",

  categories: [
    "tone-spasticity",
    "spinal-cord-injury",
  ],

  tags: [
    "痙縮",
    "脊髄損傷",
    "クローヌス",
    "SCI",
    "spasm",
    "PT",
    "OT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SCATSは脊髄損傷患者の痙縮反射を評価します。",

    tips:
      "クローヌス、屈曲痙縮、伸展痙縮を確認します。",
  },

  domains: [
    {
      id: "clonus",
      title: "クローヌス",
      description:
        "足クローヌスなどを評価します。",
      items: [
        {
          id: "scats-clonus",
          label: "クローヌス",
          type: "text",
          description:
            "持続時間や強さを確認します。",
        },
      ],
    },

    {
      id: "flexor",
      title: "屈曲痙縮",
      description:
        "屈曲反応を評価します。",
      items: [
        {
          id: "scats-flexor",
          label: "屈曲痙縮",
          type: "text",
          description:
            "刺激後の屈曲反応を確認します。",
        },
      ],
    },

    {
      id: "extensor",
      title: "伸展痙縮",
      description:
        "伸展反応を評価します。",
      items: [
        {
          id: "scats-extensor",
          label: "伸展痙縮",
          type: "text",
          description:
            "刺激後の伸展反応を評価します。",
        },
      ],
    },
  ],
};