export const tenMeterWalkTestScale = {
  id: "10m-walk-test",

  title: "10 Meter Walk Test",

  shortTitle: "10MWT",

  headerTitle:
    "10MWT：10m歩行試験",

  category: "mobility-gait",

  categories: [
    "mobility-gait",
    "stroke",
  ],

  tags: [
    "歩行",
    "移動",
    "歩行速度",
    "脳卒中",
    "片麻痺",
    "高齢",
    "パーキンソン病",
    "脊髄損傷",
    "運動器",
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
        "10mの歩行時間を測定します。",

      items: [
        {
          id: "10mwt-course",
          label: "歩行路",
          type: "text",
          description:
            "直線の歩行路を使用し、10mの区間を歩行します。",
        },

        {
          id: "10mwt-comfortable",
          label: "快適歩行速度",
          type: "text",
          description:
            "普段通りの歩きやすい速度で歩行してもらいます。",
        },

        {
          id: "10mwt-fast",
          label: "最大歩行速度",
          type: "text",
          description:
            "安全に可能な範囲で、できるだけ速く歩行してもらいます。",
        },

        {
          id: "10mwt-aid",
          label: "補助具",
          type: "text",
          description:
            "杖、歩行器、装具などを使用した場合は記録します。",
        },
      ],
    },

    {
      id: "scoring",

      title: "記録・計算",

      description:
        "歩行時間と歩行速度を記録します。",

      items: [
        {
          id: "10mwt-time",
          label: "歩行時間",
          type: "text",
          description:
            "10m歩行に要した時間（秒）を記録します。",
        },

        {
          id: "10mwt-speed",
          label: "歩行速度",
          type: "text",
          description:
            "歩行速度は 距離（m）÷ 時間（秒）で算出します。10mを12.5秒なら0.8m/sです。",
        },

        {
          id: "10mwt-trials",
          label: "複数回測定",
          type: "text",
          description:
            "複数回測定する場合は、平均値や最良値を記録します。",
        },
      ],
    },

    {
      id: "clinical",

      title: "臨床での使い方",

      description:
        "歩行能力や経時的変化を把握します。",

      items: [
        {
          id: "10mwt-gait-speed",
          label: "歩行速度",
          type: "text",
          description:
            "歩行速度は移動能力、活動範囲、予後評価の指標として用いられます。",
        },

        {
          id: "10mwt-community",
          label: "屋外歩行・社会参加",
          type: "text",
          description:
            "歩行速度は屋内歩行、屋外歩行、地域歩行能力の目安として参考になります。",
        },

        {
          id: "10mwt-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後の歩行能力変化を追跡できます。",
        },
      ],
    },
  ],
};