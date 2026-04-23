import { Search, BookOpen, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';
import './HowItWorks.css';
import Container from '../ui/Container.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import StepCard from '../ui/StepCard.jsx';

const stepIc = { size: 32, strokeWidth: 1.6, 'aria-hidden': true };

const steps = [
  {
    id: '1',
    number: '01',
    icon: <Search {...stepIc} />,
    title: 'Search',
    text: 'Enter your location or zip code to discover spas and beauticians near you.',
  },
  {
    id: '2',
    number: '02',
    icon: <BookOpen {...stepIc} />,
    title: 'Choose',
    text: "Browse profiles, read reviews, and pick the beautician that's right for you.",
  },
  {
    id: '3',
    number: '03',
    icon: <CheckCircle {...stepIc} />,
    title: 'Book',
    text: 'Select a date, pick an open slot, and confirm your appointment instantly.',
  },
  {
    id: '4',
    number: '04',
    icon: <Sparkles {...stepIc} />,
    title: 'Enjoy',
    text: 'Show up and get pampered. Pay however you like and leave a review.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <Container>
        <SectionHeader tag="Simple steps" title="Book in under a minute" />
        <div className="steps">
          {steps.flatMap((s, i) => {
            const node = (
              <StepCard key={s.id} number={s.number} icon={s.icon} title={s.title}>
                {s.text}
              </StepCard>
            );
            if (i < steps.length - 1) {
              return [
                node,
                <div key={`step-arrow-${s.id}`} className="step__arrow" aria-hidden>
                  <ChevronRight size={24} strokeWidth={2} />
                </div>,
              ];
            }
            return [node];
          })}
        </div>
      </Container>
    </section>
  );
}
