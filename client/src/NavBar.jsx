import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import History from '@material-ui/icons/History';

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <Link to='/history'><History /></Link>
            </div>
        )
    }
}

export default NavBar;