import './Button.css';

const variantClass = {
  primary: 'btn--primary',
  ghost: 'btn--ghost',
  white: 'btn--white',
  nav: 'btn--nav',
};

const sizeClass = {
  large: 'btn--large',
  sm: 'btn--sm',
  default: '',
};

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'default',
  className = '',
  type,
  children,
  ...rest
}) {
  const isButton = Component === 'button';
  const v = variantClass[variant] ?? variantClass.primary;
  const s = sizeClass[size] ?? '';
  const merged = ['btn', v, s, className].filter(Boolean).join(' ');
  return (
    <Component
      className={merged}
      {...(isButton && type === undefined ? { type: 'button' } : { type })}
      {...rest}
    >
      {children}
    </Component>
  );
}
