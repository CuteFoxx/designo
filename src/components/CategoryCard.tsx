import '../styles/components/_category-card.scss'

type propsTypes = {
    title?: string;
    description?: string;
    backgroundImage: string;
}

const CategoryCard = ({title = 'WEB DESIGN', description ="VIEW PROJECTS",backgroundImage} : propsTypes) => {
    return (
        <section className={"category-card"}>
            <h2 className={"category-card__title"}>{title}</h2>
            <div className={"category-card__description"}>
                <span>{description}</span>
                <img src="/images/icons/arr-right.svg" alt="arrow-right"/>
            </div>
            <img src={backgroundImage} alt="backgroundImage" className={"category-card__background"} />
        </section>
    );
};

export default CategoryCard;