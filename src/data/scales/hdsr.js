export const hdsrScale = {
  id: "hdsr",

  title:
    "改訂長谷川式簡易知能評価スケール",

  shortTitle: "HDS-R",

  headerTitle:
    "HDS-R：改訂長谷川式簡易知能評価スケール",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "認知機能",
    "高次脳機能",
    "認知症",
    "MCI",
    "見当識",
    "記憶",
    "注意",
    "脳卒中",
    "パーキンソン病",
    "高齢者",
    "医師",
    "OT",
    "ST",
    "外来",
    "病棟",
  ],

  showTotal: true,

  maxScore: 30,

  tabs: {
    overview:
      "HDS-Rは、日本で広く使用される認知機能スクリーニング検査です。見当識、記憶、計算、言語流暢性などを評価します。",

    interpretation:
      "一般に20点以下で認知機能低下が疑われます。ただし年齢・教育歴・失語などの影響を考慮します。",

    tips:
      "短時間で実施可能で、日本語話者高齢者に適しています。脳卒中後や神経変性疾患のスクリーニングでも使用されます。",
  },

  domains: [
    {
      id: "orientation",
      title: "見当識",
      description:
        "時間・場所の見当識を確認します。",

      items: [
        {
          id: "hdsr-age",
          label: "年齢",
          type: "number",
          min: 0,
          max: 1,
        },

        {
          id: "hdsr-date",
          label: "日付",
          type: "number",
          min: 0,
          max: 4,
        },

        {
          id: "hdsr-place",
          label: "場所",
          type: "number",
          min: 0,
          max: 2,
        },
      ],
    },

    {
      id: "memory",
      title: "記憶",

      description:
        "即時記憶・遅延再生を評価します。",

      items: [
        {
          id: "hdsr-word-repeat",
          label: "3語の復唱",
          type: "number",
          min: 0,
          max: 3,
        },

        {
          id: "hdsr-word-recall",
          label: "3語の遅延再生",
          type: "number",
          min: 0,
          max: 6,
        },
      ],
    },

    {
      id: "attention",
      title: "注意・計算",

      description:
        "計算や逆唱による注意機能を評価します。",

      items: [
        {
          id: "hdsr-subtraction",
          label: "連続引き算",
          type: "number",
          min: 0,
          max: 2,
        },

        {
          id: "hdsr-digit-backward",
          label: "数字逆唱",
          type: "number",
          min: 0,
          max: 2,
        },
      ],
    },

    {
      id: "language",
      title: "言語流暢性",

      description:
        "言語想起能力を確認します。",

      items: [
        {
          id: "hdsr-vegetable",
          label: "野菜名想起",
          type: "number",
          min: 0,
          max: 5,
        },
      ],
    },

    {
      id: "delayed-memory",
      title: "遅延再生",

      description:
        "遅延記憶を確認します。",

      items: [
        {
          id: "hdsr-delayed",
          label: "遅延再生",
          type: "number",
          min: 0,
          max: 5,
        },
      ],
    },
  ],
};