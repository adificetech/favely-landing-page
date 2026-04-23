import { MapPin, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import './blobs.css';
import './Hero.css';
import Button from '../ui/Button.jsx';
import Container from '../ui/Container.jsx';
import Badge from '../ui/Badge.jsx';
import {
  GooglePlayStoreBadgeIcon,
  AppleAppStoreBadgeIcon,
} from '../icons/StoreBadgesIcon.jsx';
import phoneImage from '../../public/favely.png';

const trustItems = [
  { label: 'Search', sub: 'Any spa, anywhere' },
  { label: 'Book', sub: 'Real-time availability' },
  { label: 'Pay', sub: 'Cash, card, or app' },
];

function SpaStarRow({ filled, rating }) {
  return (
    <div className="spa-card__stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={i < filled ? 'spa-card__star' : 'spa-card__star spa-card__star--empty'}
          size={10}
          fill={i < filled ? 'currentColor' : 'none'}
          strokeWidth={2}
          aria-hidden
        />
      ))}
      <span className="spa-card__rating-num">{rating}</span>
    </div>
  );
}

function getPreferredStore() {
  if (typeof navigator === 'undefined') {
    return 'google';
  }

  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    return 'apple';
  }

  if (/Android/.test(ua)) {
    return 'google';
  }

  return 'google';
}

export default function Hero() {
  const [storeType, setStoreType] = useState('google');

  useEffect(() => {
    setStoreType(getPreferredStore());
  }, []);

  const isApple = storeType === 'apple';
  const storeButtonLabel = isApple ? 'Download on App Store' : 'Download on Play Store';
  const storeBadgeLabel = isApple ? 'Now available on iOS' : 'Now available on Android';
  const StoreIcon = isApple ? AppleAppStoreBadgeIcon : GooglePlayStoreBadgeIcon;

  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden>
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="blob blob--3" />
      </div>
      <div className="hero__inner">
        <Container className="hero__content">
          <Badge>{storeBadgeLabel}</Badge>
          <h1 className="hero__headline">
            Book Beauty.
            <br />
            <span className="gradient-text">Your Way.</span>
          </h1>
          <p className="hero__sub">
            Discover top-rated spas and beauticians near you, check real availability, and book
            appointments in seconds - all from one app.
          </p>
          <div className="hero__cta">
            <Button as="a" href="#download" variant="primary" size="large">
              <StoreIcon />
              {storeButtonLabel}
            </Button>
            <Button as="a" href="#features" variant="ghost" size="large">
              Learn More
            </Button>
          </div>
          <div className="hero__trust">
            {trustItems.flatMap((t, i) => {
              const el = (
                <div key={t.label} className="trust-item">
                  <strong>{t.label}</strong>
                  <span>{t.sub}</span>
                </div>
              );
              if (i < trustItems.length - 1) {
                return [el, <div key={`trust-divider-${i}`} className="trust-divider" aria-hidden />];
              }
              return [el];
            })}
          </div>
        </Container>
        <div className="hero__mockup" aria-hidden>
          <img src={phoneImage} alt="Mobile app mockup" className="phone" />
        </div>
      </div>
    </section>
  );
}
