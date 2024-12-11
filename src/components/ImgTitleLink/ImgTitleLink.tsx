import './image-title-link.scss'
import {Link} from "react-router-dom";

type ImgTitleLinkProps = {
    img: {
        src: string;
        alt?: string;
    },
    title: string;
    link: {
        text: string;
        src: string;
    }
};

const ImgTitleLink = ({img, title, link}: ImgTitleLinkProps) => {
    return (
        <div className={'img-title-card'}>
            <img className={'img-title-card__image'} src={img.src} alt={img.alt && img.alt}/>
            <h2 className={'img-title-card__title'}>{title}</h2>
            <Link className={'img-title-card__link'} to={link.src}>{link.text}</Link>
        </div>
    );
};

export default ImgTitleLink;