import './StepCard.css';

export default function StepCard({ number, icon, title, children }) {
  return (
    <div className="step">
      <div className="step__num">{number}</div>
      <div className="step__icon" aria-hidden>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
