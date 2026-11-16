const Hero = () => {
  return (
    <section className="hero">
      <div className="shell hero-inner">
        <div className="hero-layout">
          <div className="hero-copy">
            <h2 className="hero-title">The 30 Simple Workouts Program</h2>
            <h3 className="hero-subtitle">
              Complete this training program if you want to ...
            </h3>
            <ul className="hero-benefits">
              {[
                "Follow a simple program with guaranteed results",
                "Get fit, healthy, strong and shredded",
                "Learn more about gym, training and technique",
                "Become a lifetime gym bro",
              ].map((text, idx) => (
                <li key={idx} className="benefit">
                  {text}
                  {text.includes("bro") && (
                    <i className="fas fa-heart heart-icon" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <img
              src="/training-clay.webp"
              alt="Training"
              className="hero-image"
            />
          </div>
        </div>

        <div className="rules">
          <h3 className="section-heading">The Rules</h3>
          <p className="body-copy">
            To complete this program, you <strong>MUST</strong> follow these 3
            simple rules:
          </p>
          <ul className="rules-grid">
            <li>
              <span className="rule-name">Rest</span> — Take recovery seriously
            </li>
            <li>
              <span className="rule-name">Reps</span> — Every rep is a pause rep
              at a{" "}
              <abbr
                title="2 seconds down, 2 second pause, 2 seconds up"
                className="tempo"
              >
                2 - 2 - 2 tempo
              </abbr>
            </li>
            <li>
              <span className="rule-name">Weight*</span> — Choose the heaviest
              weight that allows great form
            </li>
          </ul>
          <p className="rules-footnote">
            * The first and second set should be at 75% and 85% of your working
            weight.
          </p>
        </div>

        <div className="training-intro">
          <h3 className="section-heading">The Training Plan</h3>
          <p className="body-copy">
            This training plan uses a structure known as the{" "}
            <span className="emphasis">Bro Split</span> and follows this
            rotation <i className="fas fa-arrow-down inline-icon" />
          </p>
          <p className="rotation">
            <span className="rotation-item">Push</span> →{" "}
            <span className="rotation-item">Pull</span> →{" "}
            <span className="rotation-item">Legs</span> →{" "}
            <span className="rotation-item">Repeat</span>
          </p>
          <p className="training-note">
            Track each workout and see your gains grow{" "}
            <i className="fas fa-check-circle inline-icon" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
