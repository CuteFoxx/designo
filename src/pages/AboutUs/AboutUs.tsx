import ImageTitleDescription from "../../components/ImageTitleDescription/ImageTitleDescription.tsx";
import ImgTitleLink from "../../components/ImgTitleLink/ImgTitleLink.tsx";

const AboutUs = () => {
    return (
        <div className={"about-us-page"}>
           <ImageTitleDescription className={'abouts-us-intro'} title={"About Us"} description={"Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."} image={{src:"/images/About-us-intro.png"}} />


            <ImageTitleDescription className={'abouts-us-section1'} title={"World-class talent"} description={"We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."} image={{src:"/images/About-us-section1.png"}} />


            <div className="locations-wrapper">
                <ImgTitleLink img={{src: "/images/locations/location1.svg", alt: "CANADA"}} title={"CANADA"} link={{src: "/locations#Canada",text: "SEE LOCATION"}}/>
                <ImgTitleLink img={{src: "/images/locations/location2.svg"}} title={"AUSTRALIA"} link={{src: "/locations#Australia",text: "SEE LOCATION"}}/>
                <ImgTitleLink img={{src: "/images/locations/location3.svg"}} title={"UNITED KINGDOM"} link={{src: "/locations#UnitedKingdom",text: "SEE LOCATION"}}/>
            </div>

            <ImageTitleDescription className={'abouts-us-section2'} title={"The real deal"} description={"As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.  We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."} image={{src:"/images/About-us-section2.png"}} />
        </div>

    );
};

export default AboutUs;