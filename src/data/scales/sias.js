export const siasScale = {
  id: "sias",

  title: "Stroke Impairment Assessment Set",

  shortTitle: "SIAS",

  headerTitle:
    "SIAS：Stroke Impairment Assessment Set",

  category: "motor-function",

  categories: [
    "motor-function",
    "stroke",
  ],

  tags: [
    "脳卒中",
    "片麻痺",
    "運動機能",
    "感覚",
    "筋緊張",
    "体幹",
    "高次脳機能",
    "脳血管",
    "医師",
    "PT",
    "OT",
    "ST",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "SIASは、脳卒中後の機能障害を多面的に評価する尺度です。運動、筋緊張、感覚、関節可動域、疼痛、体幹、高次脳機能、非麻痺側機能などを評価します。",

    tips:
      "脳卒中片麻痺の障害像を広く把握できる評価です。運動機能だけでなく、感覚や体幹、非麻痺側機能も含めて確認できる点が特徴です。",
  },

  domains: [
    {
      id: "motor",
      title: "運動機能",
      description:
        "麻痺側上肢・下肢の運動機能を評価します。",
      items: [
        {
          id: "sias-knee-mouth",
          label: "上肢：Knee-mouth test",
          type: "text",
          description:
            "座位で手を膝から口へ運ぶ課題。肩・肘を中心とした上肢運動を評価します。",
        },
        {
          id: "sias-finger",
          label: "上肢：Finger function test",
          type: "text",
          description:
            "手指機能を評価します。分離運動や巧緻性の程度を確認します。",
        },
        {
          id: "sias-hip-flexion",
          label: "下肢：Hip flexion test",
          type: "text",
          description:
            "股関節屈曲運動を評価します。",
        },
        {
          id: "sias-knee-extension",
          label: "下肢：Knee extension test",
          type: "text",
          description:
            "膝関節伸展運動を評価します。",
        },
        {
          id: "sias-foot-pat",
          label: "下肢：Foot-pat test",
          type: "text",
          description:
            "足部の反復運動を評価します。",
        },
      ],
    },

    {
      id: "tone",
      title: "筋緊張・腱反射",
      description:
        "筋緊張や腱反射を評価します。",
      items: [
        {
          id: "sias-tone",
          label: "筋緊張",
          type: "text",
          description:
            "麻痺側上下肢の筋緊張を確認します。",
        },
        {
          id: "sias-reflex",
          label: "腱反射",
          type: "text",
          description:
            "腱反射の亢進や左右差を確認します。",
        },
      ],
    },

    {
      id: "sensory",
      title: "感覚",
      description:
        "表在感覚・深部感覚を評価します。",
      items: [
        {
          id: "sias-touch",
          label: "表在感覚",
          type: "text",
          description:
            "触覚などの表在感覚を評価します。",
        },
        {
          id: "sias-position",
          label: "深部感覚",
          type: "text",
          description:
            "位置覚などの深部感覚を評価します。",
        },
      ],
    },

    {
      id: "rom-pain",
      title: "関節可動域・疼痛",
      description:
        "関節可動域制限や疼痛を評価します。",
      items: [
        {
          id: "sias-rom",
          label: "関節可動域",
          type: "text",
          description:
            "麻痺側関節の可動域制限を確認します。",
        },
        {
          id: "sias-pain",
          label: "疼痛",
          type: "text",
          description:
            "疼痛の有無や程度を評価します。",
        },
      ],
    },

    {
      id: "trunk",
      title: "体幹機能",
      description:
        "腹筋・垂直性などを評価します。",
      items: [
        {
          id: "sias-abdominal",
          label: "腹筋",
          type: "text",
          description:
            "体幹屈曲に関わる腹筋機能を評価します。",
        },
        {
          id: "sias-verticality",
          label: "垂直性",
          type: "text",
          description:
            "座位・立位における身体の垂直性を評価します。",
        },
      ],
    },

    {
      id: "higher-brain",
      title: "高次脳機能",
      description:
        "視空間認知や言語機能などを評価します。",
      items: [
        {
          id: "sias-visuospatial",
          label: "視空間認知",
          type: "text",
          description:
            "半側空間無視などを含む視空間認知を評価します。",
        },
        {
          id: "sias-language",
          label: "言語",
          type: "text",
          description:
            "失語などの言語機能障害を確認します。",
        },
      ],
    },

    {
      id: "unaffected-side",
      title: "非麻痺側機能",
      description:
        "非麻痺側の筋力や握力を評価します。",
      items: [
        {
          id: "sias-grip",
          label: "非麻痺側握力",
          type: "text",
          description:
            "非麻痺側の握力を評価します。",
        },
        {
          id: "sias-quadriceps",
          label: "非麻痺側大腿四頭筋力",
          type: "text",
          description:
            "非麻痺側下肢筋力を評価します。",
        },
      ],
    },
  ],
};