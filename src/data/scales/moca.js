export const mocaScale = {
  id: "moca",

  title:
    "Montreal Cognitive Assessment",

  shortTitle: "MoCA",

  headerTitle:
    "MoCA：Montreal Cognitive Assessment",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "認知機能",
    "高次脳機能",
    "MCI",
    "認知症",
    "前頭葉機能",
    "遂行機能",
    "注意",
    "記憶",
    "脳卒中",
    "パーキンソン病",
    "医師",
    "OT",
    "ST",
    "外来",
  ],

  showTotal: true,

  maxScore: 30,

  tabs: {
    overview:
      "MoCAは、軽度認知障害（MCI）や前頭葉機能障害にも比較的感度が高い認知機能検査です。",

    interpretation:
      "一般に25点以下で認知機能低下が疑われます。教育歴補正があります。",

    tips:
      "MMSEより遂行機能・注意・視空間認知を評価しやすく、脳卒中後高次脳機能障害やパーキンソン病でも有用です。",
  },

  domains: [
    {
      id: "visuospatial",
      title: "視空間・遂行機能",

      description:
        "視空間認知と遂行機能を評価します。",

      items: [
        {
          id: "moca-trail",
          label: "Trail Making",
          type: "number",
          min: 0,
          max: 1,
        },

        {
          id: "moca-cube",
          label: "立方体模写",
          type: "number",
          min: 0,
          max: 1,
        },

        {
          id: "moca-clock",
          label: "時計描画",
          type: "number",
          min: 0,
          max: 3,
        },
      ],
    },

    {
      id: "attention",
      title: "注意",

      description:
        "注意・集中機能を評価します。",

      items: [
        {
          id: "moca-attention",
          label: "注意課題",
          type: "number",
          min: 0,
          max: 6,
        },
      ],
    },

    {
      id: "language",
      title: "言語",

      description:
        "復唱や語想起を評価します。",

      items: [
        {
          id: "moca-language",
          label: "言語課題",
          type: "number",
          min: 0,
          max: 3,
        },
      ],
    },

    {
      id: "memory",
      title: "記憶",

      description:
        "遅延再生を評価します。",

      items: [
        {
          id: "moca-memory",
          label: "遅延再生",
          type: "number",
          min: 0,
          max: 5,
        },
      ],
    },

    {
      id: "orientation",
      title: "見当識",

      description:
        "時間・場所の見当識を評価します。",

      items: [
        {
          id: "moca-orientation",
          label: "見当識",
          type: "number",
          min: 0,
          max: 6,
        },
      ],
    },
  ],
};