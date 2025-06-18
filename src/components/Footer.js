import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Контактные данные</p>
                <ul>
                  <li>
                    <Link to="#">220030, г.Минск, пр. Независимости, 4, 541</Link>
                  </li>
                  <li>
                    <Link to="#">Телефон: (+375 17) 209-50-72</Link>
                  </li>
                  <li>
                    <Link to="#">Контактный e-mail: ?????</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li>
                    <Link to="headerbg" spy={true} smooth={true} duration={1000}>Главная</Link>
                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true} duration={1000}>О конференции</Link>
                  </li>
                  <li>
                    <Link to="organizers-scroll" spy={true} smooth={true} duration={1000}>Организаторы</Link>
                  </li>
                  <li>
                    <Link to="registration-scroll" spy={true} smooth={true} duration={1000}>Регистрация</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
    </footer>
  );
}
export default Footer;
