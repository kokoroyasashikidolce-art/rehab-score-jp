export const bitScale = {
  id: "bit",

  title: "Behavioural Inattention Test",

  shortTitle: "BIT",

  headerTitle:
    "BIT：Behavioural Inattention Test",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
  ],

  tags: [
    "半側空間無視",
    "USN",
    "注意",
    "脳卒中",
    "右半球",
    "高次脳機能",
    "OT",
    "ST",
    "医師",
  ],

  showTotal: true,

  maxScore: 146,

  tabs: {
    overview:
      "BITは、半側空間無視を机上課題と行動課題で評価する検査です。",

    interpretation:
      "低下時は半側空間無視の存在や重症度を示唆します。",
  },

  domains: [
    {
      id: "conventional",
      title: "通常検査",

      description:
        "抹消、模写、線分二等分などを評価します。",

      items: [
        {
          id: "bit-conventional",
          label: "通常検査得点",
          type: "number",
          min: 0,
          max: 146,
        },
      ],
    },

    {
      id: "behavioral",
      title: "行動検査",

      description:
        "日常生活場面に近い課題を評価します。",

      items: [
        {
          id: "bit-behavioral",
          label: "行動検査所見",
          type: "text",
        },
      ],
    },
  ],
};