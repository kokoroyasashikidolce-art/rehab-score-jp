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
      "STEF（Simple Test for Evaluating Hand Function）は、上肢・手指の物品操作能力や巧緻性、動作速度を評価する日本発の上肢機能評価尺度である。[1][2]\n\n10項目から構成され、各項目1～10点、合計100点満点で評価する。[1][2]\n\n主に脳卒中後上肢麻痺をはじめ、橈骨遠位端骨折や頸椎症性脊髄症などに用いられ、急性期から生活期まで幅広く活用される。[3][4][5]\n\n急性期脳卒中ではSTEF 50点が退院前の麻痺側利き手による箸操作自立を予測するカットオフ値として報告されている（感度0.969、特異度1.000、AUC0.998）。[5]\n\n亜急性期脳卒中におけるMDC95は12.7点、MICは9.0～16.0点と報告されている。[6]",

    tips:
      "【類似評価との違い】\n\nARATやWMFTが上肢活動全般を評価するのに対し、STEFは物品操作の「速さ」をより強く反映する評価である。[3]\n\nFMA-UEが運動麻痺そのものを評価するのに対し、STEFは実際の上肢活動能力を評価する。[3]\n\nまたPurdue Pegboard Testより多様な把持・ピンチ・リーチ動作を含むため、片手操作能力の経時的変化を追跡したい症例に適している。[4]\n\n【予後予測】\n\n急性期脳卒中患者51名を対象とした研究では、発症約1週間時点のSTEFが退院前の麻痺側利き手による箸操作自立を高精度で予測した。[5]\n\n最適カットオフ値は50点で、感度0.969、特異度1.000、AUC0.998であった。[5]\n\nロジスティック回帰分析ではSTEFが有意な予測因子となり、オッズ比1.146（p=0.006）と報告されている。[5]\n\n一方、歩行自立、ADL自立、退院先、在宅復帰などを直接予測した報告は確認されていない。[5]\n\nCI療法ではSTEF得点の改善が認められているが、STEF初期値による介入効果予測は確立していない。[8]\n\n【MCID・MDC・基準値】\n\n亜急性期脳卒中患者におけるMICは9.0～16.0点、MDC95は12.7点と報告されている。[6]\n\n健常成人362名を対象とした標準化研究では、18～39歳の正常範囲は99～100点、75～84歳では75～100点と報告されている。[1]\n\n【臨床上の注意点】\n\nSTEFは物品操作速度を評価する尺度であり、筋力、感覚障害、痙縮、失行、注意障害などを個別に評価するものではない。[3][7]\n\n高得点域では軽微な巧緻性障害の検出に限界があり、重度麻痺では床効果が生じる可能性があるが、定量的な検討は報告されていない。[6]\n\nまた、STEF 50点というカットオフは箸操作自立予測に関する結果であり、歩行や退院先など他の予後へ一般化して解釈すべきではない。[5]",
  },

  references: [
    {
      id: 1,
      citation:
        "金子翼, 平尾一幸, 村木敏明, 栗山洋子. 上肢機能検査の開発と標準化に関する研究. 神戸大学医療技術短期大学部紀要. 1985;1:37-42.",
    },
    {
      id: 3,
      citation:
        "Shindo K, Oba H, Hara J, Ito M, Hotta F, Liu M. Psychometric properties of the simple test for evaluating hand function in patients with stroke. Brain Inj. 2015;29(6):772-776.",
    },
    {
      id: 4,
      citation:
        "Irie K, Iseki H, Okamoto S, Nishimura S, Kobe A, Kagechika K. Validity and responsiveness of the Simple Test for Evaluating Hand Function. Hand Ther. 2017;22(4):116-122.",
    },
    {
      id: 5,
      citation:
        "近藤健, 関根圭介, 武田智徳, 野口直人, 李範爽. 急性期脳卒中患者における上肢機能評価を用いた麻痺した利き手で箸操作が自立できる予測因子の検討. 作業療法. 2019;38(3):277-284.",
    },
    {
      id: 6,
      citation:
        "Imai T, Kobayashi S, et al. Minimal detectable change and minimal important change of the simple test for evaluating hand function in patients with subacute stroke. Top Stroke Rehabil. 2026.",
    },
    {
      id: 7,
      citation:
        "大橋拓朗, 藤田貴昭, 佐藤惇史, 木皿悠太, 山根和広, 山本優一. 回復期脳卒中患者における感覚障害が簡易上肢機能検査の得点に与える影響―傾向スコアマッチングによる解析. 日本臨床作業療法研究. 2016;3:18-21.",
    },
    {
      id: 8,
      citation:
        "細見雅史, 島田憲二, 松本憲二, 竹林崇, 丸本浩平, 道免和久. Constraint-induced movement therapy（CI療法）の効果と効果予測因子―簡易上肢機能検査（STEF）を用いた多数例による検討. Jpn J Rehabil Med. 2012;49(1):23-30.",
    },
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