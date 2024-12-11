import './category-card.scss'
import {Link} from "react-router-dom";

type propsTypes = {
    title?: string;
    description?: string;
    backgroundImage: string;
    link?: string;
}

const CategoryCard = ({title = 'WEB DESIGN', description ="VIEW PROJECTS",backgroundImage, link ="#"} : propsTypes) => {
    return (
        <section className={"category-card"}>
            <Link to={link} className={"category-card__link"}>
                <h2 className={"category-card__title"}>{title}</h2>
                <div className={"category-card__description"}>
                    <span>{description}</span>
                    <img src="/images/icons/arr-right.svg" alt="arrow-right"/>
                </div>
                <img src={backgroundImage} alt="backgroundImage" className={"category-card__background"}/>
            </Link>
        </section>
    );
};

export default CategoryCard;