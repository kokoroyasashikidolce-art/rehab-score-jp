import { useState } from "react";

export default function SettingsPage({
  settings,
  onUpdateSettings,
  onClearCopyHistory,
  onClearRecentHistory,
  onClearFavorites,
  onClearSavedInputs,
}) {
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);

  return (
  <>
<section className="card">
  <h2>起動時設定</h2>

  <label className="setting-row">
    <span>
      <strong>起動時の画面</strong>
      <small>アプリ起動時に最初に開く画面です。</small>
    </span>


    <div className="segmented-control">

  <button
    className={
      settings.startupMode === "home"
        ? "segment active"
        : "segment"
    }
    onClick={() =>
      onUpdateSettings({
        startupMode: "home",
      })
    }
  >
    ホーム
  </button>

  <button
    className={
      settings.startupMode === "lastScale"
        ? "segment active"
        : "segment"
    }
    onClick={() =>
      onUpdateSettings({
        startupMode: "lastScale",
      })
    }
  >
    前回評価スコア
  </button>

</div>


  </label>
</section>

<section className="card">
  <h2>コピー設定</h2>

  <div className="setting-row">
    <span>
      <strong>選択項目をコピーに含める</strong>
      <small>
        合計点を出す評価スコアで、各項目の選択内容もコピーします。
      </small>
    </span>

    <div className="segmented-control">
      <button
        className={
          settings.includeSelectedItemsInCopy
            ? "segment active"
            : "segment"
        }
        onClick={() =>
          onUpdateSettings({
            includeSelectedItemsInCopy: true,
          })
        }
      >
        含む
      </button>

      <button
        className={
          !settings.includeSelectedItemsInCopy
            ? "segment active"
            : "segment"
        }
        onClick={() =>
          onUpdateSettings({
            includeSelectedItemsInCopy: false,
          })
        }
      >
        含まない
      </button>
    </div>
  </div>

  <p className="description">
    MASなど合計点を出さない評価では、この設定に関係なく選択項目をコピーします。
  </p>
</section>

<section className="card">
  <h2>履歴設定</h2>

  <label className="setting-row">
    <span>
      <strong>閲覧履歴の保存件数</strong>
      <small>最近開いた評価スコアの履歴です。</small>
    </span>

    <select
      value={settings.recentHistoryLimit}
      onChange={(e) =>
        onUpdateSettings({
          recentHistoryLimit: Number(e.target.value),
        })
      }
    >
      <option value={20}>20件</option>
      <option value={50}>50件</option>
      <option value={100}>100件</option>
    </select>
  </label>

  <label className="setting-row">
    <span>
      <strong>コピー履歴の保存件数</strong>
      <small>結果コピーの履歴です。</small>
    </span>

    <select
      value={settings.copyHistoryLimit}
      onChange={(e) =>
        onUpdateSettings({
          copyHistoryLimit: Number(e.target.value),
        })
      }
    >
      <option value={50}>50件</option>
      <option value={100}>100件</option>
      <option value={200}>200件</option>
    </select>
  </label>
</section>

<section className="card">
  <h2>データ削除</h2>

  <p className="description">
    この端末に保存されている履歴や入力内容を削除できます。
  </p>

  <p className="description danger-text">
    削除したデータは元に戻せません。
    必要な結果は事前にコピーして保存してください。
  </p>

  {!showDeleteButtons && (
    <button
      className="danger-toggle-button"
      onClick={() => setShowDeleteButtons(true)}
    >
      削除ボタンを表示する
    </button>
  )}

  {showDeleteButtons && (
  <>
    <button
      className="danger-toggle-button"
      onClick={() =>
        setShowDeleteButtons(false)
      }
    >
      削除ボタンを隠す
    </button>

    <div className="settings-list">
      <button
        className="danger-button"
        onClick={onClearCopyHistory}
      >
        コピー履歴を削除
      </button>

      <button
        className="danger-button"
        onClick={onClearRecentHistory}
      >
        閲覧履歴を削除
      </button>

      <button
        className="danger-button"
        onClick={onClearFavorites}
      >
        お気に入りを削除
      </button>

      <button
        className="danger-button"
        onClick={onClearSavedInputs}
      >
        保存済み入力を削除
      </button>
     </div>
  </>
)}
</section>
    </>
  );
}