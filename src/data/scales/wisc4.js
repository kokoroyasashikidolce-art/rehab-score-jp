export const wisc4Scale = {
  id: "wisc-iv",

  title:
    "Wechsler Intelligence Scale for Children - Fourth Edition",

  shortTitle: "WISC-IV",

  headerTitle:
    "WISC-IV：小児知能検査",

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
      "WISC-IVは、小児の知的機能を評価する代表的検査です。",

    interpretation:
      "言語理解、知覚推理、ワーキングメモリ、処理速度を評価します。",
  },

  domains: [
    {
      id: "indexes",
      title: "主要指標",

      description:
        "知的機能を多面的に評価します。",

      items: [
        {
          id: "wisc4-vci",
          label: "VCI：言語理解",
          type: "text",
        },

        {
          id: "wisc4-pri",
          label: "PRI：知覚推理",
          type: "text",
        },

        {
          id: "wisc4-wmi",
          label: "WMI：ワーキングメモリ",
          type: "text",
        },

        {
          id: "wisc4-psi",
          label: "PSI：処理速度",
          type: "text",
        },
      ],
    },
  ],
};