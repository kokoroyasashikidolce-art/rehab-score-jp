export const dgiScale = {
  id: "dgi",

  title: "Dynamic Gait Index",

  shortTitle: "DGI",

  headerTitle:
    "DGI：Dynamic Gait Index",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "balance-posture",
  ],

  tags: [
    "歩行",
    "移動",
    "バランス",
    "姿勢",
    "転倒",
    "動的バランス",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "前庭",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "DGIは、歩行中の速度変化、頭部回旋、障害物回避、階段昇降などを通して動的歩行バランスを評価する尺度です。",

    tips:
      "単純な歩行速度だけではなく、歩行中に環境変化へ対応できるかを評価できます。転倒リスクや地域歩行能力の把握に役立ちます。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "歩行中の動的バランスと環境適応能力を評価します。",

      items: [
        {
          id: "dgi-purpose",
          label: "目的",
          type: "text",
          description:
            "歩行中の姿勢制御、方向転換、速度変化、障害物対応などを評価します。",
        },
        {
          id: "dgi-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、合計点で動的歩行バランスを把握します。正式な採点は原版・使用施設の手順に従ってください。",
        },
      ],
    },

    {
      id: "gait-tasks",

      title: "主な歩行課題",

      description:
        "DGIで評価される代表的な課題です。",

      items: [
        {
          id: "dgi-level-walking",
          label: "平地歩行",
          type: "text",
          description:
            "通常歩行時の安定性や歩容を評価します。",
        },
        {
          id: "dgi-speed-change",
          label: "歩行速度変化",
          type: "text",
          description:
            "歩行速度を速く・遅く変えた際の安定性を評価します。",
        },
        {
          id: "dgi-head-horizontal",
          label: "水平頭部回旋歩行",
          type: "text",
          description:
            "左右を向きながら歩いた際のふらつきや歩行変化を評価します。",
        },
        {
          id: "dgi-head-vertical",
          label: "垂直頭部回旋歩行",
          type: "text",
          description:
            "上下を向きながら歩いた際の安定性を評価します。",
        },
        {
          id: "dgi-pivot-turn",
          label: "方向転換",
          type: "text",
          description:
            "歩行中に素早く方向転換した際の安定性を評価します。",
        },
        {
          id: "dgi-obstacle-step-over",
          label: "障害物またぎ",
          type: "text",
          description:
            "障害物をまたいで歩く能力を評価します。",
        },
        {
          id: "dgi-obstacle-around",
          label: "障害物回避",
          type: "text",
          description:
            "障害物をよけて歩く能力を評価します。",
        },
        {
          id: "dgi-stairs",
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
        "転倒リスクや地域歩行能力の把握に用います。",

      items: [
        {
          id: "dgi-fall-risk",
          label: "転倒リスク",
          type: "text",
          description:
            "歩行中のふらつきや環境変化への対応力を通して転倒リスクを評価します。",
        },
        {
          id: "dgi-community",
          label: "地域歩行",
          type: "text",
          description:
            "速度変化、方向転換、障害物、階段など、実生活に近い歩行課題を含みます。",
        },
        {
          id: "dgi-follow",
          label: "経時評価",
          type: "text",
          description:
            "介入前後で動的歩行バランスの変化を追跡できます。",
        },
      ],
    },
  ],
};