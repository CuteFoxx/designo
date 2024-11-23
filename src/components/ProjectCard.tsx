import '../styles/components/_project-card.scss'

type ProjectCardProps = {
    title: string,
    description: string,
    image: {
        src: string,
        alt?: string,
    }
    bgColor?: React.CSSProperties['backgroundColor'],
};

const ProjectCard = ({title, description, image, bgColor}: ProjectCardProps) => {
    return (
        <div className={"project-card"}>
            <div className="project-card__image-wrapper" style={{background: bgColor ? `${bgColor}` : ''}}>
                <img className={'project-card__image'} src={`${image.src}`} alt={image.alt ? image.alt : ''}/>
            </div>
            <div className="project-card__info">
                <h3 className={"project-card__title"}>{title}</h3>
                <p className={"project-card__description"}>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;