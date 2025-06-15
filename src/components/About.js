function About() {
  return (
    <>
      <div style={{width:'100%'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={require('../img/ode-logo.jpg')} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">О КОНФЕРЕНЦИИ</h2>
            <p className="main-p">
              Со 2 по 5 декабря 2025 года в Белорусском государственном университете (БГУ) состоится
              международная научная конференция «Восьмые Богдановские чтения по обыкновенным дифференциальным уравнениям».
            </p>
          </div>
        </div>
        <div>
          <p className="main-p">
            Работа конференции планируется по следующим секциям:
          </p>
          <ol className="main-p">
            <li>Асимптотическая теория дифференциальных уравнений.</li>
            <li>Аналитическая теория дифференциальных уравнений.</li>
            <li>Качественная теория дифференциальных уравнений.</li>
            <li>Теория устойчивости и теория управления движением.</li>
            <li>Уравнения с частными производными.</li>
            <li>Стохастические дифференциальные уравнения.</li>
            <li>Методика преподавания математики.</li>
          </ol>
        </div>
      </div>
    </>
  );
}
export default About;
