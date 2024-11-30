import '../styles/components/_contact-form.scss'
import FormInput from "./FormInput.tsx";

const ContactForm = () => {
    return (
        <div className={'contact-form'}>
            <div className="section">
                <h1 className={"contact-form__title"}>
                    Contact Us
                </h1>
                <p className={"contact-form__description"}>
                    Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                </p>
            </div>
            <form className="contact-form__form">
                <FormInput pattern="\w{3,16}" required={true} name={'name'} type={'name'} placeholder={'Name'} errorMessage={"Can’t be empty"}/>
                <FormInput required={true} name={'email'} type="email" placeholder={"Email Address"} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" errorMessage={"Can’t be empty"}/>
                <FormInput required={true} name={'phone'} type="phone"  placeholder={"Phone"} errorMessage={"Can’t be empty"}/>
                <textarea name="" id="" cols={30} rows={5} placeholder={"Your Message"}></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default ContactForm;