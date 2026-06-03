import { highlights } from '../data/portfolioData';

export default function Highlights() {
  return (
    <section className="highlights-grid">
      {highlights.map((item) => (
        <article className="glass-panel info-card" key={item.title}>
          <p className="eyebrow">Overview</p>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}
