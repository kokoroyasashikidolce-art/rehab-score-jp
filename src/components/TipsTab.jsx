export default function TipsTab({ scale }) {
  return (
    <section className="card">
      <h2>豆知識</h2>

      <p className="tips-content">
        {scale.tabs?.tips ??
          "豆知識は未登録です。"}
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