import React, { useState } from 'react';

function SumCal() {
  const [n, setN] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let num = parseInt(n, 10);
    
    

    let sum = 0;
    while (num > 0) {
      sum = sum + num;
      num--;
    }
    
    setResult(sum);
  };

  return (
    <div>
      <h1>Sum of n numbers</h1>
      <div className="input-container">
        <input type="integer" value={n} onChange={(e) => setN(e.target.value)}
          placeholder="What's the value of n?"
        />
        <button onClick={handleCalculate}>Submit</button>
      </div>

      <h2>= {result}</h2>

    </div>
  );
}

export default SumCal;
