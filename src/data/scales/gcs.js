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
      "GCS（Glasgow Coma Scale）は、急性脳損傷患者の意識障害の深さを評価する世界で最も広く使用されている意識レベル評価尺度である。[1]\n\n開眼反応（E1–4）、言語反応（V1–5）、運動反応（M1–6）の3項目から構成され、合計3〜15点で評価する。[1]\n\n外傷性脳損傷、脳卒中、低酸素脳症、ICU患者などの急性期評価に用いられ、重症度判定や予後予測の基礎指標として活用される。[1-8]\n\n外傷性脳損傷では13〜15点を軽症、9〜12点を中等症、3〜8点を重症と分類することが一般的である。[2,3]\n\n急性期の重症度把握や予後推定に有用だが、ADLや機能予後を直接評価する尺度ではない。[2,3,5-8]",

    tips:
      "【類似評価との違い】\nJCSは簡便で国内普及率が高いが、GCSは開眼・言語・運動反応を個別に記録でき、国際的な研究や予後モデルで標準的に使用されている。[1,2,5]\n\nFOUR scoreは脳幹反射や呼吸パターンを含み、挿管患者や重症昏睡患者の評価に優れる。[8]\n\n一方、GCSは簡便性と普及率の高さが最大の長所である。[1]\n\n【予後予測】\nGCSは外傷性脳損傷（TBI）の予後予測で最も重要な指標の一つである。[2,3]\n\nCRASHモデルでは年齢、GCS、瞳孔反応、重大な頭蓋外損傷が主要予後因子として採用された。[2]\n\nまたGCS-P（GCS＋瞳孔反応）では、GCS-P 1の死亡率79%、良好転帰率11%に対し、GCS-P 15では死亡率14%、良好転帰率80%と明瞭な予後勾配が示された。[3]\n\n成人外傷222,540例の日本外傷データバンク研究では、院内死亡予測AUROCは0.878であった。[5]\n\n一方、歩行自立、ADL自立、上肢機能回復、嚥下機能、排泄機能などのリハビリテーション予後を直接予測する標準的カットオフ研究は確認されていない。[1-8]\n\n【臨床上の注意点】\nGCSは合計点だけでなくE・V・Mの内訳を記録することが重要である。[1,4]\n\n挿管、失語、顔面外傷、眼瞼腫脹、鎮静薬、筋弛緩薬などは評価結果に影響する。[4,8]\n\nまたGCSは脳幹反射や呼吸パターンを評価できず、GCS 3点では重症度のさらなる層別化が困難である。[8]\n\nGCS 15点でもせん妄や高次脳機能障害を否定できない点に注意する。[7,8]",
  },

  references: [
    {
      id: 1,
      citation:
        "Teasdale G, Jennett B. Assessment of coma and impaired consciousness. A practical scale. Lancet. 1974;2(7872):81-84.",
    },
    {
      id: 2,
      citation:
        "MRC CRASH Trial Collaborators. Predicting outcome after traumatic brain injury: practical prognostic models based on large cohort of international patients. BMJ. 2008;336:425-429.",
    },
    {
      id: 3,
      citation:
        "Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg. 2018;128(6):1612-1620.",
    },
    {
      id: 4,
      citation:
        "Reith FCM, Van den Brande R, Synnot A, Gruen R, Maas AIR. The reliability of the Glasgow Coma Scale: a systematic review. Intensive Care Med. 2016;42(1):3-15.",
    },
    {
      id: 5,
      citation:
        "Yumoto T, Naito H, Yorifuji T, Aokage T, Fujisaki N, Nakao A. Association of Japan Coma Scale score on hospital arrival with in-hospital mortality among trauma patients. BMC Emerg Med. 2019;19:65.",
    },
    {
      id: 7,
      citation:
        "Padwale V, Khandelwal P, Tiwari S, et al. Comparative prognostic value of the National Institutes of Health Stroke Scale and Glasgow Coma Scale in acute stroke. Cureus. 2024;16(7):e64662.",
    },
    {
      id: 8,
      citation:
        "Wijdicks EFM, Bamlet WR, Maramattom BV, Manno EM, McClelland RL. Validation of a new coma scale: The FOUR score. Ann Neurol. 2005;58(4):585-593.",
    },
  ],

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