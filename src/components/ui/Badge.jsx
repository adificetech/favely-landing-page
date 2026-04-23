import './Badge.css';

export default function Badge({ tone = 'hero', className = '', children, ...rest }) {
  const toneClass =
    tone === 'section'
      ? 'section-tag'
      : tone === 'sectionLight'
        ? 'section-tag section-tag--light'
        : 'hero__badge';
  return (
    <div className={[toneClass, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
