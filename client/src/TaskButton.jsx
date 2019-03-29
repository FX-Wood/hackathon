import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

// class TaskButton extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
    const TaskButton = ({ name, description, options, pricing }) => {
        return (
            <div className="TaskButton" >
                <h3 className="task-name">  { name }</h3>
                <p classsName="description">{ description }</p>
                <p className="pricing">     { pricing }</p>
            </div>
        )
    }
// }

export default TaskButton;