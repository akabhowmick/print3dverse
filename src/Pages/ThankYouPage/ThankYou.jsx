import "./ThankYou.css";
export const ThankYou = () => {
  return (
    <section className="login-main-wrapper top-space">
      <div className="main-container">
          <div className="login-process">
              <div className="login-main-container">
                  <div className="thankyou-wrapper">
                      <h1><img style={{maxWidth: "100%"}}src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                        <p>for contacting us, we will get in touch with you soon... </p>
                        <a style={{backgroundColor: "var(--red-background)"}}href="./home">Back to home</a>
                        <div className="clr"></div>
                    </div>
                    <div className="clr"></div>
                </div>
            </div>
            <div className="clr"></div>
        </div>
    </section>
  )
}
