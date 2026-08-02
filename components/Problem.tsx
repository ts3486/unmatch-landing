const bullets = [
  "Compulsive checking — especially late at night",
  "Spending on boosts and premium features you regret",
  "Feeling worse after using the app, not better",
];

export function Problem() {
  return (
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-text sm:text-3xl">
          Dating apps are built to keep you swiping.
        </h2>
        <p className="mt-4 text-muted">
          The notifications, the streaks, the boosts — they&apos;re not accidents.
        </p>
        <ul className="mt-8 space-y-3 text-left">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-xl border border-border bg-bg px-5 py-4 text-text"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
