export const fda2Scale = {
  id: "fda-2",

  title:
    "Frenchay Dysarthria Assessment-2",

  shortTitle: "FDA-2",

  headerTitle:
    "FDA-2：Frenchay Dysarthria Assessment",

  category:
    "language-communication",

  categories: [
    "language-communication",
  ],

  tags: [
    "構音障害",
    "ディサースリア",
    "発話",
    "コミュニケーション",
    "脳卒中",
    "パーキンソン病",
    "ALS",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "FDA-2は、ディサースリアを包括的に評価する国際的な構音障害評価です。",

    interpretation:
      "反射、呼吸、口唇、舌、軟口蓋、喉頭機能などを詳細に評価します。",

    tips:
      "病型鑑別や経過観察に有用です。",
  },

  domains: [
    {
      id: "reflex",

      title: "反射",

      description:
        "咳嗽反射や嚥下関連反射を評価します。",

      items: [
        {
          id: "fda-reflex",

          label: "反射",

          type: "text",
        },
      ],
    },

    {
      id: "respiration",

      title: "呼吸",

      description:
        "発話呼吸を評価します。",

      items: [
        {
          id: "fda-respiration",

          label: "呼吸",

          type: "text",
        },
      ],
    },

    {
      id: "lips",

      title: "口唇",

      description:
        "口唇運動を評価します。",

      items: [
        {
          id: "fda-lips",

          label: "口唇",

          type: "text",
        },
      ],
    },

    {
      id: "tongue",

      title: "舌",

      description:
        "舌運動を評価します。",

      items: [
        {
          id: "fda-tongue",

          label: "舌",

          type: "text",
        },
      ],
    },

    {
      id: "palate",

      title: "軟口蓋",

      description:
        "鼻咽腔閉鎖機能を評価します。",

      items: [
        {
          id: "fda-palate",

          label: "軟口蓋",

          type: "text",
        },
      ],
    },

    {
      id: "larynx",

      title: "喉頭",

      description:
        "発声機能を評価します。",

      items: [
        {
          id: "fda-larynx",

          label: "喉頭",

          type: "text",
        },
      ],
    },

    {
      id: "speech",

      title: "発話",

      description:
        "会話時の明瞭度を評価します。",

      items: [
        {
          id: "fda-speech",

          label: "発話明瞭度",

          type: "text",
        },
      ],
    },

    {
      id: "summary",

      title: "総合所見",

      description:
        "ディサースリアの病型や特徴を整理します。",

      items: [
        {
          id: "fda-summary",

          label: "総合所見",

          type: "text",
        },
      ],
    },
  ],
};