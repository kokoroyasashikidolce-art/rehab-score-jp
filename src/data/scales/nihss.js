export const nihssScale = {
  id: "nihss",

  title: "National Institutes of Health Stroke Scale",

  shortTitle: "NIHSS",

  headerTitle:
    "NIHSS：National Institutes of Health Stroke Scale",

  category: "motor-function",

  categories: [
    "motor-function",
    "stroke",
  ],

  tags: [
    "脳卒中",
    "脳血管",
    "急性期",
    "運動機能",
    "意識",
    "高次脳機能",
    "言語",
    "感覚",
    "視野",
    "失語",
    "半側空間無視",
    "医師",
    "PT",
    "OT",
    "ST",
    "入院",
  ],

  showTotal: false,

  tabs: {
    overview:
      "NIHSSは、急性期脳卒中の神経学的重症度を評価する尺度です。意識、眼球運動、視野、顔面麻痺、上下肢運動、失調、感覚、言語、構音、半側空間無視などを評価します。",

    tips:
      "NIHSSは急性期脳卒中の重症度評価、治療方針判断、経時的変化の把握に用いられます。正式な採点は標準化された評価手順に従ってください。",
  },

  domains: [
    {
      id: "consciousness",
      title: "1. 意識関連",
      description:
        "意識水準、質問、命令への反応を評価します。",
      items: [
        {
          id: "nihss-1a",
          label: "1a：意識水準",
          type: "text",
          description:
            "覚醒、傾眠、昏迷、昏睡などの意識水準を評価します。",
        },
        {
          id: "nihss-1b",
          label: "1b：意識障害－質問",
          type: "text",
          description:
            "月齢・年齢などの質問への反応を評価します。",
        },
        {
          id: "nihss-1c",
          label: "1c：意識障害－命令",
          type: "text",
          description:
            "開閉眼や手の開閉など、簡単な命令への反応を評価します。",
        },
      ],
    },

    {
      id: "gaze-visual",
      title: "2〜3. 眼球運動・視野",
      description:
        "共同偏視や視野障害を評価します。",
      items: [
        {
          id: "nihss-2",
          label: "2：最良の注視",
          type: "text",
          description:
            "水平眼球運動や共同偏視の有無を評価します。",
        },
        {
          id: "nihss-3",
          label: "3：視野",
          type: "text",
          description:
            "同名半盲などの視野障害を評価します。",
        },
      ],
    },

    {
      id: "face-motor",
      title: "4〜6. 顔面・上下肢運動",
      description:
        "顔面麻痺、上肢・下肢の運動麻痺を評価します。",
      items: [
        {
          id: "nihss-4",
          label: "4：顔面麻痺",
          type: "text",
          description:
            "顔面の非対称性、口角下垂、完全麻痺などを評価します。",
        },
        {
          id: "nihss-5",
          label: "5：上肢運動",
          type: "text",
          description:
            "左右上肢を保持し、下垂の程度を評価します。",
        },
        {
          id: "nihss-6",
          label: "6：下肢運動",
          type: "text",
          description:
            "左右下肢を保持し、下垂の程度を評価します。",
        },
      ],
    },

    {
      id: "ataxia-sensory",
      title: "7〜8. 失調・感覚",
      description:
        "運動失調と感覚障害を評価します。",
      items: [
        {
          id: "nihss-7",
          label: "7：運動失調",
          type: "text",
          description:
            "指鼻試験、踵膝試験などで小脳性失調を評価します。",
        },
        {
          id: "nihss-8",
          label: "8：感覚",
          type: "text",
          description:
            "痛覚などの感覚低下や消失を評価します。",
        },
      ],
    },

    {
      id: "language-neglect",
      title: "9〜11. 言語・構音・無視",
      description:
        "失語、構音障害、半側空間無視を評価します。",
      items: [
        {
          id: "nihss-9",
          label: "9：最良の言語",
          type: "text",
          description:
            "失語の程度を評価します。",
        },
        {
          id: "nihss-10",
          label: "10：構音障害",
          type: "text",
          description:
            "発話の明瞭さ、構音障害の程度を評価します。",
        },
        {
          id: "nihss-11",
          label: "11：消去現象と注意障害",
          type: "text",
          description:
            "半側空間無視、感覚消去、視覚消去などを評価します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "NIHSSの位置づけです。",
      items: [
        {
          id: "nihss-acute",
          label: "急性期脳卒中評価",
          type: "text",
          description:
            "急性期脳卒中の神経学的重症度を把握するために用いられます。",
        },
        {
          id: "nihss-follow",
          label: "経時的変化",
          type: "text",
          description:
            "治療前後や病状変化時に繰り返し評価することで、神経症状の変化を追跡できます。",
        },
      ],
    },
  ],
};