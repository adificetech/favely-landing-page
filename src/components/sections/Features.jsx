import {
  Search,
  Calendar,
  CreditCard,
  Star,
  Scissors,
} from 'lucide-react';
import './Features.css';
import Container from '../ui/Container.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import FeatureCard from '../ui/FeatureCard.jsx';
import Button from '../ui/Button.jsx';

const ic = { strokeWidth: 1.75, 'aria-hidden': true };

const features = [
  {
    key: 'search',
    icon: <Search size={26} {...ic} />,
    iconVariant: 'purple',
    title: 'Search Any Spa, Anywhere',
    description:
      'Find spas by zip code, address, or location using our Google Maps integration - even spas not yet on the platform show up in results.',
    wide: true,
    pills: ['Google Maps', 'Geolocation', 'Reviews & Ratings'],
  },
  {
    key: 'booking',
    icon: <Calendar size={26} {...ic} />,
    iconVariant: 'pink',
    title: 'Real-Time Booking',
    description: "See each beautician's live availability and book instantly. No back-and-forth calls.",
  },
  {
    key: 'pay',
    icon: <CreditCard size={26} {...ic} />,
    iconVariant: 'rose',
    title: 'Flexible Payments',
    description:
      'Pay via the app, cash at the spa, or directly to your beautician - your choice, always secure.',
    pair: true,
  },
  {
    key: 'reviews',
    icon: <Star size={26} {...ic} />,
    iconVariant: 'violet',
    title: 'Verified Reviews',
    description: 'See ratings from both Favely users and Google Maps so you always know what to expect.',
    pair: true,
  },
  {
    key: 'beauticians',
    icon: <Scissors size={26} {...ic} />,
    iconVariant: 'light',
    title: 'For Beauticians Too',
    description:
      'Manage your schedule with Google Calendar sync, accept or decline appointments, track earnings and tips, and keep your client relationships - even if you change spas.',
    full: true,
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <Container>
        <SectionHeader
          tag="Everything you need"
          title="A smarter way to experience beauty"
          sub="From discovery to booking to payment, Favely handles every step."
        />
        <div className="features__grid">
          {features.map((f) => (
            <FeatureCard
              key={f.key}
              icon={f.icon}
              iconVariant={f.iconVariant}
              title={f.title}
              wide={f.wide}
              pair={f.pair}
              dark={f.dark}
              full={f.full}
              pills={f.pills}
              footer={
                f.key === 'beauticians' ? (
                  <Button as="a" href="#download" variant="white" size="sm" className="mt-4">
                    Join as a Beautician →
                  </Button>
                ) : null
              }
            >
              {f.description}
            </FeatureCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
