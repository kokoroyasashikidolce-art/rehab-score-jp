export const dysarthriaAssessmentScale = {
  id: "dysarthria-assessment",

  title: "標準ディサースリア検査",

  shortTitle: "標準ディサースリア",

  headerTitle:
    "標準ディサースリア検査",

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
    "神経筋疾患",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "標準ディサースリア検査は、日本で広く使用される構音障害評価です。発声・共鳴・構音・プロソディなどを評価します。",

    interpretation:
      "構音障害の特徴や重症度、病型推定に利用します。",

    tips:
      "失語症評価とは別に、発話運動機能を評価します。",
  },

  domains: [
    {
      id: "respiration",

      title: "呼吸",

      description:
        "発話に必要な呼吸機能を評価します。",

      items: [
        {
          id: "dysarthria-respiration",

          label: "呼吸機能",

          type: "text",
        },
      ],
    },

    {
      id: "phonation",

      title: "発声",

      description:
        "声質や発声持続を評価します。",

      items: [
        {
          id: "dysarthria-phonation",

          label: "発声",

          type: "text",
        },
      ],
    },

    {
      id: "articulation",

      title: "構音",

      description:
        "子音・母音の明瞭度を評価します。",

      items: [
        {
          id: "dysarthria-articulation",

          label: "構音",

          type: "text",
        },
      ],
    },

    {
      id: "prosody",

      title: "プロソディ",

      description:
        "抑揚、速度、リズムを評価します。",

      items: [
        {
          id: "dysarthria-prosody",

          label: "プロソディ",

          type: "text",
        },
      ],
    },

    {
      id: "summary",

      title: "総合所見",

      description:
        "ディサースリアの特徴をまとめます。",

      items: [
        {
          id: "dysarthria-summary",

          label: "総合所見",

          type: "text",
        },
      ],
    },
  ],
};