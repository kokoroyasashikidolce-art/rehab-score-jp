export const jthftScale = {
  id: "jthft",

  title: "Jebsen-Taylor Hand Function Test",

  shortTitle: "JTHFT",

  headerTitle:
    "JTHFT：Jebsen-Taylor Hand Function Test",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
    "orthopedic",
  ],

  tags: [
    "上肢",
    "手指",
    "巧緻性",
    "実用手",
    "ADL",
    "脳卒中",
    "片麻痺",
    "運動器",
    "手外科",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Jebsen-Taylor Hand Function Testは、日常生活に近い手の使用課題を通して上肢・手指機能を評価する検査です。",

    tips:
      "書字、ページめくり、物品操作、食事動作に近い課題などを通して、実用的な手の使用能力を評価できます。",
  },

  domains: [
    {
      id: "overview",
      title: "評価の概要",
      description:
        "日常生活に近い手の課題を用いて評価します。",
      items: [
        {
          id: "jthft-purpose",
          label: "目的",
          type: "text",
          description:
            "上肢・手指を用いた実用的な課題遂行能力を評価します。",
        },
        {
          id: "jthft-time",
          label: "時間評価",
          type: "text",
          description:
            "各課題の遂行時間を測定し、左右差や経時的変化を確認します。",
        },
      ],
    },

    {
      id: "tasks",
      title: "主な課題",
      description:
        "日常生活に関連する複数の手の課題で構成されます。",
      items: [
        {
          id: "jthft-writing",
          label: "書字",
          type: "text",
          description:
            "文章を書く課題により、手指操作と実用的な手の使用を評価します。",
        },
        {
          id: "jthft-card",
          label: "カードめくり",
          type: "text",
          description:
            "カードをめくる動作で、手指の巧緻性と速度を評価します。",
        },
        {
          id: "jthft-small-objects",
          label: "小物操作",
          type: "text",
          description:
            "小さな物品を扱う能力を評価します。",
        },
        {
          id: "jthft-feeding",
          label: "食事動作様課題",
          type: "text",
          description:
            "スプーン操作など、食事に近い手の使用を評価します。",
        },
        {
          id: "jthft-large-objects",
          label: "大きな物品操作",
          type: "text",
          description:
            "軽い物品・重い物品を移動する課題で、把持や上肢操作を評価します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "実用的な上肢・手指機能を確認します。",
      items: [
        {
          id: "jthft-real-world",
          label: "実生活に近い評価",
          type: "text",
          description:
            "単純な筋力や可動域だけでなく、生活場面に近い手の使い方を評価できます。",
        },
        {
          id: "jthft-follow",
          label: "経時評価",
          type: "text",
          description:
            "治療前後やリハビリ経過で遂行時間を比較し、手の機能変化を追跡します。",
        },
      ],
    },
  ],
};