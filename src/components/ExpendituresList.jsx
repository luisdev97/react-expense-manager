import React from 'react';
import Expenditure from './Expenditure';
import Budget from './Budget';

const ExpendituresList = ({ expenditures, budget, leftover }) => {

    const renderExpenditures = expenditures => expenditures.map(expenditure => <Expenditure key={ expenditure.id } expenditure={ expenditure }/>);
    
    return (
        <div className="one-half column">
            <div className="gastos-realizados">
                <h2>List</h2>
                { renderExpenditures(expenditures) }
            </div>

            <Budget budget={ budget } leftover={leftover}/>
        </div>
    );
};

export default ExpendituresList;