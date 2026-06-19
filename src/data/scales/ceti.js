export const cetiScale = {
  id: "ceti",

  title:
    "Communicative Effectiveness Index",

  shortTitle: "CETI",

  headerTitle:
    "CETI：Communicative Effectiveness Index",

  category: "language-communication",

  categories: [
    "language-communication",
    "adl-iadl",
    "qol-psychology",
  ],

  tags: [
    "コミュニケーション",
    "失語症",
    "実用コミュニケーション",
    "家族評価",
    "QOL",
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
      "CETIは、失語症者の実用的コミュニケーション能力を家族や介護者の視点から評価する尺度です。",

    interpretation:
      "日常生活でどの程度効果的に意思疎通できているかを把握します。",

    tips:
      "本人の検査場面での成績だけでなく、家庭や地域生活でのコミュニケーションの実用性を評価できます。",
  },

  domains: [
    {
      id: "communicative-effectiveness",

      title: "コミュニケーション効果",

      description:
        "日常生活での意思疎通の有効性を評価します。",

      items: [
        {
          id: "ceti-family",

          label: "家族・介護者評価",

          type: "text",

          description:
            "家族や介護者から見た実用コミュニケーション能力を確認します。",
        },

        {
          id: "ceti-understanding",

          label: "理解し伝える力",

          type: "text",

          description:
            "日常会話で相手の内容を理解し、自分の意思を伝えられるか確認します。",
        },

        {
          id: "ceti-social",

          label: "社会的場面",

          type: "text",

          description:
            "電話、外出、買い物、対人交流などでの意思疎通を確認します。",
        },

        {
          id: "ceti-follow",

          label: "経時評価",

          type: "text",

          description:
            "言語療法や生活環境調整後の変化を追跡します。",
        },
      ],
    },
  ],
};