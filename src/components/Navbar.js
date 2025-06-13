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

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
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
                to="sections"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Секции
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="program"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Программа
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Контакт
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
