export const frtScale = {
  id: "frt",

  title: "Functional Reach Test",

  shortTitle: "FRT",

  headerTitle:
    "FRT：Functional Reach Test",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "mobility-gait",
  ],

  tags: [
    "バランス",
    "姿勢",
    "歩行",
    "移動",
    "転倒",
    "重心移動",
    "立位",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "FRTは、立位で前方へどれだけ重心移動できるかを測定する簡便なバランス評価です。",

    tips:
      "静的立位だけでは分かりにくい動的バランス能力を評価できます。転倒リスクや立位安定性評価に広く用いられます。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "前方リーチ距離から動的バランス能力を評価します。",

      items: [
        {
          id: "frt-purpose",
          label: "目的",
          type: "text",
          description:
            "重心移動能力、立位安定性、転倒リスクを把握します。",
        },

        {
          id: "frt-target",
          label: "対象",
          type: "text",
          description:
            "高齢者、脳卒中、神経疾患、整形疾患など幅広く使用されます。",
        },

        {
          id: "frt-record",
          label: "記録",
          type: "text",
          description:
            "最大前方到達距離（cm）を記録します。",
        },
      ],
    },

    {
      id: "procedure",

      title: "実施方法",

      description:
        "立位で前方リーチ距離を測定します。",

      items: [
        {
          id: "frt-start",
          label: "開始姿勢",
          type: "text",
          description:
            "肩関節90°屈曲位で立位を取ります。",
        },

        {
          id: "frt-reach",
          label: "前方リーチ",
          type: "text",
          description:
            "足位置を変えず、可能な範囲で前方へ手を伸ばします。",
        },

        {
          id: "frt-distance",
          label: "測定距離",
          type: "text",
          description:
            "開始位置から最大到達位置までの距離を測定します。",
        },

        {
          id: "frt-repeat",
          label: "反復測定",
          type: "text",
          description:
            "複数回実施し、最大値または平均値を用いることがあります。",
        },
      ],
    },

    {
      id: "balance",

      title: "評価される機能",

      description:
        "前方重心移動能力を評価します。",

      items: [
        {
          id: "frt-dynamic",
          label: "動的バランス",
          type: "text",
          description:
            "支持基底面内での重心移動能力を評価します。",
        },

        {
          id: "frt-posture",
          label: "姿勢制御",
          type: "text",
          description:
            "体幹・下肢による姿勢保持能力を反映します。",
        },

        {
          id: "frt-stability",
          label: "安定限界",
          type: "text",
          description:
            "前方方向への安定限界を把握できます。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "転倒リスクや立位能力評価に用います。",

      items: [
        {
          id: "frt-fall",
          label: "転倒リスク",
          type: "text",
          description:
            "到達距離低下は転倒リスク上昇と関連します。",
        },

        {
          id: "frt-gait",
          label: "歩行能力との関連",
          type: "text",
          description:
            "立位安定性や歩行自立度との関連評価に用いられます。",
        },

        {
          id: "frt-follow",
          label: "経時評価",
          type: "text",
          description:
            "介入前後で重心移動能力の変化を追跡できます。",
        },
      ],
    },
  ],
};