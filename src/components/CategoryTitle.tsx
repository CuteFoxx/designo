import '../styles/components/_category-title.scss'

type CategoryTitleProps = {
    title: string,
    description: string,
    image: {
        src: string,
        mobSrc: string,
        alt?: string,
    }
}

const CategoryTitle = ({title, description, image} : CategoryTitleProps) => {
    return (
        <div className={"category-title"}>
            <h1 className={"category-title__title"}>{title}</h1>
            <p className={"category-title__description"}>{description}</p>
            <picture className={'category-title__background'}>
                <source srcSet={`${image.mobSrc}`} media="(max-width: 48em)"/>
                <img src={`${image.src}`} alt={image.alt ? image.alt : ''} />
            </picture>
        </div>
    );
};

export default CategoryTitle;