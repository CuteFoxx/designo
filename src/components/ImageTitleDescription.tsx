import "../styles/components/_image-title-description.scss"

type ImageTitleDescriptionProps = {
    title: string;
    description: string;
    image: {
        src: string;
        alt?: string;
    };
    className?: string;
};

const ImageTitleDescription = ({title, description, image, className="section"}: ImageTitleDescriptionProps) => {
    return (
        <section className={className + " image-title-description"}>
            <div className={className + "__wrapper" + " image-title-description__wrapper"}>
                <h2 className={className + "__title" + " image-title-description__title"}>
                    {title}
                </h2>
                <p className={className + "__description" + " image-title-description__description"}>{description}</p>
            </div>
            <img className={className + "__image" + " image-title-description__image"} src={image.src}
                 alt={image.alt ? image.alt : ''}/>
        </section>
    );
};

export default ImageTitleDescription;