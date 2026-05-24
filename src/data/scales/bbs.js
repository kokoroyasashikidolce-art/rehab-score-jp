export const bbsScale = {
  id: "bbs",

  title: "Berg Balance Scale",

  shortTitle: "BBS",

  headerTitle:
    "BBS：Berg Balance Scale",

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
      "BBSは、座位・立位・移乗・リーチ・方向転換などを通してバランス能力を評価する尺度です。",

    tips:
      "BBSは転倒リスクや歩行自立度の把握に役立ちます。14項目を0〜4点で評価し、最大56点です。",
  },

  domains: [
    {
      id: "overview",

      title: "評価の概要",

      description:
        "14項目でバランス能力を評価します。",

      items: [
        {
          id: "bbs-items",
          label: "14項目",
          type: "text",
          description:
            "座位保持、立位保持、移乗、リーチ、方向転換、片脚立位などの課題で構成されます。",
        },
        {
          id: "bbs-score",
          label: "採点",
          type: "text",
          description:
            "各項目を0〜4点で採点し、合計56点満点です。",
        },
        {
          id: "bbs-meaning",
          label: "解釈",
          type: "text",
          description:
            "点数が高いほどバランス能力が良好で、点数が低いほど転倒リスクや介助の必要性が高くなります。",
        },
      ],
    },

    {
      id: "tasks",

      title: "主な評価課題",

      description:
        "BBSで評価される代表的な課題です。",

      items: [
        {
          id: "bbs-sit-to-stand",
          label: "立ち上がり",
          type: "text",
          description:
            "座位から立位への移行能力を評価します。",
        },
        {
          id: "bbs-standing",
          label: "立位保持",
          type: "text",
          description:
            "支持なし立位や閉眼立位などで姿勢保持能力を評価します。",
        },
        {
          id: "bbs-transfer",
          label: "移乗",
          type: "text",
          description:
            "椅子から椅子への移乗能力を評価します。",
        },
        {
          id: "bbs-reaching",
          label: "前方リーチ",
          type: "text",
          description:
            "立位で前方へ手を伸ばす動作から動的バランスを評価します。",
        },
        {
          id: "bbs-turning",
          label: "方向転換",
          type: "text",
          description:
            "360度回転や振り向き動作を通して方向転換能力を評価します。",
        },
        {
          id: "bbs-single-leg",
          label: "片脚立位",
          type: "text",
          description:
            "片脚立位保持により高度な立位バランスを評価します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "転倒リスクやバランス能力の経時変化を確認します。",

      items: [
        {
          id: "bbs-fall-risk",
          label: "転倒リスク",
          type: "text",
          description:
            "高齢者、脳卒中、パーキンソン病などで転倒リスク評価に利用されます。",
        },
        {
          id: "bbs-gait",
          label: "歩行自立度との関連",
          type: "text",
          description:
            "歩行自立度や移動能力の把握に役立ちます。",
        },
        {
          id: "bbs-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後で合計点を比較し、バランス能力の変化を追跡します。",
        },
      ],
    },
  ],
};