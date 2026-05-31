export const wabScale = {
  id: "wab",

  title:
    "Western Aphasia Battery",

  shortTitle: "WAB",

  headerTitle:
    "WAB：Western Aphasia Battery",

  category:
    "language-communication",

  categories: [
    "language-communication",
    "higher-brain-function",
  ],

  tags: [
    "失語症",
    "言語",
    "コミュニケーション",
    "脳卒中",
    "失語タイプ",
    "ST",
    "OT",
    "医師",
  ],

  showTotal: true,

  tabs: {
    overview:
      "WABは、失語症の重症度および失語型分類を行う検査です。",

    interpretation:
      "Aphasia Quotient（AQ）により失語症の重症度を評価します。",

    tips:
      "ブローカ失語、ウェルニッケ失語、伝導失語などの分類に有用です。",
  },

  domains: [
    {
      id: "aq",

      title: "Aphasia Quotient",

      description:
        "失語症重症度を評価します。",

      items: [
        {
          id: "wab-aq",

          label: "AQ",

          type: "number",

          min: 0,

          max: 100,
        },
      ],
    },

    {
      id: "fluency",

      title: "流暢性",

      description:
        "発話の流暢性を評価します。",

      items: [
        {
          id: "wab-fluency",

          label: "流暢性",

          type: "text",
        },
      ],
    },

    {
      id: "comprehension",

      title: "聴覚理解",

      description:
        "口頭言語理解を評価します。",

      items: [
        {
          id: "wab-comprehension",

          label: "理解",

          type: "text",
        },
      ],
    },

    {
      id: "repetition",

      title: "復唱",

      description:
        "復唱能力を評価します。",

      items: [
        {
          id: "wab-repetition",

          label: "復唱",

          type: "text",
        },
      ],
    },

    {
      id: "naming",

      title: "呼称",

      description:
        "呼称能力を評価します。",

      items: [
        {
          id: "wab-naming",

          label: "呼称",

          type: "text",
        },
      ],
    },

    {
      id: "summary",

      title: "失語型",

      description:
        "失語症タイプを整理します。",

      items: [
        {
          id: "wab-type",

          label: "失語型",

          type: "text",

          description:
            "ブローカ、ウェルニッケ、伝導、健忘などを記録します。",
        },
      ],
    },
  ],
};