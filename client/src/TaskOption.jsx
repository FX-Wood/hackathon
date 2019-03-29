import React from 'react';

const TaskOption = (props) => {
    console.log('this is the task options', props)
    return (
        <div className="taskOption">
            <h5>Option</h5>
            <p>Name of option</p>
            <p>Description of option</p>
            <p>Price</p>
        </div>
    )
}