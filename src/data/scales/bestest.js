export const bestestScale = {
  id: "bestest",

  title: "Balance Evaluation Systems Test",

  shortTitle: "BESTest",

  headerTitle:
    "BESTest：Balance Evaluation Systems Test",

  category: "balance-posture",

  categories: [
    "balance-posture",
    "mobility-gait",
  ],

  tags: [
    "バランス",
    "姿勢",
    "歩行",
    "移動",
    "転倒",
    "動的バランス",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "前庭",
    "神経疾患",
    "PT",
    "OT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "BESTestは、バランス障害を複数のシステムに分けて評価する包括的なバランス評価です。",

    tips:
      "Mini-BESTestより詳細で、姿勢制御のどの要素に問題があるかを分析しやすい評価です。臨床では時間に応じてBESTest、Mini-BESTestを使い分けます。",
  },

  domains: [
    {
      id: "overview",

      title: "評価概要",

      description:
        "バランス制御を複数システムに分けて評価します。",

      items: [
        {
          id: "bestest-purpose",
          label: "目的",
          type: "text",
          description:
            "転倒リスクだけでなく、バランス障害の背景となる姿勢制御システムを分析します。",
        },
        {
          id: "bestest-structure",
          label: "構成",
          type: "text",
          description:
            "生体力学的制約、安定限界、予測的姿勢制御、反応性姿勢制御、感覚依存性、歩行安定性などを評価します。",
        },
        {
          id: "bestest-score",
          label: "採点",
          type: "text",
          description:
            "各項目を段階的に採点し、領域別・合計点でバランス機能を把握します。正式な採点は原版・使用施設手順に従ってください。",
        },
      ],
    },

    {
      id: "biomechanical",
      title: "生体力学的制約",
      description:
        "姿勢制御の土台となる身体的要因を評価します。",
      items: [
        {
          id: "bestest-base",
          label: "支持基底面",
          type: "text",
          description:
            "足部・下肢・姿勢アライメントなど、バランスの基盤となる要素を確認します。",
        },
        {
          id: "bestest-strength",
          label: "筋力・可動性",
          type: "text",
          description:
            "姿勢保持に必要な筋力や関節可動性を評価します。",
        },
      ],
    },

    {
      id: "stability-limits",
      title: "安定限界・垂直性",
      description:
        "重心移動や身体の垂直認知を評価します。",
      items: [
        {
          id: "bestest-limits",
          label: "安定限界",
          type: "text",
          description:
            "支持基底面内でどの程度重心移動できるかを評価します。",
        },
        {
          id: "bestest-verticality",
          label: "垂直性",
          type: "text",
          description:
            "身体を垂直に保つ能力や姿勢認知を確認します。",
        },
      ],
    },

    {
      id: "anticipatory",
      title: "予測的姿勢制御",
      description:
        "自発運動に伴う姿勢制御を評価します。",
      items: [
        {
          id: "bestest-sit-to-stand",
          label: "立ち上がり",
          type: "text",
          description:
            "座位から立位への姿勢制御を評価します。",
        },
        {
          id: "bestest-reach",
          label: "リーチ動作",
          type: "text",
          description:
            "随意運動に伴う重心移動と姿勢保持を評価します。",
        },
        {
          id: "bestest-one-leg",
          label: "片脚立位",
          type: "text",
          description:
            "支持基底面が狭い状態での姿勢制御を評価します。",
        },
      ],
    },

    {
      id: "reactive",
      title: "反応性姿勢制御",
      description:
        "外乱に対するステップ反応や姿勢反応を評価します。",
      items: [
        {
          id: "bestest-forward",
          label: "前方反応",
          type: "text",
          description:
            "前方外乱に対する姿勢反応を評価します。",
        },
        {
          id: "bestest-backward",
          label: "後方反応",
          type: "text",
          description:
            "後方外乱に対する姿勢反応を評価します。",
        },
        {
          id: "bestest-lateral",
          label: "側方反応",
          type: "text",
          description:
            "側方外乱に対する姿勢反応を評価します。",
        },
      ],
    },

    {
      id: "sensory-orientation",
      title: "感覚依存性",
      description:
        "視覚・体性感覚・前庭情報を利用した姿勢制御を評価します。",
      items: [
        {
          id: "bestest-vision",
          label: "視覚依存",
          type: "text",
          description:
            "開眼・閉眼条件での姿勢制御を確認します。",
        },
        {
          id: "bestest-somatosensory",
          label: "体性感覚条件",
          type: "text",
          description:
            "床面条件を変化させた際の姿勢制御を評価します。",
        },
        {
          id: "bestest-vestibular",
          label: "前庭情報",
          type: "text",
          description:
            "視覚や体性感覚が制限された状況での姿勢安定性を確認します。",
        },
      ],
    },

    {
      id: "gait-stability",
      title: "歩行安定性",
      description:
        "歩行中のバランスと環境適応能力を評価します。",
      items: [
        {
          id: "bestest-gait-speed",
          label: "歩行速度変化",
          type: "text",
          description:
            "歩行速度を変化させた際の安定性を評価します。",
        },
        {
          id: "bestest-head-turn",
          label: "頭部回旋歩行",
          type: "text",
          description:
            "頭部運動を加えた歩行での安定性を評価します。",
        },
        {
          id: "bestest-obstacle",
          label: "障害物対応",
          type: "text",
          description:
            "障害物回避やまたぎ動作での歩行安定性を評価します。",
        },
        {
          id: "bestest-dual-task",
          label: "二重課題歩行",
          type: "text",
          description:
            "認知課題などを加えた歩行時の安定性を評価します。",
        },
      ],
    },
  ],
};