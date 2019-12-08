import React from 'react';
import Question from './components/Question';

function App() {
  return (
    <div className="App container">
      <header>
        <h1>Expense manager</h1>
        
        <div className="contenido-principal contenido">
          <Question/>
        </div>
      </header>
    </div>
  );
}

export default App;
