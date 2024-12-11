import {Link} from "react-router-dom";

const GetInTouchform = () => {
  return (
    <section className="footer__form">
      <div className="form__container">
          <h2 className="form__title">Let’s talk about your project</h2>
          <p className="form__description">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
          </p>
          <Link to={'/contact'} className="form__link">
              Get in touch
          </Link>

      </div>
    </section>
  );
};

export default GetInTouchform;
