import Container from '../ui/Container.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__logo">
          <span className="logo-icon" aria-hidden />
          <span>Favely</span>
        </div>
        <p className="footer__copy">© 2026 Favely. All rights reserved.</p>
        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </Container>
    </footer>
  );
}
