import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class ProgressPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0
        }
    }

    makeProgress = (state) => {
        this.setState({progress: state.progress + 25});
    }


    render() {
        return (
            <div className='ProgressBar'>
                <h3>Task</h3>
                {/* <ProgressBar now={now} label={`${now}%`} /> */}
            </div>
        )
    }
}

export default ProgressPage;