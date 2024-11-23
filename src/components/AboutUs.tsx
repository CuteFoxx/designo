import '../styles/components/_about-us.scss'

type AboutUsProps = {
    image: {
        src: string;
        alt?: string;
    }
    title: string;
    description: string;
};

const AboutUs = ({image, title, description}: AboutUsProps) => {
    return (
        <section className={"about-us__card"}>
            <img className={"about-us__image"} src={`${image.src}`} alt={image.alt ? image.alt: ''}/>
            <h2 className={"about-us__title"}>{title}</h2>
            <div className={"about-us__description"}>{description}</div>
        </section>
    );
};

export default AboutUs;