import { Link } from "react-router-dom";

const Logo = ({
  logoSrc,
  className,
}: {
  logoSrc: string;
  className?: string;
}) => {
  return (
    <Link to="/" className={"logo " + className}>
      <img src={"images/" + logoSrc} alt="logo" />
    </Link>
  );
};

export default Logo;
