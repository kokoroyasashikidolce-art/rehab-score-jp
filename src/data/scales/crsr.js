export const crsrScale = {
  id: "crs-r",

  title:
    "Coma Recovery Scale-Revised",

  shortTitle: "CRS-R",

  headerTitle:
    "CRS-R：Coma Recovery Scale-Revised",

  category: "consciousness",

  categories: [
    "consciousness",
  ],

  tags: [
    "意識",
    "覚醒",
    "意識障害",
    "慢性意識障害",
    "DOC",
    "遷延性意識障害",
    "リハビリ",
    "入院",
    "医師",
    "PT",
    "OT",
    "ST",
  ],

  showTotal: false,

  tabs: {
    overview:
      "CRS-R（Coma Recovery Scale-Revised）は、重度後天性脳損傷患者の意識レベルを評価し、昏睡、植物状態／無反応覚醒症候群（VS/UWS）、最小意識状態（MCS）、最小意識状態からの脱却（eMCS）を鑑別する標準化神経行動評価である。[1-5]\n\n聴覚・視覚・運動・口腔運動／言語・コミュニケーション・覚醒度の6下位尺度23項目から構成され、合計0〜23点で評価する。[1]\n\n急性期後から回復期・生活期まで広く用いられ、診断、経時的変化の把握、予後予測、治療効果判定に活用される。[1-5]\n\nCRS-R 8点は意識徴候検出のカットオフとして感度93%、特異度96%、正診率93%と報告されている。[6]",

    tips:
      "【類似評価との違い】\nGCSやFOUR scoreは急性期の意識障害評価に適しているが、VS/UWS、MCS、eMCSの鑑別には限界がある。[1-3,11,12]\n\nCRS-Rは意識を示す行動反応やコミュニケーションを詳細に評価でき、遷延性意識障害（DoC）の診断に特化している。[1-5]\n\nDoC評価法の中でも推奨度が高く、SMARTやWHIMなどより標準的な評価尺度として位置づけられている。[4]\n\n【予後予測】\nCRS-RはDoC患者の意識回復予測に有用な評価法である。[5-8]\n\nDoC患者180例を対象とした研究では、入院時CRS-Rが機能改善の最良予測因子であり、CRS-R 12点超の患者はDoC脱却や機能改善の可能性が高かった。[7]\n\nまた、CRS-R 8点は意識徴候検出の最適カットオフとして、感度93%、特異度96%、正診率93%を示した。[6]\n\nさらにMCSはVS/UWSより生存率や意識回復率が良好とされており、CRS-RによるMCS徴候の検出は予後層別化に重要である。[5,14]\n\n一方で、歩行自立、ADL自立、上肢機能、嚥下、排泄、復職などを直接予測する標準的カットオフ研究は確認されていない。[1-10]\n\n【臨床上の注意点】\nCRS-Rは合計点のみで診断する尺度ではなく、VS/UWS、MCS、eMCSを示す特定行動の有無を確認する必要がある。[1-3]\n\n覚醒度や疲労、鎮静薬、感染、疼痛などの影響で反応が変動するため、単回評価ではなく反復評価が推奨される。[3-5]\n\nまた重度運動障害、失語、視覚・聴覚障害などは偽陰性の原因となり得る。[1-5]\n\nCRS-R 23点でも高次脳機能やADL、社会参加までは評価できない点に注意する。[1-5]",
  },

  references: [
    {
      id: 1,
      citation:
        "Giacino JT, Kalmar K, Whyte J. The JFK Coma Recovery Scale-Revised: measurement characteristics and diagnostic utility. Arch Phys Med Rehabil. 2004;85(12):2020-2029.",
    },
    {
      id: 4,
      citation:
        "Seel RT, Sherer M, Whyte J, Katz DI, Giacino JT, Rosenbaum AM, et al. Assessment scales for disorders of consciousness: evidence-based recommendations for clinical practice and research. Arch Phys Med Rehabil. 2010;91(12):1795-1813.",
    },
    {
      id: 5,
      citation:
        "Giacino JT, Katz DI, Schiff ND, Whyte J, Ashman EJ, Ashwal S, et al. Practice guideline update recommendations summary: Disorders of consciousness. Neurology. 2018;91(10):450-460.",
    },
    {
      id: 6,
      citation:
        "Bodien YG, Carlowicz CA, Chatelle C, Giacino JT. Sensitivity and specificity of the Coma Recovery Scale-Revised total score in detection of conscious awareness. Arch Phys Med Rehabil. 2016;97(3):490-492.e1.",
    },
    {
      id: 7,
      citation:
        "Lucca LF, Lofaro D, Pignolo L, Leto E, Ursino M, Cortese MD, et al. Outcome prediction in disorders of consciousness: the role of coma recovery scale revised. BMC Neurol. 2019;19:68.",
    },
    {
      id: 11,
      citation:
        "Teasdale G, Jennett B. Assessment of coma and impaired consciousness. A practical scale. Lancet. 1974;2(7872):81-84.",
    },
    {
      id: 12,
      citation:
        "Wijdicks EFM, Bamlet WR, Maramattom BV, Manno EM, McClelland RL. Validation of a new coma scale: The FOUR score. Ann Neurol. 2005;58(4):585-593.",
    },
    {
      id: 14,
      citation:
        "Faugeras F, Rohaut B, Valente M, Sitt J, Demeret S, Bolgert F, et al. Survival and consciousness recovery are better in the minimally conscious state than in the vegetative state. Brain Inj. 2018;32(1):72-77.",
    },
  ],

  domains: [
    {
      id: "crsr-domains",
      title: "評価領域",
      description:
        "CRS-Rは6つの下位尺度で構成されます。",
      items: [
        {
          id: "crsr-auditory",
          label: "聴覚機能",
          type: "text",
          description:
            "音や呼びかけへの反応、命令追従などを評価します。",
        },
        {
          id: "crsr-visual",
          label: "視覚機能",
          type: "text",
          description:
            "視覚追跡、視覚定位、物体認識などを評価します。",
        },
        {
          id: "crsr-motor",
          label: "運動機能",
          type: "text",
          description:
            "疼痛への反応、自動運動、物品使用などを評価します。",
        },
        {
          id: "crsr-oromotor",
          label: "口腔運動・言語機能",
          type: "text",
          description:
            "発声、口腔運動、発語などを評価します。",
        },
        {
          id: "crsr-communication",
          label: "コミュニケーション",
          type: "text",
          description:
            "一貫した意思伝達や yes/no 反応を評価します。",
        },
        {
          id: "crsr-arousal",
          label: "覚醒",
          type: "text",
          description:
            "開眼や覚醒維持の程度を評価します。",
        },
      ],
    },
    {
      id: "crsr-note",
      title: "注意点",
      description:
        "評価時の注意点です。",
      items: [
        {
          id: "crsr-repeat",
          label: "反復評価が重要",
          type: "text",
          description:
            "意識障害患者では日内変動や疲労の影響が大きく、複数回の評価が重要です。",
        },
        {
          id: "crsr-diagnosis",
          label: "診断分類の補助",
          type: "text",
          description:
            "植物状態/無反応覚醒症候群、最小意識状態、意識回復の判定補助に用いられます。",
        },
      ],
    },
  ],
};

