import './blobs.css';
import './Download.css';
import Container from '../ui/Container.jsx';
import Badge from '../ui/Badge.jsx';
import { GooglePlayStoreBadgeIcon, AppleAppStoreBadgeIcon } from '../icons/StoreBadgesIcon.jsx';

export default function Download() {
  return (
    <section className="download" id="download">
      <div className="download__bg" aria-hidden>
        <div className="blob blob--d1" />
        <div className="blob blob--d2" />
      </div>
      <Container className="download__inner">
        <div className="download__text">
          <Badge tone="sectionLight">Download now</Badge>
          <h2>Ready to book your next beauty experience?</h2>
          <p>Join thousands of customers discovering top beauticians and spas with Favely.</p>
          <div className="download__badges">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge store-badge--play"
            >
              <GooglePlayStoreBadgeIcon />
              <div className="store-badge__text">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge store-badge--ios"
            >
              <AppleAppStoreBadgeIcon />
              <div className="store-badge__text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
          </div>
        </div>
        <div className="download__visual" aria-hidden>
          <div className="qr-box">
            <div className="qr-box__inner">
              <div className="qr-placeholder">
                <div className="qr-grid" />
                <span>Scan to Download</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
