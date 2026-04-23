import { useEffect, useState } from 'react';
import Button from '../ui/Button.jsx';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={['nav', scrolled ? 'scrolled' : ''].filter(Boolean).join(' ')} id="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__logo">
          <span className="logo-icon" aria-hidden />
          <span>Favely</span>
        </a>
        <Button as="a" href="#download" variant="nav">
          Get the App
        </Button>
      </div>
    </nav>
  );
}
