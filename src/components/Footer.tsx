import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <Logo className="footer__logo" logoSrc="logo-white.png" />
          <nav className="footer__nav ">
            <NavLinks />
          </nav>
        </div>
        <div className="footer__section">
          <div className="footer__block contacts">
            <span>Designo Central Office</span>
            <a
              href="https://maps.app.goo.gl/C5fgRm9Qw1CVtM5R9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </a>
          </div>
          <div className="footer__block">
            <span>Contact Us (Central Office)</span>
            <div>
              P : <a href="tel:+1 253-863-8967">+1 253-863-8967</a>
            </div>
            <div>
              M : <a href="mailto:contact@designo.co">contact@designo.co</a>{" "}
            </div>
          </div>

          <div className="footer__socials">
            <a
              className="footer__social"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/icons/facebook.svg" alt="facebook" />
            </a>
            <a
              className="footer__social"
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/icons/youtube.svg" alt="youtube" />
            </a>
            <a
              className="footer__social"
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/icons/twitter.svg" alt="twitter" />
            </a>
            <a
              className="footer__social"
              href="https://pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/icons/pinterest.svg" alt="pinterest" />
            </a>
            <a
              className="footer__social"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/icons/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
