import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="about-page">

      <div className="about-container">

        <h1>About Us</h1>

        <p className="subtitle">
          We help football players find and create local matches easily.
        </p>

        <div className="about-content">
          <p>
            Our platform makes it easy to organize football games with friends 
            or join matches happening near you. Whether you're a beginner or 
            an experienced player, we bring the community together through sport.
          </p>

          <p>
            If you ever face a problem, have suggestions, or want to help us
            improve the experience, feel free to send us a message below.
          </p>
        </div>

        {/* ⭐ Feedback Form */}
        <div className="feedback-section">
          <h2>Send Us Your Feedback</h2>

          <form className="feedback-form">
            <label>Your Name
              <input type="text" placeholder="Enter your name" />
            </label>

            <label>Your Email
              <input type="email" placeholder="Enter your email" />
            </label>

            <label>Your Message
              <textarea placeholder="Describe your issue or suggestion..." />
            </label>

            <button type="submit" className="feedback-btn">
              Send Feedback
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
