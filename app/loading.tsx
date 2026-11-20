export default function Loading() {
  return (
    <main className="state-page" aria-busy="true" aria-live="polite">
      <section className="state-card">
        <p className="eyebrow">One moment</p>
        <h1>Finding something delicious...</h1>
        <div className="loading-skeleton" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="state-description">Your next bite is on its way.</p>
      </section>
    </main>
  );
}
