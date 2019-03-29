import React, {Component} from 'react';
import ProgWheel from './ProgWheel';
import CircularProgressbar from 'react-circular-progressbar';
import Header from './Header';
import './radialIndicator.jpg';

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
                <Header pagename='Dashboard' />
                <div className="verticalWrap">
                    <img src="./radialIndicator.jpg" alt=""/>
                    <h3 className="progressDashboard">[ Robot progress dashboard ]</h3>
                </div>
            </div>
        )
    }
}

export default ProgressPage;