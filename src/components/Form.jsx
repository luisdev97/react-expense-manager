import React, { useState } from 'react';
import Error from './Error';
 
const initialState = {
    name: '',
    cost: '',
    error: false
}

const Form = () => {

    const [ expenditure, setExpenditureValues ] = useState(initialState);

    const handleChange = e => {
        setExpenditureValues({
            ...expenditure,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        const { name, cost } = expenditure;
        e.preventDefault();

        if(cost < 1 || isNaN(cost) || name === ''  )
            setExpenditureValues({
                ...expenditure,
                error: true
            });
        else{
            setExpenditureValues({
                ...expenditure,
                error: false
            });
        }
        
    }

    return (
        <div className="one-half column">
            
            <form onSubmit={ handleSubmit }>

                <h2>Add your expenditure</h2>

                { expenditure.error && <Error messagge="All fields are required"/>}
                <div className="campo">
                    <label>Expenditure name</label>
                    <input type="text" 
                    className="u-full-width"
                    name="name"
                    onChange={ handleChange }
                    placeholder="Ej. shopping"/>
                </div>

                <div className="campo">
                    <label>Cost</label>
                    <input type="number" 
                    className="u-full-width"
                    name="cost"
                    onChange={ handleChange }
                    placeholder="Ej. 300"/>
                </div>

                <button type="submit" className="button-primary u-full-width">
                    Add expenditure
                </button>

            </form>

        </div>
        
    );
};

export default Form;