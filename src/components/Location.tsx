import Map from "./Map.tsx";
import "../styles/components/_location.scss"

type LocationProps = {
    x: number;
    y: number;
    title: string;
    address: {
        title: string;
        address: string;
        addressSrc: string;
    }
    email: string;
    phone: {
        phone: string;
        phoneSrc: string;
    }
    id?: string;
}

const Location = ({x,y, title,address,email,phone, id} : LocationProps) => {
    return (
        <section className="location" id={id && id}>
            <div className="location__wrapper">
                <h2 className="location__title">
                    {title}
                </h2>
                <p className="location__address">
                    <strong>{address.title}</strong>
                    <a target={"_blank"} href={`${address.addressSrc}`}>
                        {address.address}
                    </a>
                </p>
                <p className="location__contacts">
                    <strong>Contact </strong>
                    <a href={`${phone.phoneSrc}`}>P : {phone.phone}</a>
                    <a href={`${email}`}>M : {email}</a>
                </p>
            </div>
            <Map x={x} y={y}/>
        </section>
    );
};

export default Location;