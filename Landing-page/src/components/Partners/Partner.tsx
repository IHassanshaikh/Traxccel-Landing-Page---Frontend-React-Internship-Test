import Nvidia from "../../assets/nvidia.png";
import Azure from "../../assets/microsoft-azure.png";
import Informatica from "../../assets/informatica.png";
import Databricks from "../../assets/databricks.png";
import Snowflake from "../../assets/snowflake.png";
import UIpath from "../../assets/uipath.png";

const Partner = () => {
  const partners = [
    { img: Azure, alt: "Azure", className: "", description: "A true partnership experience focused on sharing risks and success on your transformative journey" },
    { img: Nvidia, alt: "Nvidia", className: "nvidia", description: "A true partnership experience focused on sharing risks and success on your transformative journey" },
    { img: Informatica, alt: "Informatica", className: "", description: "A true partnership experience focused on sharing risks and success on your transformative journey" },
    { img: UIpath, alt: "UIpath", className: "", description: "A true partnership experience focused on sharing risks and success on your transformative journey" },
    { img: Databricks, alt: "Databricks", className: "", description: "A true partnership experience focused on sharing risks and success on your transformative journey" },
    { img: Snowflake, alt: "Snowflake", className: "snowflake", description: "A true partnership experience focused on sharing risks and success on your transformative journey" },
  ];

  return (
    <div className="partner">
      <div className="features-header">
        <div>OUR PARTER ECOSYSTEM</div>
        <div>Data + AI services and solutions for real results </div>
      </div>
      <div className="partner-main">
        {partners.map((partner, index) => (
          <div key={index} className="company">
            <img src={partner.img} alt={partner.alt} className={partner.className}></img>
            <div className="company-disc">{partner.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
