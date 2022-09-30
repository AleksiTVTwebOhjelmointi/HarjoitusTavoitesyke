
import { useState } from 'react';
import './App.css';

function App() {

  const [age, setAge] = useState(0)
  const [heartRateUpper, setheartRateUpper] = useState(0)
  const [heartRateLower, setheartRateLower] = useState(0)

  function calculate(){
    setheartRateUpper((220 - age) * 0.85)
    setheartRateLower((220 - age) * 0.65)
  }

  return (
      <form>
        <h3>Heart rate limits calculator</h3>
          <p>Age</p>
          <input value={age} onChange={e => setAge(e.target.value)}/>
          <p>Heart rate limits</p>
          <output>{heartRateLower}<label>-</label>{heartRateUpper}</output><br/>
          <button type="button" onClick={calculate}>Calculate</button>
      </form> 
  );
}

export default App;
