import React from "react";

const UserInput = ({ handleChange, userInput }) => {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <label htmlFor="">
            <p>Initial Investment</p>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) => {
                return handleChange("initialInvestment", event.target.value);
              }}
            />
          </label>
          <label htmlFor="">
            <p>Annual Investment</p>
            <input
              type="number"
              required
              onChange={(event) => {
                return handleChange("annualInvestment", event.target.value);
              }}
              value={userInput.annualInvestment}
            />
          </label>
        </div>

        <div className="input-group">
          <p>
            <label htmlFor="">Expected Return</label>
            <input
              type="number"
              required
              onChange={(event) => {
                return handleChange("expectedReturn", event.target.value);
              }}
              value={userInput.expectedReturn}
            />
          </p>
          <p>
            <label htmlFor="">Duration</label>
            <input
              type="number"
              required
              onChange={(event) => {
                return handleChange("duration", event.target.value);
              }}
              value={userInput.duration}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInput;
