export const wisc5Scale = {
  id: "wisc-v",

  title:
    "Wechsler Intelligence Scale for Children - Fifth Edition",

  shortTitle: "WISC-V",

  headerTitle:
    "WISC-V：小児知能検査",

  category: "development",

  categories: [
    "development",
    "higher-brain-function",
  ],

  tags: [
    "小児",
    "発達",
    "知能検査",
    "認知機能",
    "注意",
    "ワーキングメモリ",
    "処理速度",
    "心理検査",
    "ST",
    "OT",
    "心理士",
  ],

  showTotal: false,

  tabs: {
    overview:
      "WISC-Vは、小児の知的機能を多面的に評価する検査です。",

    interpretation:
      "言語理解、視空間、流動性推理、ワーキングメモリ、処理速度などを評価します。",
  },

  domains: [
    {
      id: "indexes",
      title: "主要指標",

      description:
        "知的機能を包括的に評価します。",

      items: [
        {
          id: "wisc5-vci",
          label: "VCI：言語理解",
          type: "text",
        },

        {
          id: "wisc5-vsi",
          label: "VSI：視空間",
          type: "text",
        },

        {
          id: "wisc5-fri",
          label: "FRI：流動性推理",
          type: "text",
        },

        {
          id: "wisc5-wmi",
          label: "WMI：ワーキングメモリ",
          type: "text",
        },

        {
          id: "wisc5-psi",
          label: "PSI：処理速度",
          type: "text",
        },
      ],
    },
  ],
};