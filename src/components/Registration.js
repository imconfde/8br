function Registration() {
  return (
    <>
      <div style={{width:'100%'}} className="registration-scroll"></div>

      <div className="container registration">
        <h2 className="main-title text-center">РЕГИСТРАЦИЯ</h2>
        <p className="main-p">
          Для участия в конференции необходимо до <b className="deadline">1 октября 2025 года</b> заполнить 
          <a title="Register for the conference" style={{padding: '0 0 0 5px'}} href="https://forms.gle/9DN4Edd3EtNkhish8">регистрационную форму</a>.
        </p>
        <p className="main-p">
          Оргкомитет планирует издание сборника материалов конференции до начала ее работы. Материалы доклада следует присылать 
          на электронный адрес ??? до <b className="deadline">15 октября 2025 года</b> согласно требованиям, указанным по 
          <a title="Requirements" style={{padding: '0 0 0 5px'}} href="https://github.com/imconfde/8br/tree/main/requirements">ссылке</a>. 
          Объем материалов доклада – не более двух страниц. Материалы доклада должны быть подготовлены в LaTEX и представлены в форматах tex и pdf.
          Оргкомитет конференции оставляет за собой право отклонить материалы,  не соответствующие тематике конференции, требованиям к оформлению, 
          а также присланные позднее установленного срока.
        </p>
        <p className="main-p">
          Проезд, питание и проживание участников конференции осуществляется за счет командирующих организаций.
          Оргкомитет планирует размещение участников конференции в гостиницах Белгосуниверситета,  Национальной академии наук Беларуси и города Минска.
        </p>
        <div>
          <h2 className="main-title">Организационный взнос</h2>
          <p className="main-p">
            Оргвзнос составляет <b>20 белорусских рублей</b> (??? долларов США) и должен быть уплачен не позденее ???. 
            Тезисы доклада (после одобрения программным комитетом) будут опубликованы при условии уплаты оргвзноса.
          </p>
          <h2 className="main-title">Реквизиты в BIN</h2>
          <p className="p-member">Белорусский государственный университет</p>
          <p className="p-member">220030, г.Минск, пр. Независимости, 4</p>
          <p className="p-member">Р/с BY88BLBB36320100235722001001</p>
          <p className="p-member">Дирекция ОАО «Белинвестбанк»</p>
          <p className="p-member">по городу Минску и Минской области</p>
          <p className="p-member">БИК BLBBBY2X</p>
          <p className="p-member">г. Минск, ул. Коллекторная, 11</p>
          <p className="p-member">УНП 100235722 ОКПО 02071814</p>
          <p className="p-member">Назначение платежа: оргвзнос конференции «Восьмые Богдановские чтения».</p>
          <h2 className="main-title">Реквизиты в USD</h2>
          <p className="p-member">????????</p>
        </div>
      </div>
    </>
  );
}
export default Registration;