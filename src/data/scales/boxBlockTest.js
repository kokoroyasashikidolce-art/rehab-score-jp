export const boxBlockTestScale = {
  id: "box-block-test",

  title: "Box and Block Test",

  shortTitle: "BBT",

  headerTitle:
    "Box and Block Test：上肢粗大巧緻性評価",

  category: "upper-limb-function",

  categories: [
    "upper-limb-function",
    "stroke",
  ],

  tags: [
    "上肢",
    "手指",
    "巧緻性",
    "粗大巧緻性",
    "脳卒中",
    "片麻痺",
    "頸髄損傷",
    "神経筋疾患",
    "OT",
    "PT",
    "医師",
    "入院",
    "外来",
  ],

  showTotal: false,

  tabs: {
    overview:
      "Box and Block Testは、一定時間内に箱の中のブロックを反対側へ移す数を測定し、上肢の粗大巧緻性を評価する検査です。",

    tips:
      "比較的短時間で実施でき、脳卒中、脊髄損傷、神経筋疾患など幅広い疾患で上肢機能の経時的変化を追いやすい評価です。",
  },

  domains: [
    {
      id: "procedure",

      title: "実施方法",

      description:
        "一定時間内にブロックを移動します。",

      items: [
        {
          id: "bbt-setup",
          label: "準備",
          type: "text",
          description:
            "仕切りのある箱とブロックを用意し、被検者は座位で実施します。",
        },
        {
          id: "bbt-task",
          label: "課題",
          type: "text",
          description:
            "片手でブロックを1個ずつつかみ、仕切りを越えて反対側へ移します。",
        },
        {
          id: "bbt-time",
          label: "時間",
          type: "text",
          description:
            "通常は60秒間で移動できたブロック数を記録します。",
        },
      ],
    },

    {
      id: "scoring",

      title: "採点",

      description:
        "移動できたブロック数を記録します。",

      items: [
        {
          id: "bbt-score",
          label: "スコア",
          type: "text",
          description:
            "60秒間に仕切りを越えて正しく移動できたブロックの個数を点数として記録します。",
        },
        {
          id: "bbt-side",
          label: "左右別に評価",
          type: "text",
          description:
            "右手・左手を別々に評価し、左右差や経時的変化を確認します。",
        },
      ],
    },

    {
      id: "clinical-use",

      title: "臨床での使い方",

      description:
        "上肢機能の経時的評価に使います。",

      items: [
        {
          id: "bbt-gross-dexterity",
          label: "粗大巧緻性",
          type: "text",
          description:
            "細かなつまみよりも、把持・移動を含む粗大な手の使用能力を反映します。",
        },
        {
          id: "bbt-follow-up",
          label: "経時的変化",
          type: "text",
          description:
            "リハビリテーション経過に伴う上肢機能の改善を追跡しやすい評価です。",
        },
      ],
    },
  ],
};