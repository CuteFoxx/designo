import './home.scss'

import Intro from "../../components/Intro/Intro.tsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";
import AboutUs from "../../components/AboutUs/AboutUs.tsx";

const Home = () => {
  return <div className="home-page">
    <Intro/>
    <div className="categories categories-home">
      <CategoryCard link={'/web-design'}  backgroundImage={"/images/web-design/webdesign.png"}/>
      <CategoryCard link={'/app-design'} title={"APP DESIGN"} backgroundImage={"/images/app-design/appdesign.png"}/>
      <CategoryCard link={'/graphic-design'} title={"GRAPHIC DESIGN"}  backgroundImage={"/images/graphic-design/graphicdesign.png"}/>
    </div>
    <div className="about-us__wrapper">
      <AboutUs image={{src: "/images/about-us1.svg", alt: "PASSIONATE"}} title={"PASSIONATE"} description={"Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."}/>
      <AboutUs image={{src: "/images/about-us2.svg", alt: "RESOURCEFUL"}} title={"RESOURCEFUL"} description={"Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."}/>
      <AboutUs image={{src: "/images/about-us3.svg", alt: "FRIENDLY"}} title={"FRIENDLY"} description={"We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."}/>
    </div>
  </div>;
};

export default Home;
