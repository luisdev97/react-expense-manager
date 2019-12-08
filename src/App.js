import React, { useState } from 'react';
import Question from './components/Question';

function App() {

  const [ budget, setBudget ] = useState(0);
  
  const saveBudget = (quantity) => {
    setBudget(quantity);
  }

  return (
    <div className="App container">
      <header>
        <h1>Expense manager</h1>
        
        <div className="contenido-principal contenido">
          <Question saveBudget={ saveBudget }/>
        </div>
      </header>
    </div>
  );
}

export default App;
