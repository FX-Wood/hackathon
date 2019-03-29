import React, {Component} from 'react';
import TaskButton from './TaskButton';

const tasks = [
    {
        name: 'dry cleaning',
        description: 'pick up your dry cleaning',
        pricing: '20kw',
        options: [
            {name: 'house', duration: 60 * 4 },
            {name: 'panic room', duration: 60 * 2 },
            {name: 'light dusting', duration: 60 * 1}
        ]
    },
    {
        name: 'kill',
        description: 'kill discriminately',
        pricing: '3000kw',
        options: [
            {name: 'softly', meanFactor: 100},
            {name: 'assassin in the nigt', meanFactor: 0},
            {name: 'public assassination', meanFactor: 9000}
        ]
    }
]

class ChooseTaskPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="ChooseTaskPage">
                <h1>ROD</h1>
                <h4><em>Robots on demand</em></h4>
                {tasks.map((task, i) => <TaskButton key={ i } {...task} />)}
            </div>
        )
    }
}

export default ChooseTaskPage;