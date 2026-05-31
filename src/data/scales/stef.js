export const stefScale = {
  id: "stef",

  title:
    "Simple Test for Evaluating Hand Function",

  shortTitle: "STEF",

  headerTitle:
    "STEF：Simple Test for Evaluating Hand Function",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "上肢",
    "手指",
    "巧緻性",
    "脳卒中",
    "片麻痺",
    "頸髄損傷",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
  overview:
    "STEF（Simple Test for Evaluating Hand Function）は、上肢・手指による物品操作能力や巧緻性、動作速度を評価する日本発の上肢機能評価尺度である。[1][2]\n\n10項目から構成され、各項目0～10点、合計100点満点で採点する。[2]\n\n主に脳卒中後上肢麻痺をはじめ、手外科疾患や頸椎症性脊髄症などに用いられ、急性期から生活期まで幅広く活用される。[3][4][5]\n\n発症約1週間の急性期脳卒中患者では、STEF 50点が退院前の麻痺側利き手による箸操作自立を予測するカットオフ値として報告されている（感度0.969、特異度1.000、AUC0.998）。[5]",

  tips:
    "【類似評価との違い】\n\nARATやWMFTが上肢活動全般を評価するのに対し、STEFは物品操作の「速さ」を重視した評価である。[3]\n\nFMA-UEが運動麻痺そのものを評価するのに対し、STEFは実際の上肢活動能力を反映する。[3][5]\n\nまたPurdue Pegboard Testより多様な把持・ピンチ動作を評価できる点が特徴で、物品操作能力の経時的変化を追跡したい症例に適している。[4]\n\n【予後予測】\n\n急性期脳卒中患者51名を対象とした研究では、発症約1週間時点のSTEFが退院前の麻痺側利き手による箸操作自立を高精度で予測した。[5]\n\n最適カットオフ値は50点で、感度0.969、特異度1.000、AUC0.998であった。[5]\n\nロジスティック回帰分析ではSTEFが有意な予測因子となり、オッズ比は1.146（p=0.006）であった。[5]\n\n一方、ADL自立、在宅復帰、退院先、歩行予後などを直接予測した報告は確認されていない。[3][5]\n\nCI療法ではSTEF得点の改善が認められているが、STEF初期値による介入効果予測は確立していない。[7]\n\n【臨床上の注意点】\n\nSTEFは物品操作速度を評価する尺度であり、筋力、感覚障害、痙縮、協調性障害などを個別に評価するものではない。[2][3]\n\n失行、半側空間無視、注意障害などがある場合は上肢機能以外の要因で得点が低下する可能性がある。[2][3]\n\nまた、STEF 50点のカットオフは箸操作自立予測に関する単施設研究の結果であり、他の予後へ一般化して解釈すべきではない。[5]",
},

references: [
  {
    id: 1,
    text: "Kaneko T, Hirao K, Muraki T, et al. Development and standardization of the hand function test. Bull Kobe Univ. 1985;1:37-42."
  },
  {
    id: 2,
    text: "Kaneko T. Inspector’s Guide of Simple Test for Evaluating Hand Function (STEF). Sakai Medical, Tokyo. 1986;1:3-17."
  },
  {
    id: 3,
    text: "Shindo K, Oba H, Hara J, Ito M, Hotta F, Liu M. Psychometric properties of the simple test for evaluating hand function in patients with stroke. Brain Inj. 2015;29(6):772-776."
  },
  {
    id: 4,
    text: "Irie K, Iseki H, Okamoto S, Nishimura S, Kobe A, Kagechika K. Validity and responsiveness of the Simple Test for Evaluating Hand Function. Hand Ther. 2017;22(4)."
  },
  {
    id: 5,
    text: "近藤健, 関根圭介, 武田智徳, 野口直人, 李範爽. 急性期脳卒中患者における上肢機能評価を用いた麻痺した利き手で箸操作が自立できる予測因子の検討. 作業療法. 2019;38:277-284."
  },
  {
    id: 7,
    text: "細見雅史, 島田憲二, 松本憲二, 竹林崇, 丸本浩平, 道免和久. Constraint-induced movement therapy（CI療法）の効果と効果予測因子―簡易上肢機能検査（STEF）を用いた多数例による検討. Jpn J Rehabil Med. 2012;49(1):23-30."
  }
],

  domains: [
    {
      id: "large-ball",

      title: "大球",

      description:
        "大きい球を移動します。",

      items: [
        {
          id: "stef-large-ball",
          label: "大球移動",
          type: "text",
          description:
            "粗大把持能力を評価します。",
        },
      ],
    },

    {
      id: "medium-ball",

      title: "中球",

      description:
        "中サイズ球を移動します。",

      items: [
        {
          id: "stef-medium-ball",
          label: "中球移動",
          type: "text",
          description:
            "把持と操作能力を評価します。",
        },
      ],
    },

    {
      id: "large-rect",

      title: "大直方体",

      description:
        "大きい直方体を移動します。",

      items: [
        {
          id: "stef-large-rect",
          label: "大直方体移動",
          type: "text",
          description:
            "粗大運動と把持を評価します。",
        },
      ],
    },

    {
      id: "small-cube",

      title: "立方体",

      description:
        "小立方体を移動します。",

      items: [
        {
          id: "stef-cube",
          label: "立方体移動",
          type: "text",
          description:
            "巧緻性を評価します。",
        },
      ],
    },

    {
      id: "cloth",

      title: "布",

      description:
        "布操作課題です。",

      items: [
        {
          id: "stef-cloth",
          label: "布移動",
          type: "text",
          description:
            "把持と協調運動を評価します。",
        },
      ],
    },

    {
      id: "disc",

      title: "円盤",

      description:
        "円盤移動課題です。",

      items: [
        {
          id: "stef-disc",
          label: "円盤移動",
          type: "text",
          description:
            "把持と速度を評価します。",
        },
      ],
    },

    {
      id: "small-ball",

      title: "小球",

      description:
        "小球操作課題です。",

      items: [
        {
          id: "stef-small-ball",
          label: "小球移動",
          type: "text",
          description:
            "巧緻性を評価します。",
        },
      ],
    },

    {
      id: "pin",

      title: "ピン",

      description:
        "細かい把持課題です。",

      items: [
        {
          id: "stef-pin",
          label: "ピン移動",
          type: "text",
          description:
            "つまみ動作を評価します。",
        },
      ],
    },

    {
      id: "metal-disc",

      title: "金円板",

      description:
        "精密把持課題です。",

      items: [
        {
          id: "stef-metal",
          label: "金円板移動",
          type: "text",
          description:
            "精密操作能力を評価します。",
        },
      ],
    },

    {
      id: "peg",

      title: "ペグ",

      description:
        "最も細かい巧緻動作課題です。",

      items: [
        {
          id: "stef-peg",
          label: "ペグ移動",
          type: "text",
          description:
            "手指巧緻性を評価します。",
        },
      ],
    },
  ],
};