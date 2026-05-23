export const wmftScale = {
  id: "wmft",

  title: "Wolf Motor Function Test",

  shortTitle: "WMFT",

  headerTitle:
    "WMFT：Wolf Motor Function Test",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "上肢",
    "手指",
    "巧緻性",
    "到達運動",
    "脳卒中",
    "片麻痺",
    "運動機能",
    "CI療法",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "WMFTは、上肢の運動機能を複数の課題遂行時間や動作の質から評価する検査です。脳卒中後上肢麻痺の評価や介入効果判定に用いられます。",

    tips:
      "WMFTはCI療法などの上肢機能訓練の効果判定で用いられることがあります。課題遂行時間だけでなく、動作の質もあわせて確認します。",
  },

  domains: [
    {
      id: "overview",

      title: "評価の概要",

      description:
        "上肢運動課題の遂行時間と動作の質を評価します。",

      items: [
        {
          id: "wmft-purpose",
          label: "目的",
          type: "text",
          description:
            "脳卒中後片麻痺などにおける上肢運動機能を評価します。",
        },
        {
          id: "wmft-task",
          label: "課題",
          type: "text",
          description:
            "肩・肘・手関節・手指を用いる複数の上肢課題を実施します。",
        },
        {
          id: "wmft-time",
          label: "時間評価",
          type: "text",
          description:
            "各課題の遂行時間を測定し、上肢機能の変化を追跡します。",
        },
      ],
    },

    {
      id: "task-types",

      title: "主な課題タイプ",

      description:
        "WMFTで扱われる代表的な課題です。",

      items: [
        {
          id: "wmft-proximal",
          label: "近位上肢課題",
          type: "text",
          description:
            "肩・肘を中心とした上肢近位部の運動を評価します。",
        },
        {
          id: "wmft-reach",
          label: "リーチ課題",
          type: "text",
          description:
            "対象物へ手を伸ばす、物品に触れるなどの到達運動を評価します。",
        },
        {
          id: "wmft-grasp",
          label: "把持・操作課題",
          type: "text",
          description:
            "物品をつかむ、持ち上げる、移動するなどの操作能力を評価します。",
        },
        {
          id: "wmft-functional",
          label: "機能的課題",
          type: "text",
          description:
            "日常生活に近い上肢使用課題を評価します。",
        },
      ],
    },

    {
      id: "scoring",

      title: "採点・記録",

      description:
        "遂行時間と機能的能力を記録します。",

      items: [
        {
          id: "wmft-performance-time",
          label: "遂行時間",
          type: "text",
          description:
            "各課題に要した時間を記録します。課題により上限時間を設ける場合があります。",
        },
        {
          id: "wmft-functional-ability",
          label: "Functional Ability Scale",
          type: "text",
          description:
            "動作の質や実用性を段階的に評価します。",
        },
        {
          id: "wmft-note",
          label: "注意点",
          type: "text",
          description:
            "正式な課題内容・採点方法は原版または使用施設の手順に従ってください。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "上肢機能の経時的変化や介入効果を確認します。",

      items: [
        {
          id: "wmft-ci",
          label: "CI療法との関連",
          type: "text",
          description:
            "Constraint-Induced Movement Therapyなどの上肢機能訓練の効果判定で用いられることがあります。",
        },
        {
          id: "wmft-follow",
          label: "経時評価",
          type: "text",
          description:
            "介入前後で課題遂行時間や動作の質を比較し、上肢機能の変化を評価します。",
        },
      ],
    },
  ],
};