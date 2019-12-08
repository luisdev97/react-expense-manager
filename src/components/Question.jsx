import React, { useState } from 'react';
import Error from './Error';
 
const Question = ({ setBudget, questionAnswered }) => {

    const [ quantity, setQuantity ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleChange = e => {
        setQuantity(parseInt(e.target.value));
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(quantity < 1 || isNaN(quantity))
            setError(true);
        else{
            setError(false)
            setBudget(quantity);
            questionAnswered(true);
        }
    }

    return (
        <>
            <h2>Budget</h2>

            { error && <Error messagge="The budget is incorrect"/> }

            <form onSubmit={ handleSubmit }>
                <input type="number"
                className="u-full-width"
                placeholder="add your budget"
                onChange={ handleChange }
                value={ quantity}/>
                <button type="submit" className="button-primary u-full-width">Define budget</button>
            </form>
        </>
    );
};

export default Question;