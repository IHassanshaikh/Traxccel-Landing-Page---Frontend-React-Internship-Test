import Polygon from "../../assets/Polygon.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Chart = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]); // Updated type

  const items = [
    { name: "Data+AI Ops", description: "We are data enablers and help companies understand their current data environment and make corrections", learn: "Learn more", x: 200, y: 40 },
    { name: "Data+AI strategy and architecture", x: 420, y: 150 },
    { name: "Data enablement", x: 550, y: 300 },
    { name: "Enterprise+ Generative AI", x: 600, y: 440 },
    { name: "Cognitive Automation", x: 420, y: 600 },
    { name: "Business Intelligence & Analytics", x: 220, y: 600 },
    { name: "Data+AI Change management", x: 100, y: 440 },
    { name: "Insights as a Service", x: 100, y: 300 },
  ];

useEffect(() => {
  const images = imageRefs.current;
  const texts = textRefs.current;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 0%",
      end: `+=${images.length * 300}`,
      scrub: 2,
      pin: true,
      anticipatePin: 1,
    },
  });

  images.forEach((img, index) => {
    if (img && texts[index]) {
      tl.to(img, { autoAlpha: 1, duration: 0.5 }) // Show image
        .to(
          texts[index],
          { color: "white", duration: 0.5 }, // Change text color to white
          "-=0.5" // Sync with image appearance
        );

      if (index < images.length - 1) {
        tl.to(img, { autoAlpha: 0, duration: 0.5 }, "+=0.5") // Hide image
          .to(
            texts[index],
            { color: "black", duration: 0.5 }, // Change text color back to black
            "-=0.5" // Sync with image disappearance
          );
      }
    }
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  return (
    <div className="lines" ref={containerRef}>
      <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal Line */}
        <line x1="50" y1="400" x2="750" y2="400" stroke="#2A8CBC" strokeWidth="4" />

        {/* Vertical Line */}
        <line x1="400" y1="50" x2="400" y2="750" stroke="#BDE9FF" strokeWidth="4" />

        {/* 45-degree Line */}
        <line x1="150" y1="150" x2="650" y2="650" stroke="#BDE9FF" strokeWidth="4" />

        {/* 135-degree Line */}
        <line x1="150" y1="650" x2="650" y2="150" stroke="#BDE9FF" strokeWidth="4" />

        {/* Dynamically Rendered Name and Description Text */}
        {items.map((item, index) => (
          <foreignObject
            key={index}
            x={item.x}
            y={item.y}
            width="350"
            height="150"
          >
            <div
              className="service-text"
              ref={(el) => (textRefs.current[index] = el)} // Target <div> inside <foreignObject>
            >
              <p className="text-name">{item.name}</p>
              <p className="text-description">{item.description}</p>
              <p className="learn-more">{item.learn}</p>
            </div>
          </foreignObject>
        ))}
      </svg>
      <div className="polygon">
        {[...Array(8)].map((_, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={Polygon}
            alt={`Polygon ${index + 1}`}
            style={{
              position: "absolute",
              opacity: 0, // Initially hidden
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
