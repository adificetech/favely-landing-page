import './FeatureCard.css';

export default function FeatureCard({
  icon,
  iconVariant = 'purple',
  title,
  children,
  wide = false,
  /** Two cards share one row at 50% / 50% (e.g. Payments + Reviews) */
  full = false,
  pair = false,
  dark = false,
  pills = null,
  footer = null,
}) {
  return (
    <div
      className={[
        'feature-card',
        wide && 'feature-card--wide',
        pair && 'feature-card--pair',
        dark && 'feature-card--dark',
        full && 'feature-card--full',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={['feature-card__icon', `feature-card__icon--${iconVariant}`]
          .filter(Boolean)
          .join(' ')}
        aria-hidden
      >
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      {pills?.length > 0 && (
        <div className="feature-card__pills">
          {pills.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      )}
      {footer}
    </div>
  );
}
