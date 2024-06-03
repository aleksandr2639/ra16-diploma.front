import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="col text-right">
      <section className="footer-contacts">
        <h5>Контакты:</h5>
        <Link className="footer-contacts-phone" to="tel:+7-495-790-35-03">
          +7 495 79 03 5 03
        </Link>
        <span className="footer-contacts-working-hours">
          Ежедневно: с 09-00 до 21-00
        </span>
        <Link className="footer-contacts-email" to="mailto:office@bosanoga.ru">
          office@bosanoga.ru
        </Link>
        <div className="footer-social-links">
          <div className="footer-social-link footer-social-link-twitter"></div>
          <div className="footer-social-link footer-social-link-vk"></div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
