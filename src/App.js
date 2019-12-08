import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {

  //const [ expenditures, updateExpendituresList ] = ([]);
  const [ budget, setBudget ] = useState(0);
  const [ answer, questionAnswered ] = useState(false);
    
  return (
    <div className="App container">
      <header>
        <h1>Expense manager</h1>
        
        <div className="contenido-principal contenido">
          { !answer 
            ? <Question setBudget={ setBudget } questionAnswered={ questionAnswered }/>
            : <div className="row">

                <Form/>

                <div className="one-half column">
                  <p>Form</p>
                </div>

            </div> 
          }
        </div>
      </header>
    </div>
  );
}

export default App;
