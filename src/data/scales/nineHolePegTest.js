export const nineHolePegTestScale = {
  id: "nine-hole-peg-test",

  title: "Nine Hole Peg Test",

  shortTitle: "NHPT",

  headerTitle:
    "Nine Hole Peg Test：手指巧緻性評価",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "上肢",
    "手指",
    "巧緻性",
    "精密操作",
    "脳卒中",
    "片麻痺",
    "頸髄損傷",
    "神経筋疾患",
    "多発性硬化症",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Nine Hole Peg Testは、ペグを穴へ挿入・抜去する時間を測定し、手指巧緻性や精密操作能力を評価する検査です。",

    tips:
      "BBTが粗大巧緻性をみるのに対し、NHPTはより細かな手指機能や巧緻動作を評価します。",
  },

  domains: [
    {
      id: "procedure",

      title: "実施方法",

      description:
        "9本のペグを挿入・抜去します。",

      items: [
        {
          id: "nhpt-setup",
          label: "準備",
          type: "text",
          description:
            "9個の穴があるボードと9本のペグを使用します。",
        },

        {
          id: "nhpt-insert",
          label: "挿入",
          type: "text",
          description:
            "1本ずつペグを取り、9個すべての穴へ挿入します。",
        },

        {
          id: "nhpt-remove",
          label: "抜去",
          type: "text",
          description:
            "挿入後、再び1本ずつ取り除いて容器へ戻します。",
        },
      ],
    },

    {
      id: "scoring",

      title: "採点",

      description:
        "所要時間を測定します。",

      items: [
        {
          id: "nhpt-time",
          label: "時間測定",
          type: "text",
          description:
            "開始から全ペグ抜去完了までの時間（秒）を記録します。",
        },

        {
          id: "nhpt-side",
          label: "左右別評価",
          type: "text",
          description:
            "右手・左手を別々に評価し、左右差や経時変化を確認します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "精密巧緻動作を評価します。",

      items: [
        {
          id: "nhpt-fine",
          label: "微細巧緻性",
          type: "text",
          description:
            "つまみ動作、指操作、手内操作などの精密機能を反映します。",
        },

        {
          id: "nhpt-follow",
          label: "経時評価",
          type: "text",
          description:
            "リハビリ介入前後や経時的改善の追跡に適しています。",
        },

        {
          id: "nhpt-bbt",
          label: "BBTとの違い",
          type: "text",
          description:
            "BBTは粗大巧緻性、NHPTは精密巧緻性評価として使い分けます。",
        },
      ],
    },
  ],
};