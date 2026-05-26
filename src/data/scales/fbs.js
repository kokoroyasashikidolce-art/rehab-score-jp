export const fbsScale = {
  id: "fbs",

  title: "Functional Balance Scale",

  shortTitle: "FBS",

  headerTitle:
    "FBS：Functional Balance Scale",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "バランス",
    "姿勢",
    "歩行",
    "移動",
    "転倒",
    "高齢",
    "脳卒中",
    "片麻痺",
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
      "FBSは、立位・座位・移乗・方向転換などを評価するバランス尺度です。BBSと同様の構成で運用されることがあります。",

    tips:
      "静的バランスだけでなく、動的バランスや移動能力も反映します。転倒リスク評価や歩行自立度把握に利用されます。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "14項目で姿勢制御とバランス能力を評価します。",

      items: [
        {
          id: "fbs-items",
          label: "評価項目",
          type: "text",
          description:
            "座位保持、立位保持、移乗、方向転換、前方リーチ、片脚立位などで構成されます。",
        },

        {
          id: "fbs-score",
          label: "採点",
          type: "text",
          description:
            "各項目0〜4点で評価し、合計56点満点です。",
        },

        {
          id: "fbs-meaning",
          label: "解釈",
          type: "text",
          description:
            "高得点ほどバランス能力良好、低得点ほど転倒リスク増加を示します。",
        },
      ],
    },

    {
      id: "static-balance",

      title: "静的バランス",

      description:
        "一定姿勢保持能力を評価します。",

      items: [
        {
          id: "fbs-sitting",
          label: "座位保持",
          type: "text",
          description:
            "支持なし座位保持能力を評価します。",
        },

        {
          id: "fbs-standing",
          label: "立位保持",
          type: "text",
          description:
            "支持なし立位保持能力を評価します。",
        },

        {
          id: "fbs-eyes-closed",
          label: "閉眼立位",
          type: "text",
          description:
            "視覚入力を減らした状態で姿勢保持能力を確認します。",
        },
      ],
    },

    {
      id: "dynamic-balance",

      title: "動的バランス",

      description:
        "姿勢変換や重心移動能力を評価します。",

      items: [
        {
          id: "fbs-transfer",
          label: "移乗",
          type: "text",
          description:
            "椅子間移乗時のバランス能力を評価します。",
        },

        {
          id: "fbs-reaching",
          label: "前方リーチ",
          type: "text",
          description:
            "重心移動を伴う前方到達動作を評価します。",
        },

        {
          id: "fbs-turning",
          label: "方向転換",
          type: "text",
          description:
            "360度回転など方向転換時の安定性を評価します。",
        },

        {
          id: "fbs-single-leg",
          label: "片脚立位",
          type: "text",
          description:
            "片脚支持時の姿勢制御を評価します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "転倒リスクや移動能力を把握します。",

      items: [
        {
          id: "fbs-fall",
          label: "転倒リスク評価",
          type: "text",
          description:
            "高齢者、脳卒中、神経疾患で転倒リスク評価に利用されます。",
        },

        {
          id: "fbs-gait",
          label: "歩行能力との関連",
          type: "text",
          description:
            "歩行自立度や移動能力との関連を確認できます。",
        },

        {
          id: "fbs-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ前後でバランス能力変化を追跡します。",
        },
      ],
    },
  ],
};