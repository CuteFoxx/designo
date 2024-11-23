import '../styles/components/_intro.scss'

const Intro = () => {
    return (
        <section className="intro">
            <div className="intro__section">
                <h1 className="intro__title">
                    Award-winning custom designs and digital branding solutions
                </h1>
                <p className="intro__body">
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
                </p>
                <a href="#" className="intro__link">
                    Learn More
                </a>
            </div>
            <div className="intro__img-wrapper">
                <img src="images/intro.png" alt="intro" className="intro__img"/>
            </div>
        </section>
    );
};

export default Intro;