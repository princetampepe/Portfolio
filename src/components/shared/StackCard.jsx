export default function StackCard({ children, itemClassName = '' }) {
  return <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>;
}
