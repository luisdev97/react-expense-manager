import React from 'react';

const Question = () => {
    return (
        <>
            <h2>Budget</h2>
            <form>
                <input type="number"
                className="u-full-width"
                placeholder="add your budget"/>
                <button type="submit" className="button-primary u-full-width">Define budget</button>
            </form>
        </>
    );
};

export default Question;