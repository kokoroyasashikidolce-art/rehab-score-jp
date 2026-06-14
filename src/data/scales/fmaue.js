export const fmaueScale = {
  id: "fmaue",

  title: "Fugl-Meyer Assessment Upper Extremity",

  shortTitle: "FMA-UE",

  headerTitle: "FMA-UE：Fugl-Meyer Assessment Upper Extremity",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "上肢",
    "上肢機能",
    "麻痺",
    "脳卒中",
    "片麻痺",
    "運動機能",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: true,

  maxScore: 66,

  tabs: {
    overview:
      "FMA-UEは、脳卒中後片麻痺患者の上肢運動機能を評価するFugl-Meyer Assessmentの上肢項目です。",

    tips:
      "0〜66点で評価し、高得点ほど上肢運動機能が良好です。ARATやSTEFなどの上肢活動評価と併用すると、運動麻痺と実用動作の両面を把握しやすくなります。",
  },

  domains: [
    {
      id: "summary",

      title: "評価概要",

      description:
        "FMA上肢項目を評価します。",

      items: [
        {
          id: "fmaue-score",

          label: "総得点",

          type: "text",

          description:
            "0〜66点。高得点ほど上肢運動機能が良好です。",
        },
      ],
    },
  ],
};