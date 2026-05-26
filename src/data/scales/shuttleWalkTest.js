export const shuttleWalkTestScale = {
  id: "shuttle-walk",

  title: "Shuttle Walk Test",

  shortTitle: "SWT",

  headerTitle:
    "SWT：Shuttle Walk Test",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "cardiopulmonary",
  ],

  tags: [
    "歩行",
    "運動耐容能",
    "心肺",
    "呼吸器",
    "循環器",
    "持久力",
    "PT",
    "医師",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SWTは往復歩行距離から運動耐容能を評価する検査です。",

    tips:
      "呼吸器・循環器リハビリで頻用されます。",
  },

  domains: [
    {
      id: "test",
      title: "評価内容",
      description:
        "速度指示に従い往復歩行を行います。",
      items: [
        {
          id: "swt-distance",
          label: "歩行距離",
          type: "text",
          description:
            "総歩行距離を記録します。",
        },
        {
          id: "swt-speed",
          label: "速度増加",
          type: "text",
          description:
            "段階的に速度を上げます。",
        },
        {
          id: "swt-endurance",
          label: "運動耐容能",
          type: "text",
          description:
            "心肺機能・持久力を評価します。",
        },
      ],
    },
  ],
};