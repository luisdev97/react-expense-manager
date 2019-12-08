import React from 'react';

const Budget = ({ budget, leftover }) => {
    return (
        <>
            <div className="alert alert-primary">
                Budget: { budget }
            </div>
            <div className="">
                Leftover: { leftover }
            </div>
        </>
    );
};

export default Budget;