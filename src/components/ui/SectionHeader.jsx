import Badge from './Badge.jsx';
import './SectionHeader.css';

export default function SectionHeader({ tag, title, sub, tagLight }) {
  return (
    <div className="section-header">
      {tag && (
        <Badge tone={tagLight ? 'sectionLight' : 'section'}>{tag}</Badge>
      )}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
