export const miniBestestScale = {
  id: "mini-bestest",

  title: "Mini-BESTest",

  shortTitle: "Mini-BESTest",

  headerTitle:
    "Mini-BESTest：バランス評価",

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
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "神経疾患",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Mini-BESTestは、動的バランス能力を複数の側面から評価する尺度です。",

    tips:
      "BBSよりも動的バランスや反応性姿勢制御、感覚依存性、歩行中の安定性を評価しやすい点が特徴です。パーキンソン病や高齢者の転倒リスク評価にも用いられます。",
  },

  domains: [
    {
      id: "overview",
      title: "評価の概要",
      description:
        "動的バランス能力を複数領域で評価します。",
      items: [
        {
          id: "mini-bestest-purpose",
          label: "目的",
          type: "text",
          description:
            "姿勢制御、反応性バランス、感覚統合、歩行中の安定性を評価します。",
        },
        {
          id: "mini-bestest-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、合計点でバランス能力を把握します。正式な採点は原版・マニュアルに従ってください。",
        },
      ],
    },

    {
      id: "anticipatory",
      title: "予測的姿勢制御",
      description:
        "動作開始前後の姿勢制御を評価します。",
      items: [
        {
          id: "mini-bestest-sit-to-stand",
          label: "立ち上がり",
          type: "text",
          description:
            "座位から立位への移行時の姿勢制御を評価します。",
        },
        {
          id: "mini-bestest-rise-to-toes",
          label: "つま先立ち",
          type: "text",
          description:
            "支持基底面が狭い状態での姿勢保持を評価します。",
        },
        {
          id: "mini-bestest-one-leg",
          label: "片脚立位",
          type: "text",
          description:
            "片脚支持での静的・動的バランスを評価します。",
        },
      ],
    },

    {
      id: "reactive",
      title: "反応性姿勢制御",
      description:
        "外乱に対する姿勢反応を評価します。",
      items: [
        {
          id: "mini-bestest-forward",
          label: "前方ステップ反応",
          type: "text",
          description:
            "前方への外乱に対するステップ反応を評価します。",
        },
        {
          id: "mini-bestest-backward",
          label: "後方ステップ反応",
          type: "text",
          description:
            "後方への外乱に対するステップ反応を評価します。",
        },
        {
          id: "mini-bestest-lateral",
          label: "側方ステップ反応",
          type: "text",
          description:
            "側方への外乱に対するステップ反応を評価します。",
        },
      ],
    },

    {
      id: "sensory-orientation",
      title: "感覚依存性",
      description:
        "視覚・体性感覚などの条件変化下での姿勢制御を評価します。",
      items: [
        {
          id: "mini-bestest-firm-eyes-open",
          label: "硬い床面・開眼",
          type: "text",
          description:
            "通常条件での立位姿勢保持を評価します。",
        },
        {
          id: "mini-bestest-foam-eyes-closed",
          label: "フォーム上・閉眼",
          type: "text",
          description:
            "視覚情報を制限し、体性感覚条件を変化させた状態で姿勢制御を評価します。",
        },
        {
          id: "mini-bestest-incline-eyes-closed",
          label: "傾斜面・閉眼",
          type: "text",
          description:
            "不安定な感覚条件下での姿勢定位を評価します。",
        },
      ],
    },

    {
      id: "dynamic-gait",
      title: "動的歩行",
      description:
        "歩行中のバランス・方向転換・二重課題などを評価します。",
      items: [
        {
          id: "mini-bestest-gait-speed",
          label: "歩行速度変化",
          type: "text",
          description:
            "歩行速度を変化させた際の安定性を評価します。",
        },
        {
          id: "mini-bestest-head-turn",
          label: "頭部回旋歩行",
          type: "text",
          description:
            "頭部を左右に動かしながら歩行した際の安定性を評価します。",
        },
        {
          id: "mini-bestest-pivot-turn",
          label: "方向転換",
          type: "text",
          description:
            "歩行中の素早い方向転換能力を評価します。",
        },
        {
          id: "mini-bestest-obstacle",
          label: "障害物またぎ",
          type: "text",
          description:
            "障害物をまたぐ際の歩行バランスを評価します。",
        },
        {
          id: "mini-bestest-tug-dual",
          label: "TUG二重課題",
          type: "text",
          description:
            "移動課題と認知課題を同時に行った際の安定性を評価します。",
        },
      ],
    },
  ],
};