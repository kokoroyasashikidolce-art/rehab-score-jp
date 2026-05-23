export const aratScale = {
  id: "arat",

  title: "Action Research Arm Test",

  shortTitle: "ARAT",

  headerTitle:
    "ARAT：Action Research Arm Test",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "脳卒中",
    "片麻痺",
    "上肢",
    "手指",
    "巧緻性",
    "把持",
    "リーチ",
    "運動機能",
    "脳血管",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "ARATは、脳卒中後などの上肢機能を評価する尺度です。把持、握り、つまみ、粗大運動の4領域で構成されます。",

    tips:
      "ARATは上肢の実用的な課題遂行能力を評価できます。FMA-UEと併用すると、運動機能と実用的上肢機能を分けて把握しやすくなります。",
  },

  domains: [
    {
      id: "grasp",
      title: "Grasp：把持",
      description:
        "物品を把持して移動する課題です。",
      items: [
        {
          id: "arat-grasp",
          label: "把持課題",
          type: "text",
          description:
            "ブロックなどを把持して移動する能力を評価します。",
        },
      ],
    },
    {
      id: "grip",
      title: "Grip：握り",
      description:
        "筒状物や球状物などを握る課題です。",
      items: [
        {
          id: "arat-grip",
          label: "握り課題",
          type: "text",
          description:
            "物品を握る、持ち上げる、移動する能力を評価します。",
        },
      ],
    },
    {
      id: "pinch",
      title: "Pinch：つまみ",
      description:
        "小物をつまむ課題です。",
      items: [
        {
          id: "arat-pinch",
          label: "つまみ課題",
          type: "text",
          description:
            "母指と他指によるつまみ動作を評価します。",
        },
      ],
    },
    {
      id: "gross-movement",
      title: "Gross movement：粗大運動",
      description:
        "上肢の大きな運動を評価します。",
      items: [
        {
          id: "arat-gross",
          label: "粗大運動課題",
          type: "text",
          description:
            "手を頭部や口元へ運ぶなど、上肢全体の運動を評価します。",
        },
      ],
    },
    {
      id: "scoring",
      title: "採点",
      description:
        "各課題を0〜3点で評価します。",
      items: [
        {
          id: "arat-score-3",
          label: "3点",
          type: "text",
          description:
            "正常または制限時間内に課題を完遂できる。",
        },
        {
          id: "arat-score-2",
          label: "2点",
          type: "text",
          description:
            "課題は完遂できるが、時間がかかる、またはぎこちなさがある。",
        },
        {
          id: "arat-score-1",
          label: "1点",
          type: "text",
          description:
            "課題の一部は可能だが完遂できない。",
        },
        {
          id: "arat-score-0",
          label: "0点",
          type: "text",
          description:
            "課題を遂行できない。",
        },
      ],
    },
  ],
};