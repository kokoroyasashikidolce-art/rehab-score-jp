export const stefScale = {
  id: "stef",

  title:
    "Simple Test for Evaluating Hand Function",

  shortTitle: "STEF",

  headerTitle:
    "STEF：Simple Test for Evaluating Hand Function",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "上肢",
    "手指",
    "巧緻性",
    "脳卒中",
    "片麻痺",
    "頸髄損傷",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "STEFは上肢・手指機能を評価する日本で広く使用される検査です。",

    tips:
      "10種類の物品を移動する時間を測定し、巧緻性や実用手機能を評価します。",
  },

  domains: [
    {
      id: "large-ball",

      title: "大球",

      description:
        "大きい球を移動します。",

      items: [
        {
          id: "stef-large-ball",
          label: "大球移動",
          type: "text",
          description:
            "粗大把持能力を評価します。",
        },
      ],
    },

    {
      id: "medium-ball",

      title: "中球",

      description:
        "中サイズ球を移動します。",

      items: [
        {
          id: "stef-medium-ball",
          label: "中球移動",
          type: "text",
          description:
            "把持と操作能力を評価します。",
        },
      ],
    },

    {
      id: "large-rect",

      title: "大直方体",

      description:
        "大きい直方体を移動します。",

      items: [
        {
          id: "stef-large-rect",
          label: "大直方体移動",
          type: "text",
          description:
            "粗大運動と把持を評価します。",
        },
      ],
    },

    {
      id: "small-cube",

      title: "立方体",

      description:
        "小立方体を移動します。",

      items: [
        {
          id: "stef-cube",
          label: "立方体移動",
          type: "text",
          description:
            "巧緻性を評価します。",
        },
      ],
    },

    {
      id: "cloth",

      title: "布",

      description:
        "布操作課題です。",

      items: [
        {
          id: "stef-cloth",
          label: "布移動",
          type: "text",
          description:
            "把持と協調運動を評価します。",
        },
      ],
    },

    {
      id: "disc",

      title: "円盤",

      description:
        "円盤移動課題です。",

      items: [
        {
          id: "stef-disc",
          label: "円盤移動",
          type: "text",
          description:
            "把持と速度を評価します。",
        },
      ],
    },

    {
      id: "small-ball",

      title: "小球",

      description:
        "小球操作課題です。",

      items: [
        {
          id: "stef-small-ball",
          label: "小球移動",
          type: "text",
          description:
            "巧緻性を評価します。",
        },
      ],
    },

    {
      id: "pin",

      title: "ピン",

      description:
        "細かい把持課題です。",

      items: [
        {
          id: "stef-pin",
          label: "ピン移動",
          type: "text",
          description:
            "つまみ動作を評価します。",
        },
      ],
    },

    {
      id: "metal-disc",

      title: "金円板",

      description:
        "精密把持課題です。",

      items: [
        {
          id: "stef-metal",
          label: "金円板移動",
          type: "text",
          description:
            "精密操作能力を評価します。",
        },
      ],
    },

    {
      id: "peg",

      title: "ペグ",

      description:
        "最も細かい巧緻動作課題です。",

      items: [
        {
          id: "stef-peg",
          label: "ペグ移動",
          type: "text",
          description:
            "手指巧緻性を評価します。",
        },
      ],
    },
  ],
};