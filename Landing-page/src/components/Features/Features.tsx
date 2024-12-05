import cardpic1 from "../../assets/pic1.png";
import cardpic2 from "../../assets/pic2.png";
import cardpic3 from "../../assets/pic3.png";
import cardpic4 from "../../assets/pic4.png";
import cardpic5 from "../../assets/pic5.png";
import cardpic6 from "../../assets/pic6.png";

const cards = [
  {
    img: cardpic1,
    title: "ZERO-COST ASSESSMENT",
    description:
      "A rapid assessment of your current data+AI landscape to identify opportunities across the value chain",
  },
  {
    img: cardpic2,
    title: "MODERN, FLEXIBLE SOLUTIONS",
    description:
      "Data+AI solutions with adaptable frameworks, designed to evolve with your dynamic business needs",
  },
  {
    img: cardpic3,
    title: "ACCELERATED DELIVERY",
    description:
      "Product-enabled delivery model expedites your project life-cycle with a core focus on efficiency and quality",
  },
  {
    img: cardpic4,
    title: "MINIMIZE CHANGE IMPACTS",
    description:
      "Minimize disruption and seamless transition strategy ensures your transformation journey remains smooth",
  },
  {
    img: cardpic5,
    title: "SHARED RISKS & SUCCESSES",
    description:
      "A true partnership experience focused on sharing risks and success on your transformative journey",
  },
  {
    img: cardpic6,
    title: "DEEP DOMAIN EXPERTISE",
    description:
      "Deep industry insights fortified by extensive domain knowledge ensure alignment with your needs and intricacies",
  },
];

const Features = () => {
  return (
    <div className="features">
      <div className="features-header">
        <div>HOW WE GENERATE VALUE FOR OUR CLIENTS</div>
        <div>Breaking silos, optimize potential, and scale securely </div>
      </div>
      <div className="feature-main">
        {cards.map((card, index) => (
          <div className="feature-card" key={index}>
            <div className="card-pic">
              <img src={card.img} alt={`pic${index + 1}`} />
            </div>
            <div className="card-text">
              <div className="card-title">{card.title}</div>
              <div className="card-description">{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
