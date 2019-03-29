import React, {Component} from 'react';
import Header from './Header';
import TaskButton from './TaskButton';
import { Link } from 'react-router-dom'

class ReviewPage extends Component {
    render() {
        return (
            <div className='ReviewTask'>
                <Header pagename='Review' />
                <div className='verticalWrap'>
                    <p>Robot: $100</p>
                    <form className='review-box'>
                    <input type='text' className='location' placeholder='Location' /><br />
                    <input type='text' className='notes' placeholder='Notes' />
                    </form>
                </div>
                <Link to='/progress'>
                    <div className='PrimaryCase'>
                        <h3>CLEAN</h3>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ReviewPage;