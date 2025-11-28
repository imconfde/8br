function Registration() {
  return (
    <>
      <div style={{width:'100%'}} className="registration-scroll"></div>

      <div className="container registration">
        <h2 className="main-title text-center">РЕГИСТРАЦИЯ И ОФОРМЛЕНИЕ ДОКЛАДОВ</h2>
        <p className="main-p hidden">
          Для участия в конференции необходимо до <b className="deadline">10 октября 2025 года</b> заполнить
          <a title="Registration form" style={{padding: '0 0 0 5px'}} href="https://forms.gle/9DN4Edd3EtNkhish8" target="_blank" rel="noopener noreferrer">регистрационную форму</a>.
        </p>
        <p className="main-p">
          Оргкомитет планирует издание сборника материалов конференции до начала ее работы. Объем доклада должен составлять <b>не более трех страниц</b>, 
          подготовленных в LaTeX согласно следующим требованиям:
        </p>
        <p className="main-p"><a title="Requirements windows" href="https://github.com/imconfde/8br-req-rus-win" target="_blank" rel="noopener noreferrer">Example-rus(win).tex</a> – для тех, кто работает в кодировке WINDOWS на русском языке;</p>
        <p className="main-p"><a title="Requirements dos" href="https://github.com/imconfde/8br-req-rus-dos" target="_blank" rel="noopener noreferrer">Example-rus(dos).tex</a> – для тех, кто работает в кодировке DOS на русском языке;</p>
        <p className="main-p"><a title="Requirements english" href="https://github.com/imconfde/8br-req-eng" target="_blank" rel="noopener noreferrer">Example.tex</a> – на английском языке.</p>
        <p className="main-p">
          Доклады следует присылать до <b className="deadline">10 октября 2025 года</b> по электронному адресу <b>fmis@bsu.by</b>. Оргкомитет конференции оставляет за собой 
          право отклонить доклады, не соответствующие тематике конференции, требованиям к оформлению, а также присланные позднее установленного срока.
        </p>
        <p className="main-p">
          Проезд, питание и проживание участников конференции осуществляется за счет командирующих организаций.
          Оргкомитет планирует размещение участников конференции в гостиницах БГУ, Национальной академии наук Беларуси и города Минска.
        </p>
        <div>
          <h2 className="main-title">Организационный взнос</h2>
          <p className="main-p">
            Оргвзнос составляет <b>25 белорусских рублей</b> (1200 российских рублей). Реквизиты для оплаты оргвзноса находятся по следующей
            <a title="Payment details" style={{padding: '0 0 0 5px'}} href="https://github.com/imconfde/8br-payment-details" target="_blank" rel="noopener noreferrer">ссылке</a>.
          </p>
        </div>
      </div>
    </>
  );
}
export default Registration;
