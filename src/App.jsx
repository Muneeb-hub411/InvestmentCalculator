import Header from "./components/header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

import { useState } from "react";

function App() {
  const [userInput, SetuserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (UniqueIdentifier, value) => {
    SetuserInput((prevState) => ({
      ...prevState,
      [UniqueIdentifier]: +value,
    }));
  };
  const durationCheck = userInput.duration > 1;
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {durationCheck ? (
        <Results input={userInput} />
      ) : (
        <p class="center">Please enter a duration greater than 1 year</p>
      )}
    </>
  );
}

export default App;
