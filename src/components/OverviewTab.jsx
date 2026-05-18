export default function OverviewTab({ scale }) {
  return (
    <section className="card">
      <h2>概要</h2>

      <p className="overview-content">
        {scale.tabs?.overview}
      </p>
    </section>
  );
}
