import '../styles/pages/_home.scss'

import Intro from "../components/Intro.tsx";
import CategoryCard from "../components/CategoryCard.tsx";

const Home = () => {
  return <div className="home-page">
    <Intro/>
    <div className="categories categories-home">
      <CategoryCard  backgroundImage={"/images/webdesign.png"}/>
      <CategoryCard  backgroundImage={"/images/webdesign.png"}/>
      <CategoryCard  backgroundImage={"/images/webdesign.png"}/>
    </div>
  </div>;
};

export default Home;
