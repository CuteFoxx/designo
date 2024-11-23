import CategoryCard from "../components/CategoryCard.tsx";
import CategoryTitle from "../components/CategoryTitle.tsx";
import ProjectCard from "../components/ProjectCard.tsx";

const WebDesign = () => {
    return (
        <div className={'category-page'}>
            <CategoryTitle title={'Web Design'}
                           description={"We build websites that serve as powerful marketing tools and bring memorable brand experiences."}
                           image={{
                               src: "/images/web-design/webdesign-pattern.svg",
                               mobSrc: "/images/mob-pattern.svg",
                               alt: "background"
                           }}/>
            <div className="projects-wrapper">
                <ProjectCard title={'EXPRESS'} description={'A multi-carrier shipping website for ecommerce businesses'}
                             image={{src: "/images/web-design/Express.jpg", alt: "Express"}}/>
                <ProjectCard title={'TRANSFER'} description={'Site for low-cost money transfers and sending money within seconds'}
                             image={{src: "/images/web-design/Transfer.jpg", alt: "Transfer"}}/>
                <ProjectCard title={'PHOTON'} description={'A state-of-the-art music player with high-resolution audio and DSP effects'}
                             image={{src: "/images/web-design/Photon.jpg", alt: "Photon"}}/>
                <ProjectCard title={'BUILDER'} description={'Connects users with local contractors based on their location'}
                             image={{src: "/images/web-design/Builder.jpg", alt: "Builder"}}/>
                <ProjectCard title={'BLOGR'} description={'Blogr is a platform for creating an online blog or publication'}
                             image={{src: "/images/web-design/Blogr.jpg", alt: "Blogr"}}/>
                <ProjectCard title={'CAMP'} description={'Get expert training in coding, data, design, and digital marketing'}
                             image={{src: "/images/web-design/Camp.jpg", alt: "Camp"}}/>
            </div>
            <div className="categories categories-inner">
                <CategoryCard link={'/app-design'} title={"APP DESIGN"}
                              backgroundImage={"/images/app-design/appdesign.png"}/>
                <CategoryCard link={'/graphic-design'} title={"GRAPHIC DESIGN"}
                              backgroundImage={"/images/graphic-design/graphicdesign.png"}/>
            </div>
        </div>
    );
};

export default WebDesign;