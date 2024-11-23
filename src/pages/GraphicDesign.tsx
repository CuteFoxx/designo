import CategoryCard from "../components/CategoryCard.tsx";
import CategoryTitle from "../components/CategoryTitle.tsx";

const GraphicDesign = () => {
    return (
        <div className={'category-page'}>
            <CategoryTitle title={'Graphic Design'} description={"We deliver eye-catching branding materials that are tailored to meet your business objectives."} image={{src: "/images/graphic-design/graphicdesign-pattern.svg",mobSrc: "/images/mob-pattern.svg", alt: "background"}}/>
            <div className="categories categories-inner">
                <CategoryCard link={'/web-design'} backgroundImage={"/images/web-design/webdesign.png"}/>
                <CategoryCard link={'/app-design'} title={"APP DESIGN"} backgroundImage={"/images/app-design/appdesign.png"}/>
            </div>
        </div>
    );
};

export default GraphicDesign;