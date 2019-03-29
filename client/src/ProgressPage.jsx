import React, {Component} from 'react';
import ProgWheel from './ProgWheel';

class ProgressPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            interval: ''
        }
        this.makeProgress = this.makeProgress.bind(this)
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(this.makeProgress())
        })
    }

    makeProgress = (state) => {
        this.setState((state) => {
            if (state.progress + 25 <= 100) {
                return {progress: state.progress + 25}
            }
        });
    }


    render() {
        return (
            <div className='ProgressBar'>
                <h3>Progress Page</h3>
                {/* <ProgWheel now={ progress } label={`${now}%`} /> */}
            </div>
        )
    }
}

export default ProgressPage;