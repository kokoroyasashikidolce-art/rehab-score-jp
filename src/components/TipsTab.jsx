export default function TipsTab({ scale }) {
  return (
    <section className="card">
      <h2>豆知識</h2>

      <p className="tips-content">
        {scale.tabs?.tips}
      </p>
    </section>
  );
}