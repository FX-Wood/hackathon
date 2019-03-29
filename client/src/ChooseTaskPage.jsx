import React, {Component} from 'react';
import TaskButton from './TaskButton';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './LogoCircle.svg'
import Header from './Header';

const tasks = [
    {
        name: 'CLEAN',
        // description: 'pick up your dry cleaning',
        // pricing: '20kw',
        options: [
            {name: 'DUST HOUSE', duration: 60 * 4 },
            {name: 'VACUUM HOUSE', duration: 60 * 2 },
            {name: 'CAR DETAIL', duration: 60 * 1}
        ]
    },
    {
        name: 'KILL',
        // description: 'kill discriminately',
        // pricing: '3000kw',
        options: [
            {name: 'SPIDER', meanFactor: 100},
            {name: 'ROBOT', meanFactor: 0},
            {name: 'HUMAN', meanFactor: 9000}
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
                    <Header />
                    <Logo />
                    <div className='choose-task'>
                    {tasks.map((task, i) => <TaskButton key={ i } {...task} goToTask={ () => this.props.chooseTask( task )} />)}
                    </div>
                </div>
            </Link>
        )
    }
}

export default ChooseTaskPage;