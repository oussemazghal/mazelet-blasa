import { useState } from "react";
import "./add.css";

export default function CreateMatch() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    typeMatch: "",
    stadiumName: "",
    city: "",
    date: "",
    startTime: "",
    endTime: "",
    nbPlayers: "",
    alreadyJoined: "",
    pricePerPlayer: "",
    organizerName: "",
    organizerPhone: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Match created :", formData);
    alert("Match created successfully!");
  }

  return (
    <div className="page">

      <h1>Create a Football Match</h1>

      <div className="wizard">

        {/* ⭐ STEP 1 */}
        {step === 1 && (
          <div className="step-box">
            <h2>Step 1 — Match Info</h2>

            <label>Title
              <input name="title" onChange={handleChange} value={formData.title} />
            </label>

            <label>Description
              <textarea name="description" onChange={handleChange} value={formData.description} />
            </label>

            <label>Type of Match
              <select name="typeMatch" onChange={handleChange} value={formData.typeMatch}>
                <option value="">Select</option>
                <option value="5v5">5v5</option>
                <option value="7v7">7v7</option>
                <option value="9v9">9v9</option>
                <option value="11v11">11v11</option>
              </select>
            </label>

            <button onClick={nextStep}>Next</button>
          </div>
        )}

        {/* ⭐ STEP 2 */}
        {step === 2 && (
          <div className="step-box">
            <h2>Step 2 — Stadium & Location</h2>

            <label>Stadium Name
              <input name="stadiumName" onChange={handleChange} value={formData.stadiumName} />
            </label>

            <label>City
              <input name="city" onChange={handleChange} value={formData.city} />
            </label>

            <div className="btns">
              <button onClick={previousStep}>Back</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {/* ⭐ STEP 3 */}
        {step === 3 && (
          <div className="step-box">
            <h2>Step 3 — Date & Time</h2>

            <label>Date
              <input type="date" name="date" onChange={handleChange} value={formData.date} />
            </label>

            <label>Start Time
              <input type="time" name="startTime" onChange={handleChange} value={formData.startTime} />
            </label>

            <label>End Time
              <input type="time" name="endTime" onChange={handleChange} value={formData.endTime} />
            </label>

            <div className="btns">
              <button onClick={previousStep}>Back</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {/* ⭐ STEP 4 */}
        {step === 4 && (
          <div className="step-box">
            <h2>Step 4 — Players & Price</h2>

            <label>Total Players
              <input type="number" name="nbPlayers" onChange={handleChange} value={formData.nbPlayers} />
            </label>

            <label>Already Joined
              <input type="number" name="alreadyJoined" onChange={handleChange} value={formData.alreadyJoined} />
            </label>

            <label>Price per Player (DT)
              <input type="number" name="pricePerPlayer" onChange={handleChange} value={formData.pricePerPlayer} />
            </label>

            <div className="btns">
              <button onClick={previousStep}>Back</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {/* ⭐ STEP 5 */}
        {step === 5 && (
          <div className="step-box">
            <h2>Step 5 — Organizer</h2>

            <label>Organizer Name
              <input name="organizerName" onChange={handleChange} value={formData.organizerName} />
            </label>

            <label>Organizer Phone
              <input name="organizerPhone" onChange={handleChange} value={formData.organizerPhone} />
            </label>

            <div className="btns">
              <button onClick={previousStep}>Back</button>
              <button onClick={handleSubmit}>Create Match</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
