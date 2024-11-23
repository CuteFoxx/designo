import '../styles/pages/_category-inner.scss'

import CategoryCard from "../components/CategoryCard.tsx";
import CategoryTitle from "../components/CategoryTitle.tsx";


const AppDesign = () => {
    return (
        <div className={'category-page'}>
            <CategoryTitle title={'App Design'} description={"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."} image={{src: "/images/app-design/appdesign-pattern.svg",mobSrc: "/images/mob-pattern.svg", alt: "background"}}/>
            <div className="categories categories-inner">
                <CategoryCard link={'/web-design'} backgroundImage={"/images/web-design/webdesign.png"}/>
                <CategoryCard link={'/graphic-design'} title={"GRAPHIC DESIGN"}
                              backgroundImage={"/images/graphic-design/graphicdesign.png"}/>
            </div>
        </div>
    );
};

export default AppDesign;