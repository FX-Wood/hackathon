import React, {Component} from 'react';
import ProgWheel from './ProgWheel';
import CircularProgressbar from 'react-circular-progressbar';

class ProgressPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            interval: ''
        }
        this.makeProgress = this.makeProgress.bind(this)
        this.clearProgressInterval = this.clearProgressInterval.bind(this)
    }
    componentDidMount() {
        this.setState({
            interval: setInterval(this.makeProgress, 2000)
        })
    }

    clearProgressInterval() {
        
    }

    makeProgress() {
        console.log('makeprogress', this.state)
        this.setState((state) => {
            if (state.progress + 25 <= 100) {
                return {progress: state.progress + 25}
            } else {
                    clearInterval(state.interval)
            }
        });
    }


    render() {
        return (
            <div className='ProgressBar'>
                <h3>Progress Page</h3>
                <div className="progress" style={{width: '80vw', height: '300px'}}>
                    <CircularProgressbar percentage={60}/>
                </div>
                <ProgWheel progress={ 60 } label={`${this.state.progress}%`} />
            </div>
        )
    }
}

export default ProgressPage;