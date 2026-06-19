export const cadlScale = {
  id: "cadl",

  title:
    "Communicative Abilities in Daily Living",

  shortTitle: "CADL",

  headerTitle:
    "CADL：実用コミュニケーション能力検査",

  category: "language-communication",

  categories: [
    "language-communication",
    "adl-iadl",
  ],

  tags: [
    "コミュニケーション",
    "失語症",
    "実用コミュニケーション",
    "ADL",
    "脳卒中",
    "ST",
    "OT",
    "医師",
    "生活期",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CADLは、日常生活場面における実用的なコミュニケーション能力を評価する検査です。",

    interpretation:
      "言語検査上の能力だけでなく、実際の生活場面で意思疎通がどの程度可能かを把握します。",

    tips:
      "SLTAやWABで言語機能を評価し、CADLで生活場面での実用性を確認すると、訓練目標を立てやすくなります。",
  },

  domains: [
    {
      id: "daily-communication",

      title: "日常生活コミュニケーション",

      description:
        "生活場面での意思疎通能力を評価します。",

      items: [
        {
          id: "cadl-basic",

          label: "基本的意思伝達",

          type: "text",

          description:
            "挨拶、要求、返答など基本的な意思伝達を確認します。",
        },

        {
          id: "cadl-understanding",

          label: "理解",

          type: "text",

          description:
            "日常場面での会話理解や指示理解を確認します。",
        },

        {
          id: "cadl-expression",

          label: "表出",

          type: "text",

          description:
            "自分の意思や必要な情報を相手に伝えられるか確認します。",
        },

        {
          id: "cadl-social",

          label: "社会的コミュニケーション",

          type: "text",

          description:
            "電話、買い物、対人場面など社会生活上の意思疎通を確認します。",
        },

        {
          id: "cadl-summary",

          label: "総合所見",

          type: "text",

          description:
            "生活場面での実用的コミュニケーション能力をまとめます。",
        },
      ],
    },
  ],
};