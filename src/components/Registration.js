function Registration() {
  return (
    <>
      <div style={{width:'100%'}} className="registration-scroll"></div>

      <div className="container registration">
        <h2 className="main-title text-center">РЕГИСТРАЦИЯ</h2>
        <p className="main-p">
          Для участия в конференции необходимо до <b>1 октября 2025 года</b> заполнить 
          <a title="Register for the conference" style={{padding: '0 0 0 5px'}} href="https://forms.gle/9DN4Edd3EtNkhish8">регистрационную форму</a>.
        </p>
        <p className="main-p">
          Оргкомитет планирует издание сборника материалов конференции до начала ее работы. Материалы доклада следует присылать 
          на электронный адрес ??? до <b>15 октября 2025 года</b> согласно требованиям, указанным по 
          <a title="Requirements" style={{padding: '0 0 0 5px'}} href="https://github.com/imconfde/8br/tree/main/requirements">ссылке</a>. Оргкомитет конференции оставляет за собой право отклонить материалы, 
          не соответствующие тематике конференции, требованиям к оформлению, а также присланные позднее установленного срока.
        </p>
        <p className="main-p">
          Проезд, питание и проживание участников конференции осуществляется за счет командирующих организаций.
          Оргкомитет планирует размещение участников конференции в гостиницах Белгосуниверситета,  Национальной академии наук Беларуси и города Минска.
        </p>
      </div>
    </>
  );
}
export default Registration;