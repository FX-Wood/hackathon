import React, {Component} from 'react';
import TaskOption from './TaskOption';

class TaskOptionsPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('rendering this one')
        let options;
        if (this.props.task) {
            options = this.props.task.options.map((option, i) => {
                return <div key={i} className="option"><span>This is an option, {option.name}</span></div>
            })
        }
        return ( 
            <div className="TaskOptionsPage">
                <h3>Options</h3>
                {options}
            </div>
        )
    }
}

export default TaskOptionsPage;