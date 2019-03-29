import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class TaskButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="TaskButton">
                <h3>Task Name</h3>
                <p>Task description</p>
                <Button variant="primary">Choose Task Button</Button>
            </div>
        )
    }
}