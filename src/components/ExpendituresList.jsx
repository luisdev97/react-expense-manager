import React from 'react';
import Expenditure from './Expenditure';

const ExpendituresList = ({ expenditures }) => {

    const renderExpenditures = expenditures => expenditures.map(expenditure => <Expenditure key={ expenditure.id } expenditure={ expenditure }/>);
    

    return (
        <div className="one-half column">
            <div className="gastos-realizados">
                <h2>List</h2>
                { renderExpenditures(expenditures) }
            </div>
        </div>
    );
};

export default ExpendituresList;