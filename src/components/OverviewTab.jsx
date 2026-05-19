export default function OverviewTab({ scale }) {
  return (
    <section className="card">
      <h2>概要</h2>

      <p className="overview-content">
        {scale.tabs?.overview ??
          "概要は未登録です。"}
      </p>

      {scale.tags &&
        scale.tags.length > 0 && (
          <>
            <p>
              <strong>タグ</strong>
            </p>

            <div className="tag-list">
              {scale.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag-chip"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
    </section>
  );
}