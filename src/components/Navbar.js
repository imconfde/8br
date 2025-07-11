import { Link } from "react-scroll";

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });
  function openBar() {
    const bar = document.querySelector(".bar");
    const button = document.querySelector(".button");

    bar.classList.toggle("opened");
    button.classList.toggle("pressed");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
            >
              Logo
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
              >
                О конференции
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="organizers-scroll"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Организаторы
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="registration-scroll"
                spy={true}
                smooth={true}
                duration={1000}
              >
                Регистрация и оформление докладов
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="cross"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
