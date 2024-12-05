import bannerpicturesm from "../../assets/Bannerpic-sm.png"
import bannerpicturelg from "../../assets/Bannerpic.png"
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="main-heading">
          Dive into the 'Age of With' with data+AI for accelerated insights
        </div>
        <div className="banner-btns">
          <button>Learn more</button>
          <button>Book a Consultation</button>
        </div>
      </div>
      <div className="banner-pic">
        <img src={bannerpicturesm} alt="Banner Image"/>
        <img src={bannerpicturelg} alt="Banner Image"/>
      </div>
    </div>
  )
}

export default Banner
