export const tinettiPomaScale = {
  id: "tinetti-poma",

  title: "Tinetti Performance-Oriented Mobility Assessment",

  shortTitle: "Tinetti / POMA",

  headerTitle:
    "Tinetti / POMA：歩行・バランス評価",

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
    "運動器",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Tinetti / POMAは、バランス能力と歩行能力を評価し、転倒リスクや移動能力を把握するための尺度です。",

    tips:
      "バランス項目と歩行項目に分かれており、高齢者や神経疾患患者の転倒リスク評価に用いられます。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "バランスと歩行の両面から移動能力を評価します。",

      items: [
        {
          id: "poma-purpose",
          label: "目的",
          type: "text",
          description:
            "バランス障害、歩行障害、転倒リスクを総合的に把握します。",
        },
        {
          id: "poma-structure",
          label: "構成",
          type: "text",
          description:
            "バランス評価項目と歩行評価項目で構成されます。",
        },
        {
          id: "poma-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、合計点で移動能力や転倒リスクを評価します。正式な採点は原版・使用施設の手順に従ってください。",
        },
      ],
    },

    {
      id: "balance",

      title: "バランス評価",

      description:
        "座位・立位・姿勢変換時のバランスを評価します。",

      items: [
        {
          id: "poma-sitting",
          label: "座位バランス",
          type: "text",
          description:
            "座位での安定性を評価します。",
        },
        {
          id: "poma-rise",
          label: "立ち上がり",
          type: "text",
          description:
            "椅子からの立ち上がり動作を評価します。",
        },
        {
          id: "poma-standing",
          label: "立位バランス",
          type: "text",
          description:
            "立位保持、閉眼立位、外乱に対する反応などを評価します。",
        },
        {
          id: "poma-turning",
          label: "方向転換",
          type: "text",
          description:
            "360度回転や方向転換時の安定性を評価します。",
        },
        {
          id: "poma-sitting-down",
          label: "着座",
          type: "text",
          description:
            "安全に座る能力を評価します。",
        },
      ],
    },

    {
      id: "gait",

      title: "歩行評価",

      description:
        "歩容や歩行中の安定性を評価します。",

      items: [
        {
          id: "poma-initiation",
          label: "歩行開始",
          type: "text",
          description:
            "歩き始めのためらいや安定性を評価します。",
        },
        {
          id: "poma-step-length",
          label: "歩幅",
          type: "text",
          description:
            "左右の歩幅や足の振り出しを評価します。",
        },
        {
          id: "poma-step-symmetry",
          label: "歩行の対称性",
          type: "text",
          description:
            "左右差や非対称性を確認します。",
        },
        {
          id: "poma-continuity",
          label: "歩行の連続性",
          type: "text",
          description:
            "歩行が途切れず連続しているか評価します。",
        },
        {
          id: "poma-path",
          label: "歩行路の逸脱",
          type: "text",
          description:
            "歩行中のふらつきや進路逸脱を評価します。",
        },
        {
          id: "poma-trunk",
          label: "体幹",
          type: "text",
          description:
            "歩行中の体幹動揺や姿勢を評価します。",
        },
        {
          id: "poma-base",
          label: "歩隔",
          type: "text",
          description:
            "歩隔の広さや安定性を評価します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "転倒リスクと歩行・バランス能力を確認します。",

      items: [
        {
          id: "poma-fall",
          label: "転倒リスク",
          type: "text",
          description:
            "高齢者や神経疾患患者の転倒リスク評価に用いられます。",
        },
        {
          id: "poma-mobility",
          label: "移動能力",
          type: "text",
          description:
            "歩行だけでなく立ち上がり、方向転換、着座まで含めて移動能力を把握できます。",
        },
        {
          id: "poma-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後で歩行・バランス能力の変化を追跡します。",
        },
      ],
    },
  ],
};