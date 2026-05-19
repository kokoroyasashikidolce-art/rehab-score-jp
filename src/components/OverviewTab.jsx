export default function OverviewTab({ scale }) {
  return (
    <section className="card">
      <h2>概要</h2>

      <p className="overview-content">
        {scale.tabs?.overview}
      </p>

      {scale.tags?.length > 0 && (
        <div className="tag-list">
          <strong>タグ：</strong>

          {scale.tags.map((tag) => (
            <span
              key={tag}
              className="tag-chip"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}