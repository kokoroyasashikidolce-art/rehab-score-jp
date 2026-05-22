export const jcsScale = {
  id: "jcs",
  title: "Japan Coma Scale",
  shortTitle: "JCS",
  headerTitle: "JCS：Japan Coma Scale",

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
    "医師",
    "看護",
  ],

  showTotal: false,

  tabs: {
    overview:
      "JCSは、日本で広く用いられる意識障害の評価尺度です。覚醒の程度と刺激への反応から、1桁・2桁・3桁で意識レベルを表します。",

    tips:
      "JCSは急性期・救急・脳卒中診療などでよく使われます。記録では 0、I-1、II-10、III-100 などの形で表記されます。",
  },

  domains: [
    {
      id: "jcs-reference",
      title: "JCS分類",
      description:
        "刺激に対する反応から、意識レベルを1桁・2桁・3桁で分類します。",
      items: [
        {
          id: "jcs-0",
          label: "0：清明",
          type: "text",
          description:
            "意識清明で、通常の応答が可能な状態。",
        },
        {
          id: "jcs-1",
          label: "I-1：だいたい意識清明",
          type: "text",
          description:
            "意識清明とはいえないが、見当識は保たれている状態。",
        },
        {
          id: "jcs-2",
          label: "I-2：見当識障害あり",
          type: "text",
          description:
            "見当識障害があるが、刺激しなくても覚醒している状態。",
        },
        {
          id: "jcs-3",
          label: "I-3：名前・生年月日が言えない",
          type: "text",
          description:
            "自分の名前や生年月日が言えないが、刺激しなくても覚醒している状態。",
        },
        {
          id: "jcs-10",
          label: "II-10：普通の呼びかけで容易に開眼",
          type: "text",
          description:
            "刺激を加えると覚醒するが、刺激をやめると眠り込む状態。",
        },
        {
          id: "jcs-20",
          label: "II-20：大きな声または体を揺さぶると開眼",
          type: "text",
          description:
            "強めの呼びかけや体動刺激で開眼する状態。",
        },
        {
          id: "jcs-30",
          label: "II-30：痛み刺激を加えつつ呼びかけると開眼",
          type: "text",
          description:
            "痛み刺激と呼びかけを組み合わせると開眼する状態。",
        },
        {
          id: "jcs-100",
          label: "III-100：痛み刺激に払いのける動作",
          type: "text",
          description:
            "痛み刺激に対して払いのけるような動作を示す状態。",
        },
        {
          id: "jcs-200",
          label: "III-200：痛み刺激で少し手足を動かす・顔をしかめる",
          type: "text",
          description:
            "痛み刺激に対してわずかな運動反応や表情変化を示す状態。",
        },
        {
          id: "jcs-300",
          label: "III-300：痛み刺激に反応しない",
          type: "text",
          description:
            "痛み刺激に対して反応がみられない状態。",
        },
      ],
    },
  ],
};