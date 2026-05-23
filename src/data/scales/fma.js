export const fmaScale = {
  id: "fma",

  title: "Fugl-Meyer Assessment",

  shortTitle: "FMA",

  headerTitle:
    "FMA：Fugl-Meyer Assessment",

  category: "motor-function",

  categories: [
    "motor-function",
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "脳卒中",
    "片麻痺",
    "運動機能",
    "上肢",
    "下肢",
    "感覚",
    "関節可動域",
    "疼痛",
    "脳血管",
    "医師",
    "PT",
    "OT",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Fugl-Meyer Assessmentは、脳卒中後片麻痺の機能障害を評価する尺度です。運動機能、感覚、バランス、関節可動域、疼痛などを評価します。",

    tips:
      "FMAは脳卒中後の運動回復評価として広く用いられます。特に上肢版（FMA-UE）は研究・臨床で頻用されます。",
  },

  domains: [
    {
      id: "motor",
      title: "運動機能",
      description:
        "上肢・下肢の運動機能、共同運動、分離運動、協調性などを評価します。",
      items: [
        {
          id: "fma-upper-limb",
          label: "上肢運動",
          type: "text",
          description:
            "肩・肘・前腕・手関節・手指の運動機能を評価します。",
        },
        {
          id: "fma-lower-limb",
          label: "下肢運動",
          type: "text",
          description:
            "股関節・膝関節・足関節を中心とした下肢運動機能を評価します。",
        },
        {
          id: "fma-coordination",
          label: "協調性・速度",
          type: "text",
          description:
            "運動の協調性、速度、振戦・測定障害などを評価します。",
        },
      ],
    },

    {
      id: "sensory",
      title: "感覚",
      description:
        "触覚や位置覚などの感覚機能を評価します。",
      items: [
        {
          id: "fma-light-touch",
          label: "触覚",
          type: "text",
          description:
            "上肢・下肢の触覚を評価します。",
        },
        {
          id: "fma-position-sense",
          label: "位置覚",
          type: "text",
          description:
            "関節位置覚を評価します。",
        },
      ],
    },

    {
      id: "balance",
      title: "バランス",
      description:
        "座位・立位バランスを評価します。",
      items: [
        {
          id: "fma-sitting-balance",
          label: "座位バランス",
          type: "text",
          description:
            "座位での姿勢保持や反応を評価します。",
        },
        {
          id: "fma-standing-balance",
          label: "立位バランス",
          type: "text",
          description:
            "立位での姿勢保持や反応を評価します。",
        },
      ],
    },

    {
      id: "rom-pain",
      title: "関節可動域・疼痛",
      description:
        "関節可動域と疼痛を評価します。",
      items: [
        {
          id: "fma-rom",
          label: "関節可動域",
          type: "text",
          description:
            "肩、肘、手関節、股関節、膝、足関節などの可動域を評価します。",
        },
        {
          id: "fma-pain",
          label: "疼痛",
          type: "text",
          description:
            "各関節運動時の疼痛を評価します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "FMAの臨床・研究での位置づけです。",
      items: [
        {
          id: "fma-ue",
          label: "FMA-UE",
          type: "text",
          description:
            "上肢機能に焦点を当てたFMA上肢版で、脳卒中後上肢麻痺の評価として頻用されます。",
        },
        {
          id: "fma-score",
          label: "点数化",
          type: "text",
          description:
            "各項目を段階的に採点し、領域別または総合点として評価します。正式な採点は原版・マニュアルを確認してください。",
        },
      ],
    },
  ],
};