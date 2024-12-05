import box1 from "../../assets/box1.png"
import box2 from "../../assets/box2.png"
import box3 from "../../assets/box3.png"


const Highlights = () => {
  return (
    <div className="highlights">
      <div className="features-header">
        <div>OUR RECENT CUSTOMER HIGHLIGHTS</div>
        <div>Breaking silos, optimize potential, and scale securely </div>
      </div>
      <div className="highlight-main">
        <div className="highlight-card">
          <div className="box-lg">
            <div className="box-title">Hybrid DE Pods</div>
            <img src={box1} alt="box1" />
            <div className="box-disc">A true partnership experience focused on sharing risks and success on your transformative journey A true partnership experience focused on sharing risks</div>
          </div>
        </div>

        <div className="highlight-card-sm">
          <div className="box-sm">
            <div className="box-title">Hybrid DE Pods</div>
            <div className="box2">
              <img src={box2} alt="box2" />
              <div className="box-disc-sm">A true partnership experience focused on sharing risks and success on your transformative journey A true partnership experience focused on sharing risks
              </div>
            </div>
          </div>

          <div className="box-sm">
            <div className="box-title">Data+AI Change Management</div>
            <div className="box2">
              <img src={box3} alt="box3" />
              <div className="box-disc-sm">A true partnership experience focused on sharing risks and success on your transformative journey A true partnership experience focused on sharing risks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
