export const passScale = {
  id: "pass",

  title: "Postural Assessment Scale for Stroke Patients",

  shortTitle: "PASS",

  headerTitle:
    "PASS：Postural Assessment Scale for Stroke Patients",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "バランス",
    "姿勢",
    "体幹",
    "座位",
    "立位",
    "移動",
    "脳卒中",
    "片麻痺",
    "急性期",
    "回復期",
    "PT",
    "OT",
    "医師",
    "入院",
  ],

  showTotal: false,

  tabs: {
    overview:
      "PASSは、脳卒中患者の姿勢保持と姿勢変換能力を評価する尺度です。",

    tips:
      "座位・立位保持だけでなく、臥位から座位、座位から立位などの姿勢変換を評価できるため、急性期から回復期の脳卒中リハで使いやすい評価です。",
  },

  domains: [
    {
      id: "overview",
      title: "評価の概要",
      description:
        "姿勢保持と姿勢変換の2側面を評価します。",
      items: [
        {
          id: "pass-purpose",
          label: "目的",
          type: "text",
          description:
            "脳卒中後の姿勢制御能力、体幹機能、基本動作能力を評価します。",
        },
        {
          id: "pass-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、合計点で姿勢制御能力を把握します。正式な採点は原版・マニュアルに従ってください。",
        },
      ],
    },

    {
      id: "maintaining-posture",
      title: "姿勢保持",
      description:
        "一定姿勢を保つ能力を評価します。",
      items: [
        {
          id: "pass-supine",
          label: "背臥位保持",
          type: "text",
          description:
            "背臥位で安定して姿勢を保持できるか確認します。",
        },
        {
          id: "pass-sitting",
          label: "座位保持",
          type: "text",
          description:
            "支持あり・なしで座位姿勢を保持できるか確認します。",
        },
        {
          id: "pass-standing",
          label: "立位保持",
          type: "text",
          description:
            "立位姿勢を保持できるか確認します。",
        },
        {
          id: "pass-single-leg",
          label: "片脚立位",
          type: "text",
          description:
            "片脚立位保持により高度な姿勢制御を評価します。",
        },
      ],
    },

    {
      id: "changing-posture",
      title: "姿勢変換",
      description:
        "姿勢を変える能力を評価します。",
      items: [
        {
          id: "pass-turning",
          label: "寝返り",
          type: "text",
          description:
            "背臥位から側臥位などへの寝返り能力を評価します。",
        },
        {
          id: "pass-supine-to-sit",
          label: "背臥位から座位",
          type: "text",
          description:
            "臥位から座位への起き上がり能力を評価します。",
        },
        {
          id: "pass-sit-to-stand",
          label: "座位から立位",
          type: "text",
          description:
            "立ち上がり能力と姿勢制御を評価します。",
        },
        {
          id: "pass-standing-pickup",
          label: "立位で物を拾う",
          type: "text",
          description:
            "立位で床の物を拾う動作から動的バランスを評価します。",
        },
      ],
    },

    {
      id: "clinical-use",
      title: "臨床での使い方",
      description:
        "脳卒中後の基本動作・姿勢制御の経時変化を追います。",
      items: [
        {
          id: "pass-early",
          label: "急性期・回復期に使いやすい",
          type: "text",
          description:
            "歩行困難な時期でも、座位・立位・姿勢変換能力を評価できます。",
        },
        {
          id: "pass-trunk",
          label: "体幹機能との関連",
          type: "text",
          description:
            "体幹機能やバランス能力、移動能力の把握に役立ちます。",
        },
        {
          id: "pass-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後で姿勢制御能力の変化を確認できます。",
        },
      ],
    },
  ],
};