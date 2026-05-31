export const kwcstScale = {
  id: "kwcst",

  title:
    "Keio Version Wisconsin Card Sorting Test",

  shortTitle: "KWCST",

  headerTitle:
    "KWCST：慶應版Wisconsin Card Sorting Test",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "遂行機能",
    "前頭葉",
    "セット転換",
    "概念形成",
    "認知機能",
    "高次脳機能",
    "脳卒中",
    "脳外傷",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "KWCSTは、WCSTを日本向けに標準化した遂行機能検査です。概念形成能力、認知的柔軟性、セット転換能力を評価します。",

    interpretation:
      "前頭葉機能障害や遂行機能障害の評価に用いられます。保続反応やカテゴリー達成数などが重要な指標となります。",

    tips:
      "脳卒中、脳外傷、認知症、パーキンソン病などで使用されます。FABやBADSと併用すると前頭葉機能の評価がしやすくなります。",
  },

  domains: [
    {
      id: "executive-function",

      title: "遂行機能",

      description:
        "概念形成、認知的柔軟性、セット転換能力を評価します。",

      items: [
        {
          id: "kwcst-categories",

          label: "達成カテゴリー数",

          type: "text",

          description:
            "達成したカテゴリー数を記録します。",
        },

        {
          id: "kwcst-perseveration",

          label: "保続反応",

          type: "text",

          description:
            "保続反応の有無や程度を記録します。",
        },

        {
          id: "kwcst-errors",

          label: "エラー傾向",

          type: "text",

          description:
            "誤反応や特徴的なエラーパターンを記録します。",
        },

        {
          id: "kwcst-summary",

          label: "総合所見",

          type: "text",

          description:
            "遂行機能障害の特徴をまとめます。",
        },
      ],
    },
  ],
};