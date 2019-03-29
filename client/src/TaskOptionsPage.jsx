import React, {Component} from 'react';
import TaskOption from './TaskOption';
import TaskCard from './TaskCard';
import Header from './Header';

class TaskOptionsPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('rendering this one')
        let options;
        if (this.props.task) {
            options = this.props.task.options.map((option, i) => {
                return <TaskCard key={i} name={option.name} />
            })
        }
        return ( 
            <div className="TaskOptionsPage">
                <Header pagename={this.props.task.name} />
                <div className="verticalWrap">
                    <div className="TaskOptionsButtonsBox">
                        {options}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskOptionsPage;