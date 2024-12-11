import { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo.tsx";
import NavLinks from "../NavLinks/NavLinks.tsx";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnrRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    function handleClick(e: MouseEvent) {
      const element = e.target as HTMLElement;
      if (!element) return;

      if (!menuRef.current?.contains(element) || element.tagName === "A") {
        setIsActive(false);
      }

      // handle hamburger menu click
      if (btnrRef.current?.contains(element) && !isActive) {
        setIsActive(true);
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <header className="header" id={"header"}>
      <div className="header__container">
        <div className="header__wraper">
          <Logo logoSrc="logo.png" />
          <button
            ref={btnrRef}
            className={"hamburger-menu" + (isActive ? " active" : "")}
            aria-label="Hamburger Menu"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>

        <nav
          ref={menuRef}
          className={"header__nav " + (isActive ? "show" : "")}
        >
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
