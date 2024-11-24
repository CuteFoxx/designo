import CategoryCard from "../components/CategoryCard.tsx";
import CategoryTitle from "../components/CategoryTitle.tsx";
import ProjectCard from "../components/ProjectCard.tsx";

const GraphicDesign = () => {
    return (
        <div className={'category-page'}>
            <CategoryTitle title={'Graphic Design'}
                           description={"We deliver eye-catching branding materials that are tailored to meet your business objectives."}
                           image={{
                               src: "/images/graphic-design/graphicdesign-pattern.svg",
                               mobSrc: "/images/mob-pattern.svg",
                               alt: "background"
                           }}/>
            <div className="projects-wrapper">
                <ProjectCard title={'Tim Brown'} description={'A book cover designed for Tim Brown’s new release, ‘Change’'}
                             image={{src: "/images/graphic-design/TimBrown.jpg", alt: "TimBrown"}}/>
                <ProjectCard title={'BOXED WATER'}
                             description={'A simple packaging concept made for Boxed Water'}
                             image={{src: "/images/graphic-design/BoxedWater.jpg", alt: "BoxedWater"}}/>
                <ProjectCard title={'SCIENCE!'}
                             description={'A poster made in collaboration with the Federal Art Project'}
                             image={{src: "/images/graphic-design/SCIENCE!.jpg", alt: "Photon"}}/>
            </div>
            <div className="categories categories-inner">
                <CategoryCard link={'/web-design'} backgroundImage={"/images/web-design/webdesign.png"}/>
                <CategoryCard link={'/app-design'} title={"APP DESIGN"}
                              backgroundImage={"/images/app-design/appdesign.png"}/>
            </div>
        </div>
    );
};

export default GraphicDesign;