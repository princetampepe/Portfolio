import './GlassIcons.css';

const colorMapping = {
  blue: '#0F3460',
  purple: '#16213E',
  red: '#E94560',
  indigo: '#1A1A2E',
  orange: '#E94560',
  green: '#0F3460',
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = (color) => {
    if (colorMapping[color]) {
      return { background: colorMapping[color] };
    }

    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`.trim()}>
      {items.map((item, index) => (
        <button key={index} className={`icon-btn ${item.customClass || ''}`.trim()} aria-label={item.label} type="button">
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)} />
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
