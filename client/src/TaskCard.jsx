import React from 'react';
import {Link} from 'react-router-dom';

const TaskCard = (props) => {
    return (
        <div className='TaskCard PrimaryButton'>
            <div className='task-info'>
                <Link to='/progress'>
                <h3>{props.name}</h3>
                </Link>
            </div>
        </div>
    )
}

export default TaskCard; 