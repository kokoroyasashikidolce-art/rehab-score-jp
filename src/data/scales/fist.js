export const fistScale = {
  id: "fist",

  title: "Function in Sitting Test",

  shortTitle: "FIST",

  headerTitle:
    "FIST：Function in Sitting Test",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "体幹",
    "バランス",
    "姿勢",
    "座位",
    "移動",
    "脳卒中",
    "片麻痺",
    "急性期",
    "回復期",
    "重症例",
    "PT",
    "OT",
    "医師",
    "入院",
  ],

  showTotal: false,

  tabs: {
    overview:
      "FISTは、座位での姿勢保持、重心移動、機能的動作を評価する検査です。",

    tips:
      "立位や歩行が困難な患者でも評価しやすく、急性期・回復期の重症例で座位機能の変化を追いやすい評価です。",
  },

  domains: [
    {
      id: "overview",
      title: "評価概要",
      description:
        "座位での機能的バランス能力を評価します。",
      items: [
        {
          id: "fist-purpose",
          label: "目的",
          type: "text",
          description:
            "座位保持、座位での重心移動、上肢使用を伴う機能的動作能力を評価します。",
        },
        {
          id: "fist-target",
          label: "対象",
          type: "text",
          description:
            "急性期・回復期の脳卒中、重症例、立位評価が難しい患者に適しています。",
        },
        {
          id: "fist-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、合計点で座位機能を把握します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "static-sitting",
      title: "静的座位",
      description:
        "座位姿勢を保持する能力を評価します。",
      items: [
        {
          id: "fist-static-sitting",
          label: "座位保持",
          type: "text",
          description:
            "支持なし座位を安定して保持できるか評価します。",
        },
        {
          id: "fist-eyes-closed",
          label: "閉眼座位",
          type: "text",
          description:
            "視覚情報を減らした状態で座位保持できるか確認します。",
        },
      ],
    },

    {
      id: "dynamic-sitting",
      title: "動的座位",
      description:
        "座位での重心移動や姿勢調整を評価します。",
      items: [
        {
          id: "fist-forward-reach",
          label: "前方リーチ",
          type: "text",
          description:
            "座位で前方へ手を伸ばす動作から動的座位バランスを評価します。",
        },
        {
          id: "fist-lateral-reach",
          label: "側方リーチ",
          type: "text",
          description:
            "座位で側方へ重心移動できるか評価します。",
        },
        {
          id: "fist-pick-up",
          label: "床の物を拾う",
          type: "text",
          description:
            "座位から床の物へ手を伸ばす動作を評価します。",
        },
      ],
    },

    {
      id: "functional-tasks",
      title: "機能的座位課題",
      description:
        "座位での日常動作に近い課題を評価します。",
      items: [
        {
          id: "fist-scooting",
          label: "座位での移動",
          type: "text",
          description:
            "座位で殿部をずらす、ベッド上で位置を調整する能力を評価します。",
        },
        {
          id: "fist-turning",
          label: "座位での方向転換",
          type: "text",
          description:
            "座位姿勢を保ちながら体幹を回旋する能力を評価します。",
        },
        {
          id: "fist-upper-limb-use",
          label: "上肢使用を伴う座位",
          type: "text",
          description:
            "座位バランスを保ちながら上肢を使用できるか確認します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "座位機能から移乗・立位・歩行への準備性を把握します。",
      items: [
        {
          id: "fist-early",
          label: "早期評価",
          type: "text",
          description:
            "立位や歩行評価が難しい時期でも、座位機能を評価できます。",
        },
        {
          id: "fist-transfer",
          label: "移乗との関連",
          type: "text",
          description:
            "座位バランスは移乗や起立動作の基盤となります。",
        },
        {
          id: "fist-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後で座位機能の改善を追跡できます。",
        },
      ],
    },
  ],
};