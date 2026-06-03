export default function SectionLoader({ label = 'Loading section' }) {
  return (
    <div className="section-loader" role="status" aria-label={label}>
      <span />
    </div>
  );
}
