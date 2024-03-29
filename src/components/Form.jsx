import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
 
const initialState = {
    name: '',
    cost: '',
}

const Form = ({ setExpenditure, setAddExpenditure, leftover }) => {

    const [ expenditure, setExpenditureValues ] = useState(initialState);
    const [ error, setError ] = useState({
        ok: false,
        messagge: ''
    });

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
           setError({ ok: true, messagge: 'All fields are required' });
        else if(cost > leftover)
            setError({ ok: true, messagge: "you can't exceed your budget" });
        else{
            setExpenditureValues({
                ...expenditure,
                id: shortid.generate()
            });
            setError(false);
            setExpenditure(expenditure);
            setAddExpenditure(true);
            setExpenditureValues(initialState);
        }
        
    }

    return (
        <div className="one-half column">
            
            <form onSubmit={ handleSubmit }>

                <h2>Add your expenditure</h2>

                { error.ok && <Error messagge={ error.messagge }/>}
                <div className="campo">
                    <label>Expenditure name</label>
                    <input type="text" 
                    className="u-full-width"
                    name="name"
                    onChange={ handleChange }
                    value={ expenditure.name }
                    placeholder="Ej. shopping"/>
                </div>

                <div className="campo">
                    <label>Cost</label>
                    <input type="number" 
                    className="u-full-width"
                    name="cost"
                    onChange={ handleChange }
                    value={ expenditure.cost }
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