export default function SettingsPage({
  settings,
  onUpdateSettings,
  onClearCopyHistory,
  onClearRecentHistory,
  onClearFavorites,
  onClearSavedInputs,
}) {
  return (
  <>
<section className="card">
  <h2>起動時設定</h2>

  <label className="setting-row">
    <span>
      <strong>起動時の画面</strong>
      <small>アプリ起動時に最初に開く画面です。</small>
    </span>

    <select
      value={settings.startupMode}
      onChange={(e) =>
        onUpdateSettings({
          startupMode: e.target.value,
        })
      }
    >
      <option value="home">ホーム</option>
      <option value="lastScale">前回開いていた評価スコア</option>
    </select>
  </label>
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
        <h2>データ管理</h2>

        <p className="description">
          この端末に保存されている履歴や入力内容を削除できます。
        </p>

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
      </section>

      <section className="card">
        <h2>補足</h2>

        <p className="description">
          削除したデータは元に戻せません。必要な結果は事前にコピーして保存してください。
        </p>
      </section>
    </>
  );
}