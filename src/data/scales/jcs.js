
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
      "JCS（Japan Coma Scale）は、日本で広く用いられている意識障害評価尺度であり、覚醒状態と刺激への反応性から意識レベルを評価する。[1-5]\n\nJCS 0、1、2、3、10、20、30、100、200、300の10段階で構成され、数値が大きいほど意識障害が重いことを示す。[1-5]\n\n救急外来、脳卒中急性期、外傷初期評価、病院前救護などで迅速な重症度評価に用いられる。[2-5]\n\n成人外傷では院内死亡予測AUROCが0.874とGCS（0.878）と同等の予測性能を示した。[3]\n\n脳卒中や外傷における急性期重症度評価および予後予測因子として有用である。[2-5]",

    tips:
      "【類似評価との違い】\nGCSは開眼・言語・運動反応の3項目で評価するのに対し、JCSは覚醒反応を中心とした単一軸評価であり、より簡便かつ迅速に実施できる。[3]\n\n一方で、運動反応や言語反応などの詳細な神経学的情報は得られない。[3,5]\n\n救急現場や脳卒中急性期での迅速な情報共有に適している。[2-5]\n\n【予後予測】\n脳卒中13,788例を対象としたコホート研究では、発症時JCSが脳卒中後のADLや死亡などのアウトカムと関連した。[2]\n\nまた、非致死性初発脳卒中1,880例の研究では、入院時JCS高値が5年死亡リスク上昇と関連した。[4]\n\n成人外傷222,540例を対象とした日本外傷データバンク研究では、院内死亡予測AUROCは0.874であり、GCSの0.878とほぼ同等であった。[3]\n\nさらに4分類JCSでは、JCS 0を基準として院内死亡の調整オッズ比は1桁で2.31、2桁で4.81、3桁で27.88であった。[3]\n\n一方、歩行自立、上肢機能、嚥下機能、排泄機能などを直接予測する標準的研究は確認されていない。[1-5]\n\n【臨床上の注意点】\nJCSは順序尺度であり、数値間の差を等間隔として解釈してはならない。[1-5]\n\nJCS 0でも軽度認知障害や高次脳機能障害は評価できず天井効果がある。[1-5]\n\n一方、JCS 300では脳幹反射や呼吸状態などの詳細な神経学的重症度を表現できない。[1-5]\n\n脳卒中ではNIHSSなどの神経学的評価尺度との併用が望ましい。[7]",
  },

  references: [
    {
      id: 1,
      citation:
        "太田富雄，和賀志朗，半田肇，他．意識障害の新しい分類法試案―数量的表現（III群3段階方式）の可能性．脳神経外科．1974;2(9):623-627.",
    },
    {
      id: 2,
      citation:
        "Shigematsu K, Nakano H, Watanabe Y. The eye response test alone is sufficient to predict stroke outcome—reintroduction of Japan Coma Scale: a cohort study. BMJ Open. 2013;3:e002736.",
    },
    {
      id: 3,
      citation:
        "Yumoto T, Naito H, Yorifuji T, Aokage T, Fujisaki N, Nakao A. Association of Japan Coma Scale score on hospital arrival with in-hospital mortality among trauma patients. BMC Emerg Med. 2019;19:65.",
    },
    {
      id: 4,
      citation:
        "Takashima N, Arima H, Kita Y, et al. Long-term survival after stroke in 1.4 million Japanese population: Shiga Stroke Registry. J Stroke. 2020;22(3):336-344.",
    },
    {
      id: 5,
      citation:
        "Nakajima M, et al. Development and validation of a novel method for converting the Japan Coma Scale to Glasgow Coma Scale. J Epidemiol. 2023;33(10):531-535.",
    },
    {
      id: 7,
      citation:
        "Lyden PD, Lu M, Levine SR, Brott TG, Broderick J; NINDS rtPA Stroke Study Group. A modified National Institutes of Health Stroke Scale for use in stroke clinical trials: preliminary reliability and validity. Stroke. 2001;32:1310-1317.",
    },
  ],

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