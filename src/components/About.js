function About() {
  return (
    <>
      <div style={{width:'100%'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={require('../img/logo.jpg')} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-title">О КОНФЕРЕНЦИИ</h2>
            <p className="main-p">
              Со 2 по 5 декабря 2025 года в Белорусском государственном университете (БГУ) состоится
              международная научная конференция «Восьмые Богдановские чтения по дифференциальным уравнениям».
            </p>
          </div>
        </div>
        <div>
          <p className="main-p">
            Работа конференции планируется по следующим секциям:
          </p>
          <ol className="main-p">
            <li>Обыкновенные дифференциальные уравнения.</li>
            <li>Уравнения с частными производными. Математическое моделирование.</li>
            <li>Теория управления. Стохастические дифференциальные уравнения.</li>
            <li>Методика преподавания математики.</li>
          </ol>
          <p className="main-p">
            Рабочие языки конференции: русский, белорусский, английский.
            Продолжительность докладов: пленарных – 40 минут, секционных – 15 минут.
          </p>
          <h2 className="main-title">Важные даты</h2>
          <p style={{margin:'0 0 10px 0'}} className="main-p">Регистрация – до 10 октября 2025 г.</p>
          <p style={{margin:'0 0 10px 0'}} className="main-p">Подача докладов – до 10 октября 2025 г.</p>
          <p style={{margin:'0'}} className="main-p">Работа конференции – 2-5 декабря 2025 г.</p>
        </div>
      </div>
    </>
  );
}
export default About;
