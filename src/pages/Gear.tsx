import "./Gear.css";
import React from "react";

export const Gear = () => {
  const gearCategories = [
    {
      name: "Navigation & Electronics",
      items: [
        {
          name: "Chartplotter",
          description: "Our primary navigation system",
          image: "https://via.placeholder.com/300x200/0ea5e9/ffffff?text=Chartplotter",
          rating: 5,
          pros: ["Reliable", "Easy to use", "Great battery life"],
          cons: ["Expensive", "Large screen"]
        },
        {
          name: "AIS Transponder",
          description: "Essential for safety and collision avoidance",
          image: "https://via.placeholder.com/300x200/0284c7/ffffff?text=AIS",
          rating: 5,
          pros: ["Safety feature", "Peace of mind", "Easy installation"],
          cons: ["Additional cost"]
        }
      ]
    },
    {
      name: "Safety Equipment",
      items: [
        {
          name: "Life Raft",
          description: "6-person offshore life raft",
          image: "https://via.placeholder.com/300x200/0369a1/ffffff?text=Life+Raft",
          rating: 4,
          pros: ["Reliable", "Easy to deploy", "Good capacity"],
          cons: ["Takes up space", "Annual maintenance"]
        },
        {
          name: "EPIRB",
          description: "Emergency Position Indicating Radio Beacon",
          image: "https://via.placeholder.com/300x200/0ea5e9/ffffff?text=EPIRB",
          rating: 5,
          pros: ["Essential safety", "GPS enabled", "Long battery life"],
          cons: ["Expensive", "Registration required"]
        }
      ]
    },
    {
      name: "Sailing Equipment",
      items: [
        {
          name: "Autopilot",
          description: "Electric autopilot system",
          image: "https://via.placeholder.com/300x200/0284c7/ffffff?text=Autopilot",
          rating: 4,
          pros: ["Reduces fatigue", "Accurate", "Easy to use"],
          cons: ["Power hungry", "Can fail"]
        },
        {
          name: "Solar Panels",
          description: "400W solar array",
          image: "https://via.placeholder.com/300x200/0369a1/ffffff?text=Solar+Panels",
          rating: 5,
          pros: ["Free power", "Reliable", "Low maintenance"],
          cons: ["Weather dependent", "Initial cost"]
        }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="gear-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Our Sailing Gear</h1>
          <p className="hero-subtitle">
            Equipment reviews, recommendations, and lessons learned from our sailing adventures
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gear-intro">
            <h2 className="section-title">Equipment We Trust</h2>
            <p className="section-subtitle">
              After thousands of nautical miles, here's the gear that has proven itself 
              aboard Thalia. We only recommend equipment we actually use and trust.
            </p>
          </div>

          {gearCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="gear-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="grid grid-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="gear-item card">
                    <div className="gear-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="gear-content">
                      <h4 className="gear-name">{item.name}</h4>
                      <p className="gear-description">{item.description}</p>
                      <div className="gear-rating">
                        <span className="stars">{renderStars(item.rating)}</span>
                        <span className="rating-text">{item.rating}/5</span>
                      </div>
                      
                      <div className="gear-pros-cons">
                        <div className="pros">
                          <h5>Pros</h5>
                          <ul>
                            {item.pros.map((pro, proIndex) => (
                              <li key={proIndex}>{pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="cons">
                          <h5>Cons</h5>
                          <ul>
                            {item.cons.map((con, conIndex) => (
                              <li key={conIndex}>{con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gear-cta">
            <h2 className="section-title">Want More Gear Reviews?</h2>
            <p className="section-subtitle">
              Subscribe to our YouTube channel for detailed video reviews and see our gear in action
            </p>
            <div className="cta-buttons">
              <a 
                href="https://youtube.com/@patrickandmichaela" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Our Videos
              </a>
              <a 
                href="https://www.patreon.com/c/patrickandmichaela" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support Our Channel
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 