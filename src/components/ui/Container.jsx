export default function Container({
  as: Component = 'div',
  className = '',
  children,
  ...rest
}) {
  const merged = ['mx-auto w-full max-w-[1200px] px-6', className].filter(Boolean).join(' ');
  return (
    <Component className={merged} {...rest}>
      {children}
    </Component>
  );
}
