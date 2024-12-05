import dropdown from "../../assets/arrowdown.png";

const FAQs = () => {
  const faqItems = [1, 2, 3, 4];

  return (
    <div className="Faqs">
      <div className="features-header">
        <div>FAQS</div>
        <div>Our answers to your questions</div>
      </div>
      <div className="faq-main">
        {faqItems.map(( index) => (
          <div key={index} className="faq">
            <img className="dropdown" src={dropdown} alt="dropdown" />
          </div>
        ))}
      </div>
      <div className="features-header">
        <div>WAY FORWARD</div>
        <div>Have we impressed you so far?</div>
      </div>
      <div className="buttons">
        <button>Book consultation with us</button>
        <button>Book our product demo</button>
      </div>
    </div>
  );
};

export default FAQs;
