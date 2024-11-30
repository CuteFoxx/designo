import ImgTitleLink from "../components/ImgTitleLink.tsx";
import ContactForm from "../components/ContactForm.tsx";

const Contact = () => {
    return (
        <div className={"inner-page"}>
            <ContactForm/>
            <div className="locations-wrapper">
                <ImgTitleLink img={{src: "/images/locations/location1.svg", alt: "CANADA"}} title={"CANADA"} link={{src: "/locations#Canada",text: "SEE LOCATION"}}/>
                <ImgTitleLink img={{src: "/images/locations/location2.svg"}} title={"AUSTRALIA"} link={{src: "/locations#Australia",text: "SEE LOCATION"}}/>
                <ImgTitleLink img={{src: "/images/locations/location3.svg"}} title={"UNITED KINGDOM"} link={{src: "/locations#UnitedKingdom",text: "SEE LOCATION"}}/>
            </div>
        </div>
    );
};

export default Contact;