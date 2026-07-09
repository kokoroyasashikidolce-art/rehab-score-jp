
export const twoMinuteWalkTestScale = {
  id: "2mwt",

  title: "2 Minute Walk Test",

  shortTitle: "2MWT",

  headerTitle:
    "2MWT：2分間歩行試験",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "cardiopulmonary",
  ],

  tags: [
    "歩行",
    "移動",
    "歩行距離",
    "持久力",
    "心肺機能",
    "高齢",
    "脳卒中",
    "パーキンソン病",
    "脊髄損傷",
    "運動器",
    "呼吸器",
    "循環器",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "2MWT（2-Minute Walk Test、2分間歩行テスト）は、2分間に歩行できた距離を測定し、短時間の歩行耐久性や機能的歩行能力を評価する検査である。[1,2]\n\n単一課題の評価であり、固定された上限点はなく歩行距離（m）で記録し、距離が長いほど歩行能力が高いことを示す。[1,2]\n\n脳卒中、脊髄損傷、切断、多発性硬化症、COPD、高齢者など幅広い対象で使用され、急性期から生活期まで歩行練習効果判定や6MWTが困難な患者の代替評価として活用される。[1-9]\n\n亜急性期脳卒中ではMCIDとして31〜33m、成人18〜85歳ではMDC 42.5mが報告されている。[2,6,7]",

    tips:
      "【類似評価との違い】\n10MWTは短距離歩行速度、6MWTはより長時間の歩行持久力、TUGは起立・方向転換を含む移動能力を評価する。[10-12]\n\n2MWTは6MWTより短時間で実施可能であり、重症例、易疲労例、急性期・亜急性期患者でも反復測定しやすい点が特徴である。[6,14]\n\n【予後予測】\n2MWTは歩行耐久性や機能的歩行能力を評価し、歩行訓練効果や歩行能力変化のアウトカムとして有用である。[1-4,6,14]\n\n亜急性期脳卒中患者では、Bowmanらが31mの改善を臨床的に意味のある変化（MCID）として報告した。[6]\n\nまたKhanらは33mのMCIDを患者中心の移動能力改善指標として検証した。[7]\n\n一方で、歩行自立、ADL自立、退院先、在宅復帰、転倒、復職、再入院、生存率などを2MWT単独で直接予測する標準的カットオフは確認されていない。[1,2]\n\n【MCID・MDC・基準値】\n亜急性期脳卒中患者における2MWTのMCIDは31mおよび33mと報告されている。[6,7]\n\n成人18〜85歳ではMDC 42.5m、健常成人基準値は150.3〜217.9mと報告されている。[2,5]\n\n【臨床上の注意点】\n2MWTは歩行距離を評価するが、歩行自立度や介助量を直接評価する尺度ではない。[1,2,13]\n\n補助具、装具、介助、休憩、声かけ、歩行路長などの条件を記録する必要がある。[1,2]\n\n高機能例では天井効果、重症例では床効果が生じる可能性がある。[1,2,5]",
  },

  references: [
    {
      id: 1,
      citation:
        "Shirley Ryan AbilityLab. 2 Minute Walk Test. Rehabilitation Measures Database. Updated 2013.",
    },
    {
      id: 2,
      citation:
        "Brooks D, Davis AM, Naglie G. Validity of 3 physical performance measures in inpatient geriatric rehabilitation. Arch Phys Med Rehabil. 2006;87(1):105-110.",
    },
    {
      id: 5,
      citation:
        "Bohannon RW, Wang YC, Gershon RC. Two-minute walk test performance by adults 18 to 85 years: normative values, reliability, and responsiveness. Arch Phys Med Rehabil. 2015;96(3):472-477.",
    },
    {
      id: 6,
      citation:
        "Bowman T, et al. The minimally clinically important difference in the 2-minute walk test for individuals with subacute stroke. Top Stroke Rehabil. 2025;32(3):225-232.",
    },
    {
      id: 7,
      citation:
        "Khan M, et al. Validating the 2-minute walk test MCID for subacute stroke patients: a Pakistani multicenter cohort analysis. PLOS ONE. 2026;21(1):e0347056.",
    },
    {
      id: 10,
      citation:
        "Academy of Neurologic Physical Therapy. 10 Meter Walk Test Pocket Guide. 2018.",
    },
    {
      id: 11,
      citation:
        "ATS Committee on Proficiency Standards for Clinical Pulmonary Function Laboratories. ATS statement: guidelines for the six-minute walk test. Am J Respir Crit Care Med. 2002;166(1):111-117.",
    },
    {
      id: 12,
      citation:
        "Podsiadlo D, Richardson S. The timed “Up & Go”: a test of basic functional mobility for frail elderly persons. J Am Geriatr Soc. 1991;39(2):142-148.",
    },
    {
      id: 13,
      citation:
        "Holden MK, Gill KM, Magliozzi MR, Nathan J, Piehl-Baker L. Clinical gait assessment in the neurologically impaired: reliability and meaningfulness. Phys Ther. 1984;64(1):35-40.",
    },
    {
      id: 14,
      citation:
        "Nguyen DT, et al. Are the 6-minute walk test and the 2-minute walk test equivalent in acute and subacute stroke survivors in Belgium and Vietnam: a multicultural study. J Rehabil Med. 2025.",
    },
  ],

  domains: [
    {
      id: "procedure",

      title: "実施方法",

      description:
        "2分間で歩行できた距離を測定します。",

      items: [
        {
          id: "2mwt-course",
          label: "歩行路",
          type: "text",
          description:
            "一定距離の直線歩行路を往復し、総歩行距離を測定します。",
        },
        {
          id: "2mwt-instruction",
          label: "指示",
          type: "text",
          description:
            "2分間でできるだけ長い距離を安全に歩いてもらいます。",
        },
        {
          id: "2mwt-time",
          label: "測定時間",
          type: "text",
          description:
            "測定時間は2分間です。",
        },
      ],
    },

    {
      id: "record",

      title: "記録項目",

      description:
        "歩行距離と条件を記録します。",

      items: [
        {
          id: "2mwt-distance",
          label: "歩行距離",
          type: "text",
          description:
            "2分間に歩行できた総距離（m）を記録します。",
        },
        {
          id: "2mwt-rest",
          label: "休憩",
          type: "text",
          description:
            "途中で休憩した場合は、休憩の有無や回数を記録します。",
        },
        {
          id: "2mwt-aid",
          label: "補助具・装具",
          type: "text",
          description:
            "杖、歩行器、装具などを使用した場合は記録します。",
        },
        {
          id: "2mwt-oxygen",
          label: "酸素投与",
          type: "text",
          description:
            "酸素投与下で実施した場合は、流量などの条件を記録します。",
        },
      ],
    },

    {
      id: "monitoring",

      title: "モニタリング",

      description:
        "安全確認のために必要に応じて測定します。",

      items: [
        {
          id: "2mwt-spo2",
          label: "SpO₂",
          type: "text",
          description:
            "呼吸器・循環器疾患では、検査前後や必要時にSpO₂を確認します。",
        },
        {
          id: "2mwt-hr",
          label: "心拍数",
          type: "text",
          description:
            "運動負荷に対する心拍応答を確認します。",
        },
        {
          id: "2mwt-borg",
          label: "Borgスケール",
          type: "text",
          description:
            "息切れや下肢疲労の自覚的強度を確認します。",
        },
      ],
    },

    {
      id: "clinical",

      title: "臨床での使い方",

      description:
        "歩行持久力や移動能力を評価します。",

      items: [
        {
          id: "2mwt-endurance",
          label: "歩行持久力",
          type: "text",
          description:
            "6MWTより短時間で、歩行持久力や移動能力を把握できます。",
        },
        {
          id: "2mwt-severe",
          label: "重症例・高齢者",
          type: "text",
          description:
            "長時間歩行が難しい患者では、6MWTの代替として使いやすい場合があります。",
        },
        {
          id: "2mwt-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後で歩行距離の変化を追跡できます。",
        },
      ],
    },
  ],
};
