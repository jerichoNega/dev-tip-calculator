import React, { useState } from "react";
import InputGroup from './InputGroup';



function App() {
  const [ bill, setBill] = useState(0);
  const [ tip, setTip] = useState(15);
  const [ people, setPeople] = useState(1);

  const totalTip = ( bill * tip ) / 100;
  const totalBill = totalTip + bill;
  const perPerson = totalBill / (people > 0 ? people : 1);

  return (
    <div className="Container">
      <h1>Tip Calculator</h1>
      <InputGroup label="bill ($)" value={bill} onChange= {(e) => setBill(parseFloat(e.target.value) || 0)} />
      <InputGroup label="tip (%)" value={tip} onChange= {(e) => setTip(parseInt(e.target.value) || 0)} />
      <InputGroup label="People" value={people} onChange= {(e) => setPeople(Math.max(1, parseInt(e.target.value)) || 1)} />

      <div className="summary">
        <p>Total Tip: ${totalTip.toFixed(2)}</p>
        <p className="Highlights">Per Person: ${perPerson}</p>

      </div>



      
    </div>
  )
}
export default App;