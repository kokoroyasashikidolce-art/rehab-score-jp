export const fmaleScale = {
  id: "fmale",

  title: "Fugl-Meyer Assessment Lower Extremity",

  shortTitle: "FMA-LE",

  headerTitle: "FMA-LE：Fugl-Meyer Assessment Lower Extremity",

  category: "motor-function",

  categories: [
    "motor-function",
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "下肢",
    "下肢機能",
    "歩行",
    "移動",
    "麻痺",
    "脳卒中",
    "片麻痺",
    "運動機能",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: true,

  maxScore: 34,

  tabs: {
    overview:
      "FMA-LEは、脳卒中後片麻痺患者の下肢運動機能を評価するFugl-Meyer Assessmentの下肢項目です。",

    tips:
      "0〜34点で評価し、高得点ほど下肢運動機能が良好です。歩行能力そのものではなく、下肢の運動麻痺や協調性を把握する評価として用います。",
  },

  domains: [
    {
      id: "summary",

      title: "評価概要",

      description:
        "FMA下肢項目を評価します。",

      items: [
        {
          id: "fmale-score",

          label: "総得点",

          type: "text",

          description:
            "0〜34点。高得点ほど下肢運動機能が良好です。",
        },
      ],
    },
  ],
};