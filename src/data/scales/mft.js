export const mftScale = {
  id: "mft",

  title: "Manual Function Test",

  shortTitle: "MFT",

  headerTitle:
    "MFT：Manual Function Test",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "上肢",
    "手指",
    "巧緻性",
    "実用手",
    "脳卒中",
    "片麻痺",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "MFTは、脳卒中後片麻痺などにおける上肢機能を評価する検査です。上肢の運動、把持、手指操作などを総合的に確認します。",

    tips:
      "MFTは日本の臨床で使用されることが多い上肢機能評価です。実用手・補助手・廃用手の把握や経時的変化の確認に役立ちます。",
  },

  domains: [
    {
      id: "overview",

      title: "評価の概要",

      description:
        "上肢・手指機能を複数課題で評価します。",

      items: [
        {
          id: "mft-purpose",
          label: "目的",
          type: "text",
          description:
            "麻痺側上肢の運動機能、把持、手指操作、実用性を評価します。",
        },
        {
          id: "mft-target",
          label: "対象",
          type: "text",
          description:
            "主に脳卒中後片麻痺などの上肢機能障害を対象に用いられます。",
        },
      ],
    },

    {
      id: "domains",

      title: "主な評価領域",

      description:
        "上肢運動、把持、手指操作を中心に評価します。",

      items: [
        {
          id: "mft-upper-limb",
          label: "上肢運動",
          type: "text",
          description:
            "肩・肘・前腕・手関節を含む上肢全体の運動を確認します。",
        },
        {
          id: "mft-grasp",
          label: "把持",
          type: "text",
          description:
            "物品をつかむ、保持する、離す能力を評価します。",
        },
        {
          id: "mft-finger",
          label: "手指操作",
          type: "text",
          description:
            "つまみ、巧緻動作、手指の分離運動などを評価します。",
        },
        {
          id: "mft-functional-use",
          label: "実用性",
          type: "text",
          description:
            "日常生活で使用できる上肢機能かどうかを把握します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "麻痺側上肢の機能分類や経時的評価に使います。",

      items: [
        {
          id: "mft-functional-hand",
          label: "実用手・補助手・廃用手",
          type: "text",
          description:
            "上肢の実用性を把握し、ADLでの使用可能性や訓練目標設定に役立てます。",
        },
        {
          id: "mft-follow",
          label: "経時的変化",
          type: "text",
          description:
            "介入前後で比較し、上肢機能の改善や変化を確認します。",
        },
        {
          id: "mft-combine",
          label: "他評価との併用",
          type: "text",
          description:
            "Brunnstrom Stage、FMA、STEF、ARATなどと併用すると、回復段階と実用性を把握しやすくなります。",
        },
      ],
    },
  ],
};