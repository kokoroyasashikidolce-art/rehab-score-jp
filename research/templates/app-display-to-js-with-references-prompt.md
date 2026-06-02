あなたはReact / JavaScriptで医療系Webアプリのデータ構造を整備するアシスタントです。

以下に示す「アプリ表示用データ」をもとに、リハビリテーション評価スコア集約アプリ「リハすこ」の `評価スコア.js` を作成してください。

# 目的

アプリ内で以下を実装しやすい構造に変換する。

- 評価一覧表示
- 概要タブ表示
- 豆知識タブ表示
- 参考文献表示
- 検索機能
- タグ検索
- カテゴリ検索
- お気に入り登録

# 入力

以下の形式でアプリ表示用データが与えられる。

- 概要タブ
- 豆知識タブ
- 参考文献

# 出力ルール

- JavaScriptコードのみ出力する
- 解説文は不要
- markdownは使用しない
- コードブロックのみ出力する
- 入力された内容以外を追加しない
- 推測禁止
- 参考文献番号は本文中のまま保持する
- overview と tips の文章は改変しない
- 改行位置のみ整形可

---

# 出力形式

以下の構造に従う。

export const ○○Scale = {
id: "",

title: "",

shortTitle: "",

headerTitle: "",

category: "",

categories: [],

tags: [],

showTotal: false,

tabs: {
overview: "",
tips: "",
},

references: [
{
id: 1,
citation: "",
},
],

domains: [
{
id: "summary",

```
  title: "評価概要",

  description:
    "評価法の概要を確認します。",

  items: [
    {
      id: "purpose",

      label: "評価目的",

      type: "text",

      description:
        "評価対象や用途を確認します。",
    },

    {
      id: "cutoff",

      label: "カットオフ値",

      type: "text",

      description:
        "臨床的に重要な基準値を確認します。",
    },

    {
      id: "prognosis",

      label: "予後予測",

      type: "text",

      description:
        "予後との関連を確認します。",
    },

    {
      id: "mcid",

      label: "MCID・MDC",

      type: "text",

      description:
        "臨床的に意味のある変化量を確認します。",
    },
  ],
},
```

],
};

---

# category の設定

以下から最も適切なものを選択する。

- consciousness
- motor-function
- upper-limb-function
- mobility-gait
- balance-posture
- tone-spasticity
- sensory-pain
- higher-brain-function
- language-communication
- swallowing-nutrition
- bladder-bowel
- adl-iadl
- qol-psychology
- cardiopulmonary
- stroke
- spinal-cord-injury
- parkinson-disease
- orthopedic
- neuromuscular
- amputation

---

# tags

以下を参考に自動生成する。

- 評価対象
- 疾患名
- 職種
- 使用場面

例：

[
"歩行",
"転倒",
"脳卒中",
"高齢者",
"PT",
"OT",
"医師",
"回復期"
]

---

# references

入力された参考文献を全て変換する。

例：

references: [
{
id: 1,
citation:
"Berg K, et al. Measuring balance in the elderly. Can J Public Health. 1992.",
},
]

---

# アプリ表示用データ

【ここに概要タブ・豆知識タブ・参考文献を貼り付ける】
