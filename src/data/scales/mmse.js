export const mmseScale = {
  id: "mmse",

  title:
    "Mini Mental State Examination",

  shortTitle: "MMSE",

  headerTitle:
    "MMSE：Mini Mental State Examination",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "認知機能",
    "高次脳機能",
    "認知症",
    "MCI",
    "記憶",
    "見当識",
    "注意",
    "脳卒中",
    "高齢者",
    "医師",
    "OT",
    "ST",
    "病棟",
    "外来",
  ],

  showTotal: true,

  maxScore: 30,

  tabs: {
    overview:
      "MMSEは、世界的に最も広く使用される認知機能スクリーニング検査です。",

    interpretation:
      "一般に23点以下で認知機能低下が疑われます。教育歴や失語、運動障害の影響に注意します。",

    tips:
      "認知症スクリーニングの標準的評価ですが、前頭葉機能や軽度認知障害には感度が低い場合があります。",
  },

  domains: [
    {
      id: "orientation",
      title: "見当識",

      description:
        "時間・場所の見当識を確認します。",

      items: [
        {
          id: "mmse-time",
          label: "時間の見当識",
          type: "number",
          min: 0,
          max: 5,
        },

        {
          id: "mmse-place",
          label: "場所の見当識",
          type: "number",
          min: 0,
          max: 5,
        },
      ],
    },

    {
      id: "registration",
      title: "記銘",

      description:
        "3語の即時記憶を確認します。",

      items: [
        {
          id: "mmse-registration",
          label: "3語の記銘",
          type: "number",
          min: 0,
          max: 3,
        },
      ],
    },

    {
      id: "attention",
      title: "注意・計算",

      description:
        "注意機能と計算能力を評価します。",

      items: [
        {
          id: "mmse-attention",
          label: "Serial 7s / 逆唱",
          type: "number",
          min: 0,
          max: 5,
        },
      ],
    },

    {
      id: "recall",
      title: "遅延再生",

      description:
        "遅延記憶を確認します。",

      items: [
        {
          id: "mmse-recall",
          label: "3語の再生",
          type: "number",
          min: 0,
          max: 3,
        },
      ],
    },

    {
      id: "language",
      title: "言語・構成",

      description:
        "命名、復唱、理解、書字、図形模写を評価します。",

      items: [
        {
          id: "mmse-language",
          label: "言語課題",
          type: "number",
          min: 0,
          max: 8,
        },

        {
          id: "mmse-copy",
          label: "図形模写",
          type: "number",
          min: 0,
          max: 1,
        },
      ],
    },
  ],
};