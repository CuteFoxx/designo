import '../../styles/pages/_category-inner.scss'

import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle.tsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";


const AppDesign = () => {
    return (
        <div className={'category-page'}>
            <CategoryTitle title={'App Design'}
                           description={"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."}
                           image={{
                               src: "/images/app-design/appdesign-pattern.svg",
                               mobSrc: "/images/mob-pattern.svg",
                               alt: "background"
                           }}/>
            <div className="projects-wrapper">
                <ProjectCard title={'AIRFILTER'} description={'Solving the problem of poor indoor air quality by filtering the air'}
                             image={{src: "/images/app-design/Airfilter.png", alt: "Airfilter"}} bgColor={'#2E3947'}/>
                <ProjectCard title={'EYECAM'} description={'Product that lets you edit your favorite photos and videos at any time'}
                             image={{src: "/images/app-design/Eyecam.png", alt: "Eyecam"}} bgColor={'#34B7A2'}/>
                <ProjectCard title={'FACEIT'} description={'Get to meet your favorite internet superstar with the faceit app'}
                             image={{src: "/images/app-design/Faceit.png", alt: "FACEIT"}} bgColor={'#3F2F83'}/>
                <ProjectCard title={'TODO'} description={'A todo app that features cloud sync with light and dark mode'}
                             image={{src: "/images/app-design/Todo.png", alt: "Todo"}} bgColor={'#40125A'}/>
                <ProjectCard title={'LOOPSTUDIOS'} description={'A VR experience app made for Loopstudios'}
                             image={{src: "/images/app-design/Loopstudios.png", alt: "Loopstudios"}} bgColor={'#853A4D'}/>
            </div>
            <div className="categories categories-inner">
                <CategoryCard link={'/web-design'} backgroundImage={"/images/web-design/webdesign.png"}/>
                <CategoryCard link={'/graphic-design'} title={"GRAPHIC DESIGN"}
                              backgroundImage={"/images/graphic-design/graphicdesign.png"}/>
            </div>
        </div>
    );
};

export default AppDesign;