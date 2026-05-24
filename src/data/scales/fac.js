export const facScale = {
  id: "fac",

  title: "Functional Ambulation Categories",

  shortTitle: "FAC",

  headerTitle:
    "FAC：Functional Ambulation Categories",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "歩行",
    "移動",
    "歩行自立度",
    "介助量",
    "脳卒中",
    "片麻痺",
    "高齢",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "FACは、歩行時に必要な介助量をもとに歩行能力を0〜5で分類する尺度です。",

    tips:
      "歩行速度や距離ではなく、歩行にどの程度介助が必要かを簡潔に表せます。回復期リハや退院支援で使いやすい評価です。",
  },

  domains: [
    {
      id: "fac-levels",

      title: "FAC分類",

      description:
        "歩行に必要な介助量で0〜5に分類します。",

      items: [
        {
          id: "fac-0",
          label: "0：歩行不能",
          type: "text",
          description:
            "2人以上の介助を要する、または歩行不能。",
        },
        {
          id: "fac-1",
          label: "1：連続的な介助を要する歩行",
          type: "text",
          description:
            "歩行には1人の介助者による連続的な身体介助が必要。",
        },
        {
          id: "fac-2",
          label: "2：断続的または軽度介助を要する歩行",
          type: "text",
          description:
            "歩行には1人の介助者による断続的な介助、または軽度の身体介助が必要。",
        },
        {
          id: "fac-3",
          label: "3：監視または口頭指示で歩行可能",
          type: "text",
          description:
            "身体介助は不要だが、安全のため監視や口頭指示が必要。",
        },
        {
          id: "fac-4",
          label: "4：平地歩行自立",
          type: "text",
          description:
            "平地では自立して歩行可能。ただし階段・不整地・坂道などでは介助や監視を要することがある。",
        },
        {
          id: "fac-5",
          label: "5：歩行自立",
          type: "text",
          description:
            "平地、不整地、階段などを含めて自立して歩行可能。",
        },
      ],
    },
  ],
};