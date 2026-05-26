export const fgaScale = {
  id: "fga",

  title: "Functional Gait Assessment",

  shortTitle: "FGA",

  headerTitle:
    "FGA：Functional Gait Assessment",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "balance-posture",
    "parkinson",
    "stroke",
  ],

  tags: [
    "歩行",
    "移動",
    "バランス",
    "動的バランス",
    "転倒",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "前庭",
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
      "FGAはDGIを拡張した歩行評価尺度で、歩行中の動的バランス、方向転換、頭部運動、障害物対応などを評価します。",

    tips:
      "DGIより天井効果が少なく、地域歩行や高機能患者の評価にも使いやすい尺度です。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "歩行中の動的姿勢制御能力を評価します。",

      items: [
        {
          id: "fga-purpose",
          label: "目的",
          type: "text",
          description:
            "歩行中の姿勢制御、環境適応、転倒リスクを評価します。",
        },

        {
          id: "fga-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、合計点で歩行能力を把握します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "gait-tasks",

      title: "歩行課題",

      description:
        "FGAで評価される代表的課題です。",

      items: [
        {
          id: "fga-level",
          label: "平地歩行",
          type: "text",
          description:
            "通常歩行時の安定性を評価します。",
        },

        {
          id: "fga-speed",
          label: "歩行速度変化",
          type: "text",
          description:
            "歩行速度を変更した際の安定性を評価します。",
        },

        {
          id: "fga-horizontal-head",
          label: "水平頭部回旋歩行",
          type: "text",
          description:
            "左右へ頭部を回旋しながら歩行します。",
        },

        {
          id: "fga-vertical-head",
          label: "垂直頭部回旋歩行",
          type: "text",
          description:
            "上下へ頭部運動を加えながら歩行します。",
        },

        {
          id: "fga-pivot",
          label: "方向転換歩行",
          type: "text",
          description:
            "歩行中の急速方向転換能力を評価します。",
        },

        {
          id: "fga-obstacle",
          label: "障害物またぎ",
          type: "text",
          description:
            "障害物通過時の動的バランスを評価します。",
        },

        {
          id: "fga-narrow",
          label: "狭い歩隔歩行",
          type: "text",
          description:
            "支持基底面を狭くした歩行時の安定性を評価します。",
        },

        {
          id: "fga-eyes-closed",
          label: "閉眼歩行",
          type: "text",
          description:
            "視覚入力を制限した歩行能力を評価します。",
        },

        {
          id: "fga-backward",
          label: "後方歩行",
          type: "text",
          description:
            "後方歩行時の姿勢制御能力を評価します。",
        },

        {
          id: "fga-stairs",
          label: "階段昇降",
          type: "text",
          description:
            "階段昇降時の歩行能力と安全性を評価します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "転倒リスクや地域歩行能力を把握します。",

      items: [
        {
          id: "fga-fall",
          label: "転倒リスク",
          type: "text",
          description:
            "高齢者、脳卒中、パーキンソン病、前庭障害などの転倒リスク評価に用います。",
        },

        {
          id: "fga-community",
          label: "地域歩行",
          type: "text",
          description:
            "実生活に近い歩行課題を含み、地域歩行能力評価に適しています。",
        },

        {
          id: "fga-follow",
          label: "経時評価",
          type: "text",
          description:
            "介入前後で歩行・動的バランス能力の変化を追跡します。",
        },
      ],
    },
  ],
};