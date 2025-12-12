import React, { useState } from "react";
import InputGroup from './InputGroup';



function App() {

  const [ bill, setBill] = useState('');
  const [ tip, setTip] = useState(15);
  const [ people, setPeople] = useState(1);

  const isPeopleZero = people <= 0;
  const totalTip = (parseFloat(bill) || 0) * ( tip / 100) ;
  const totalBill = (parseFloat(bill) || 0) + totalTip;
  const perPerson = !isPeopleZero ? totalBill / people : 0;

  const handleReset = () => {
    setBill('');
    setTip(15);
    setPeople(1);
  }

  return (
    <div className="card">
      <header>
        <h1> tip Pro <span className="logo-dot">.</span></h1>
      </header>

      <div className="main-content">
        <div className="input-side">
          <InputGroup 
            label="Bill Amount"
            value={bill}
            placeholder="0.00"
            onChange={(e) => setBill(e.target.value)}
          />
          <div className="Tip-selection">
            <label>Select a Tip %</label>
            <div className="tip-grid">
              {[5, 10, 15, 25, 50].map((percent) => (
              <button
              key={percent}
              className={tip === percent ? 'active' : ''}
              onClick={() => setTip(percent)}
              >
                {percent}%
              </button>
              ))}
            </div>
          </div>
          <div className="people-input">
            <div className="lable-row">
              <label>Number of People</label>
              {isPeopleZero && <span className="error-text">Can't be zero</span>} 
            </div>
            <input
              className={isPeopleZero ? 'input-error' : ''}
              type="number"
              value={people}
              onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
            />
          </div>
        </div>
        <div className="display-side">
          <div className="result-row">
            <div>
              <p className="res-label">Tip Amount</p>
              <p className="res-sub">/ person</p>
            </div>
            <p className="amount">${(totalTip / (people || 1)).toFixed(2)}</p>
          </div>
          <div className="result-row">
            <div>
              <p className="res-label">Total</p>
              <p className="res-sub">/ person</p>
            </div>
            <p>{perPerson.toFixed(2)}</p>
          </div>
          <button className="reset-btn" onClick={handleReset}>RESET</button>
        </div>
      </div>



      
    </div>
  )
}
export default App;