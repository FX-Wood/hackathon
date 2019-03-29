import React, {Component} from 'react';
import TaskButton from './TaskButton';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './LogoCircle.svg'

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
            {name: 'assassin in the night', meanFactor: 0},
            {name: 'public assassination', meanFactor: 9000}
        ]
    }
]

class ChooseTaskPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTask: {}
        }
    }
    render() {

        return (
            <Link to="/configure">
                <div className="ChooseTaskPage">
                    <div className='choose-task'>
                    <h1>ROD</h1>
                    <h4><em>Robots on demand</em></h4>
                    <Logo />
                    {tasks.map((task, i) => <TaskButton key={ i } {...task} goToTask={ () => this.props.chooseTask( task )} />)}
                    </div>
                </div>
            </Link>
        )
    }
}

export default ChooseTaskPage;