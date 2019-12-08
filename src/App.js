import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ExpendituresList from './components/ExpendituresList';
import Budget from './components/Budget';

function App() {

  const [ expenditures, updateExpendituresList ] = useState([]);
  const [ expenditure, setExpenditure ] = useState({});
  const [ addExpenditure, setAddExpenditure ] = useState(false);
  const [ budget, setBudget ] = useState({});
  const [ answer, questionAnswered ] = useState(false);
  
  useEffect(() => {

    if(addExpenditure){
      const list = [...expenditures, expenditure];
      updateExpendituresList(list);

      const leftover = budget.leftover - expenditure.cost;
      setBudget({...budget, leftover });
      setAddExpenditure(false);
    }

  },[addExpenditure]);


  return (
    <div className="App container">
      <header>
        <h1>Expense manager</h1>
        
        <div className="contenido-principal contenido">
          { !answer 
            ? <Question setBudget={ setBudget } questionAnswered={ questionAnswered }/>
            : <div className="row">

                <Form setExpenditure={ setExpenditure } setAddExpenditure={ setAddExpenditure } setBudget={ setBudget }/>

                <ExpendituresList expenditures={ expenditures } budget={ budget }/>

            </div> 
          }
        </div>
      </header>
    </div>
  );
}

export default App;
