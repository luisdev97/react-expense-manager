import React from 'react';

const Expenditure = ({ expenditure }) => {
    const { name, cost } = expenditure;
    return (
        <li className="gastos">
            <p>
                { name }
                <span className="gasto">$ { cost }</span>
            </p>
        </li>
    );
};

export default Expenditure;