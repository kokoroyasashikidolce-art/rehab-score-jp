export const cbsScale = {
  id: "cbs",

  title: "Catherine Bergego Scale",

  shortTitle: "CBS",

  headerTitle:
    "CBS：Catherine Bergego Scale",

  category: "higher-brain-function",

  categories: [
    "higher-brain-function",
    "adl-iadl",
  ],

  tags: [
    "半側空間無視",
    "USN",
    "ADL",
    "注意",
    "脳卒中",
    "OT",
    "ST",
    "病棟",
  ],

  showTotal: true,

  maxScore: 30,

  tabs: {
    overview:
      "CBSは、日常生活場面での半側空間無視を評価する尺度です。",

    interpretation:
      "更衣、移動、食事などADL場面での無視症状を観察します。",
  },

  domains: [
    {
      id: "adl-usn",
      title: "ADL場面のUSN",

      description:
        "日常生活における無視症状を評価します。",

      items: [
        {
          id: "cbs-total",
          label: "CBS合計点",
          type: "number",
          min: 0,
          max: 30,
        },
      ],
    },
  ],
};