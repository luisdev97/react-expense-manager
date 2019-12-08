import React from 'react';
import { revisarPresupuesto } from '../helpers';

const Budget = ({ budget, leftover }) => {
    return (
        <>
            <div className="alert alert-primary">
                Budget: { budget }
            </div>
            <div className={ revisarPresupuesto(budget, leftover) }>
                Leftover: { leftover }
            </div>
        </>
    );
};

export default Budget;