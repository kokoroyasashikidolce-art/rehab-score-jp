export const gcsScale = {
  id: "gcs",

  title: "Glasgow Coma Scale",
  shortTitle: "GCS",
  headerTitle: "GCS：Glasgow Coma Scale",

  category: "consciousness",

  categories: [
    "consciousness",
  ],

  tags: [
    "意識",
    "覚醒",
    "意識障害",
    "急性期",
    "入院",
    "救急",
    "脳血管",
    "外傷",
    "医師",
    "看護",
  ],

  showTotal: false,

  tabs: {
    overview:
      "GCSは、開眼反応、言語反応、運動反応の3項目で意識レベルを評価する尺度です。救急、外傷、脳卒中診療などで広く用いられます。",

    tips:
      "GCSは E（開眼）・V（言語）・M（運動）で表記します。例：E4V5M6、合計15点。挿管中などで言語反応が評価困難な場合は、その旨を併記します。",
  },

  domains: [
    {
      id: "eye-opening",
      title: "E：開眼反応",
      description:
        "開眼反応を1〜4点で評価します。",
      items: [
        {
          id: "gcs-e4",
          label: "E4：自発開眼",
          type: "text",
          description:
            "自発的に開眼している。",
        },
        {
          id: "gcs-e3",
          label: "E3：呼びかけで開眼",
          type: "text",
          description:
            "呼びかけにより開眼する。",
        },
        {
          id: "gcs-e2",
          label: "E2：痛み刺激で開眼",
          type: "text",
          description:
            "痛み刺激により開眼する。",
        },
        {
          id: "gcs-e1",
          label: "E1：開眼なし",
          type: "text",
          description:
            "刺激しても開眼しない。",
        },
      ],
    },

    {
      id: "verbal-response",
      title: "V：言語反応",
      description:
        "言語反応を1〜5点で評価します。",
      items: [
        {
          id: "gcs-v5",
          label: "V5：見当識あり",
          type: "text",
          description:
            "見当識が保たれ、適切に会話できる。",
        },
        {
          id: "gcs-v4",
          label: "V4：混乱した会話",
          type: "text",
          description:
            "会話は可能だが混乱している。",
        },
        {
          id: "gcs-v3",
          label: "V3：不適切な発語",
          type: "text",
          description:
            "単語は発するが、会話としては不適切。",
        },
        {
          id: "gcs-v2",
          label: "V2：理解不能な音声",
          type: "text",
          description:
            "うめき声など、意味のある言葉にならない音声。",
        },
        {
          id: "gcs-v1",
          label: "V1：発語なし",
          type: "text",
          description:
            "音声反応がみられない。",
        },
      ],
    },

    {
      id: "motor-response",
      title: "M：運動反応",
      description:
        "運動反応を1〜6点で評価します。",
      items: [
        {
          id: "gcs-m6",
          label: "M6：命令に従う",
          type: "text",
          description:
            "指示に従って運動できる。",
        },
        {
          id: "gcs-m5",
          label: "M5：疼痛部位へ手を持っていく",
          type: "text",
          description:
            "痛み刺激の部位を認識し、払いのける・手を持っていく。",
        },
        {
          id: "gcs-m4",
          label: "M4：逃避反応",
          type: "text",
          description:
            "痛み刺激から逃避するように四肢を動かす。",
        },
        {
          id: "gcs-m3",
          label: "M3：異常屈曲",
          type: "text",
          description:
            "除皮質肢位様の異常屈曲反応。",
        },
        {
          id: "gcs-m2",
          label: "M2：異常伸展",
          type: "text",
          description:
            "除脳肢位様の異常伸展反応。",
        },
        {
          id: "gcs-m1",
          label: "M1：運動反応なし",
          type: "text",
          description:
            "痛み刺激に対して運動反応がみられない。",
        },
      ],
    },
  ],
};