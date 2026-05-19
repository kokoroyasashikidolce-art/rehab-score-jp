export const scim3Scale = {
  id: "scim3",
  title: "Spinal Cord Independence Measure version III",
  shortTitle: "SCIM III",
  headerTitle:
    "SCIM III (Spinal Cord Independence Measure version III) : 脊髄障害自立度評価法 第3版",

categories: [
  "adl-iadl",
  "spinal-cord-injury",
],
  tags: [
    "脊髄損傷",
    "ADL",
    "入院",
    "観察評価",
  ],
  totalScore: 100,
  showTotal: true,
  fixedBottomBar: true,

  tabs: {
    overview:
      "SCIM IIIは、脊髄障害者の日常生活動作の自立度を評価する尺度です。セルフケア、呼吸と排泄管理、移動の3領域から構成され、合計100点で評価します。",
    tips:
      "SCIM IIIは医療スタッフによる観察評価を前提とした尺度です。SCIM-SRとは異なり、排尿管理や移動項目は分岐形式ではなく、表に示された選択肢から直接選択します。",
  },

  domains: [
    {
      id: "self_care",
      title: "セルフケア",
      maxScore: 20,
      items: [
        {
          id: "eating",
          title: "食事",

description:
"切る，容器を開ける，飲み物を注ぐ，食べ物を口に運ぶ，飲み物の入ったコップを持つ",
          type: "select",
          options: [
            {
              score: 0,
              label:
                "静脈栄養または胃ろうが必要．あるいは経口摂取において全介助を要する．",
            },
            {
              score: 1,
              label:
                "食べたり飲んだりすること，または補助器具の装着に部分介助を要する．",
            },
            {
              score: 2,
              label:
                "食べることは自立．補助器具を必要とするか，または食べ物を切ったり注いだりすること，容器の開封にのみ介助．",
            },
            {
              score: 3,
              label:
                "食べることも飲むことも自立．介助や補助器具を必要としない．",
            },
          ],
        },
        {
          id: "bathing_upper_body",
          title: "入浴（上半身）",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            { score: 1, label: "部分介助を要する．" },
            {
              score: 2,
              label:
                "補助器具または特定の環境（手すりや椅子など）が整っていれば自立して体を洗う．",
            },
            {
              score: 3,
              label:
                "自立して体を洗う．（通常健常者なら用いることのない）補助器具や特定の環境設定は不要．",
            },
          ],
        },
        {
          id: "bathing_lower_body",
          title: "入浴（下半身）",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            { score: 1, label: "部分介助を要する．" },
            {
              score: 2,
              label:
                "補助器具または特定の環境（手すりや椅子など）が整っていれば自立して体を洗う．",
            },
            {
              score: 3,
              label:
                "自立して体を洗う．（通常健常者なら用いることのない）補助器具や特定の環境設定は不要．",
            },
          ],
        },
        {
          id: "dressing_upper_body",
          title: "更衣（上半身）",
description:
"常用している装具も含む",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "ボタン，ファスナー，紐のない衣服で部分介助を要する．",
            },
            {
              score: 2,
              label:
                "ボタン，ファスナー，紐のない衣服であれば自立．補助器具と特定の環境設定，またはそのどちらかが必要．",
            },
            {
              score: 3,
              label:
                "ボタン，ファスナー，紐のない衣服であれば自立，補助器具も特定の環境設定も不要．ボタン，ファスナー，紐のあつかいにだけ介助，補助器具または特定の環境設定が必要．",
            },
            {
              score: 4,
              label:
                "（衣服の種類を問わず）自立して着替える．補助器具も特定の環境設定も不要．",
            },
          ],
        },
        {
          id: "dressing_lower_body",
          title: "更衣（下半身）",
description:
"靴，常用している装具も含む",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "ボタン，ファスナー，紐のない衣服で部分介助を要する．",
            },
            {
              score: 2,
              label:
                "ボタン，ファスナー，紐のない衣服であれば自立．補助器具と特定の環境設定，またはそのどちらかが必要．",
            },
            {
              score: 3,
              label:
                "ボタン，ファスナー，紐のない衣服であれば自立，補助器具も特定の環境設定も不要．ボタン，ファスナー，紐のあつかいにだけ介助，補助器具または特定の環境設定が必要．",
            },
            {
              score: 4,
              label:
                "（衣服の種類を問わず）自立して着替える．補助器具も特定の環境設定も不要．",
            },
          ],
        },
        {
          id: "grooming",
          title: "整容",

description:
"手洗い，洗顔，歯磨き，整髪，髭剃り，化粧",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            { score: 1, label: "部分介助を要する．" },
            {
              score: 2,
              label: "補助器具があれば自立して整容動作を行う．",
            },
            {
              score: 3,
              label: "補助器具を用いずに自立して整容動作を行う．",
            },
          ],
        },
      ],
    },

    {
      id: "respiration_and_sphincter_management",
      title: "呼吸と排泄管理",
      maxScore: 40,
      items: [
        {
          id: "respiration",
          title: "呼吸",
          type: "select",
          options: [
            {
              score: 0,
              label:
                "気管チューブと持続的補助換気または間歇的補助換気が必要．",
            },
            {
              score: 2,
              label:
                "気管チューブを装用して自発呼吸．酸素を必要としたり，咳嗽時または気管チューブの管理に多大な介助を必要とする．",
            },
            {
              score: 4,
              label:
                "気管チューブを装用して自発呼吸．咳嗽時または気管チューブの管理に少ししか介助を必要としない．",
            },
            {
              score: 6,
              label:
                "気管チューブなしで自発呼吸．酸素，咳嗽時の多大な介助，マスク（PEEP），または間歇的補助換気（BiPAP）を必要とする．",
            },
            {
              score: 8,
              label:
                "気管チューブなしで自発呼吸．介助または咳嗽刺激を少ししか必要としない．",
            },
            {
              score: 10,
              label: "介助も器具もなしで自発呼吸．",
            },
          ],
        },
        {
          id: "bladder_management",
          title: "排尿管理",
          type: "select",
          options: [
            { score: 0, label: "留置カテーテル" },
            {
              score: 3,
              label:
                "残尿量＞100 cc．不定期導尿または介助による間欠的導尿．",
            },
            {
              score: 6,
              label:
                "残尿量＜100 cc または間欠的自己導尿．集尿器をあてがう際の介助は必要．",
            },
            {
              score: 9,
              label:
                "間欠的自己導尿．集尿器を使用する．器具をあてがう際の介助は不要．",
            },
            {
              score: 11,
              label:
                "間欠的自己導尿．導尿と導尿の間には失禁なし．集尿器を使用しない．",
            },
            {
              score: 13,
              label:
                "残尿量＜100 cc．集尿器のみ必要．集尿器の取扱いには介助不要．",
            },
            {
              score: 15,
              label:
                "残尿量＜100 cc．失禁なし．集尿器を使用しない．",
            },
          ],
        },
        {
          id: "bowel_management",
          title: "排便管理",
          type: "select",
          options: [
            {
              score: 0,
              label:
                "排便が不規則またはごく低頻度（3日に1回未満）．",
            },
            {
              score: 5,
              label:
                "規則的ながら，（座薬を挿入するなどに）介助を要する．失敗はまれ（月2回未満）．",
            },
            {
              score: 8,
              label:
                "規則的な排便で，介助を要しない．失敗はまれ（月2回未満）．",
            },
            {
              score: 10,
              label:
                "規則的な排便で，介助を要しない．失敗なし．",
            },
          ],
        },
        {
          id: "toilet_use",
          title: "トイレの使用",

description:
"会陰部の清潔，使用前後での衣服の扱い，ナプキンまたはオムツの使用",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label: "部分介助を要する．自分でお尻を拭けない．",
            },
            {
              score: 2,
              label: "部分介助を要する．自立してお尻を拭ける．",
            },
            {
              score: 4,
              label:
                "自立してトイレを使用するも，補助器具または特別な環境（例：手すり）が整っている必要あり．",
            },
            {
              score: 5,
              label:
                "自立してトイレを使用．補助器具も特別な環境が整っている必要もない．",
            },
          ],
        },
      ],
    },

    {
      id: "mobility",
      title: "移動",
      maxScore: 40,
      items: [
        {
          id: "bed_mobility_and_pressure_relief",
          title: "ベッド上での姿勢変換と褥瘡予防動作",
          type: "select",
          options: [
            {
              score: 0,
              label:
                "ベッド上で上半身の向きを変えること，下半身の向きを変えること，起き上がること，および車いす上でのプッシュアップの全ての動作に介助が必要．補助器具の要否は問わないが，電動器具は用いない．",
            },
            {
              score: 2,
              label: "介助なくできる動作が1つある．",
            },
            {
              score: 4,
              label: "介助なくできる動作が2つまたは3つある．",
            },
            {
              score: 6,
              label:
                "ベッド上動作と除圧動作はすべて自立して行う．",
            },
          ],
        },
        {
          id: "transfer_bed_wheelchair",
          title: "移乗：ベッドー車椅子",
  description:
    "車椅子のブレーキ操作，フットレストの跳ね上げ，アームレストの脱着，乗り移り，足の持ち上げ",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "部分介助，監視，および補助器具（例：スライディングボード）のすべて，もしくはそのいずれかが必要．",
            },
            {
              score: 2,
              label: "自立（または車椅子を必要としない）．",
            },
          ],
        },
        {
          id: "transfer_wheelchair_toilet_bath",
          title: "移乗：車椅子ートイレ，浴槽",

description:
"トイレ用椅子を用いている場合は，それへの/からの乗り移り．通常の車椅子を使用している場合は車椅子のブレーキ操作，フットレストの跳ね上げ，アームレストの脱着，乗り移り，足の持ち上げ",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "部分介助，監視，および補助器具（例：手すり）のすべて，もしくはそのいずれかが必要．",
            },
            {
              score: 2,
              label: "自立（または車椅子を必要としない）．",
            },
          ],
        },
        {
          id: "mobility_indoors",
          title: "屋内の移動",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "電動車いすを必要とするか，または手動車椅子を操作するのに部分介助を要する．",
            },
            {
              score: 2,
              label: "手動車椅子で自立して移動する．",
            },
            {
              score: 3,
              label:
                "歩行時に監視を必要とする（器具の要否は問わない）．",
            },
            {
              score: 4,
              label: "歩行器または松葉杖で歩行（大振り，小振り歩行）．",
            },
            {
              score: 5,
              label: "松葉杖または T 字杖2本で歩行（交互歩行）．",
            },
            { score: 6, label: "T 字杖1本で歩行．" },
            { score: 7, label: "下肢装具のみを必要をする．" },
            { score: 8, label: "歩行補助具なしで歩行．" },
          ],
        },
        {
          id: "mobility_moderate_distance",
          title: "まとまった距離の移動（10～100 m）",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "電動車いすを必要とするか，または手動車椅子を操作するのに部分介助を要する．",
            },
            {
              score: 2,
              label: "手動車椅子で自立して移動する．",
            },
            {
              score: 3,
              label:
                "歩行時に監視を必要とする（器具の要否は問わない）．",
            },
            {
              score: 4,
              label: "歩行器または松葉杖で歩行（大振り，小振り歩行）．",
            },
            {
              score: 5,
              label: "松葉杖または T 字杖2本で歩行（交互歩行）．",
            },
            { score: 6, label: "T 字杖1本で歩行．" },
            { score: 7, label: "下肢装具のみを必要をする．" },
            { score: 8, label: "歩行補助具なしで歩行．" },
          ],
        },
        {
          id: "mobility_outdoors",
          title: "屋外の移動（100 m 以上）",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "電動車いすを必要とするか，または手動車椅子を操作するのに部分介助を要する．",
            },
            {
              score: 2,
              label: "手動車椅子で自立して移動する．",
            },
            {
              score: 3,
              label:
                "歩行時に監視を必要とする（器具の要否は問わない）．",
            },
            {
              score: 4,
              label: "歩行器または松葉杖で歩行（大振り，小振り歩行）．",
            },
            {
              score: 5,
              label: "松葉杖または T 字杖2本で歩行（交互歩行）．",
            },
            { score: 6, label: "T 字杖1本で歩行．" },
            { score: 7, label: "下肢装具のみを必要をする．" },
            { score: 8, label: "歩行補助具なしで歩行．" },
          ],
        },
        {
          id: "stairs",
          title: "階段昇降",
          type: "select",
          options: [
            { score: 0, label: "階段の上り下り不能．" },
            {
              score: 1,
              label:
                "人に支えられるか，またはその監視下で少なくとも3段は上り下りできる．",
            },
            {
              score: 2,
              label:
                "手すりにつかまったり，松葉杖や T 字杖を用いて少なくとも3段は上り下りできる．",
            },
            {
              score: 3,
              label:
                "支えも監視もなしで少なくとも3段は上り下りできる．",
            },
          ],
        },
        {
          id: "transfer_wheelchair_car",
          title: "移乗：車椅子ー車",

description:
"車への接近，車椅子ブレーキ操作，アームレスト・フットレスト取り外し，車への/からの乗り移り，車椅子の積み下ろし",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "部分介助，監視，および補助器具のすべて，もしくはそのいずれかを必要とする．",
            },
            {
              score: 2,
              label:
                "自立して移乗する．補助器具を必要としない（または車椅子を必要としない）．",
            },
          ],
        },
        {
          id: "transfer_floor_wheelchair",
          title: "移乗：床ー車椅子",
          type: "select",
          options: [
            { score: 0, label: "全介助を要する．" },
            {
              score: 1,
              label:
                "補助器具の有無に関わりなく，自立して移乗する（または車椅子を必要としない）．",
            },
          ],
        },
      ],
    },
  ],
};