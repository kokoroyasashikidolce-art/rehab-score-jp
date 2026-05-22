export const camIcuScale = {
  id: "cam-icu",

  title:
    "Confusion Assessment Method for ICU",

  shortTitle: "CAM-ICU",

  headerTitle:
    "CAM-ICU：せん妄評価",

  category: "consciousness",

  categories: [
    "consciousness",
  ],

  tags: [
    "意識",
    "せん妄",
    "ICU",
    "急性期",
    "高齢",
    "認知",
    "看護",
    "医師",
    "PT",
    "OT",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CAM-ICUはICU患者や急性期患者のせん妄を評価する尺度です。",

    tips:
      "Feature1 + Feature2 + (Feature3 または Feature4) でせん妄陽性と判定します。RASS評価後に実施することが推奨されます。",
  },

  domains: [
    {
      id: "feature1",

      title:
        "Feature 1：急性発症または変動",

      description:
        "急性変化または日内変動の有無",

      items: [
        {
          id: "cam-f1",

          label:
            "急性発症・変動あり",

          type: "text",

          description:
            "意識状態や精神状態が急性に変化、または日内変動する。",
        },
      ],
    },

    {
      id: "feature2",

      title:
        "Feature 2：注意障害",

      description:
        "注意集中の障害",

      items: [
        {
          id: "cam-f2",

          label:
            "注意障害あり",

          type: "text",

          description:
            "呼びかけ、文字課題、握手課題などで注意障害を認める。",
        },
      ],
    },

    {
      id: "feature3",

      title:
        "Feature 3：意識レベル変化",

      description:
        "RASS 0以外",

      items: [
        {
          id: "cam-f3",

          label:
            "RASS異常",

          type: "text",

          description:
            "RASS 0以外（過覚醒または低覚醒）。",
        },
      ],
    },

    {
      id: "feature4",

      title:
        "Feature 4：思考障害",

      description:
        "質問応答・命令遂行",

      items: [
        {
          id: "cam-f4",

          label:
            "思考障害あり",

          type: "text",

          description:
            "質問への誤答、命令遂行困難などを認める。",
        },
      ],
    },

    {
      id: "diagnosis",

      title:
        "判定方法",

      description:
        "CAM-ICU陽性条件",

      items: [
        {
          id: "cam-rule",

          label:
            "Feature1 + Feature2 + (Feature3 または Feature4)",

          type: "text",

          description:
            "上記条件を満たすとCAM-ICU陽性（せん妄あり）と判定します。",
        },
      ],
    },
  ],
};