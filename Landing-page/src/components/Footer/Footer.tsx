import Linkedin from "../../assets/Linkedin.png"
import Facebook from "../../assets/Facebook.png"
import Tweeter from "../../assets/Twitter.png"
import Insta from "../../assets/Instagram.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-Container">
        <div className="adress">
          <div>
            <img src={Logo} alt="logo" />
            <div className="number">(832) 830-6312</div>
            <div className="gmail">Info@traxccel.com</div>
            <div className="location">1400 Broadfield Blvd, Ste. 650
              Houston, TX 77084</div>
          </div>
          <div className="policy-conditions">
            <span className="policy">Privacy policy </span>
            <span className="condition">Terms & conditions</span>
          </div>
        </div>
        <div className="aboutus">
          <div className="submit">
            <button>Submit for RFP</button>
          </div>
          <div className="us">
            <div className="about">What we do?</div>
            <div className="about">How we do?</div>
            <div className="about">Impacts</div>
            <div className="about">About us</div>
            <div className="about">axlACADEMY</div>
            <div className="about">axlNSIGHTS</div>
            <div className="about">axlSTUDIO</div>
          </div>
        </div>
        <div className="newsletter">
          <div className="subscribe">Subscribe to our newsletter</div>
          <div className="email">E-mail</div>
          <input type="email"></input>
          <div className="submit">
            <button>Submit</button>
          </div>
        </div>
        <div className="contactus">
          <div className="icons">
            <img src={Linkedin} alt="Linkedin" />
            <img src={Facebook} alt="Facebook" />
            <img src={Tweeter} alt="Tweeter" />
            <img src={Insta} alt="Insta" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
