import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import History from '@material-ui/icons/History';
import Home from '@material-ui/icons/Home';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import Fingerprint from '@material-ui/icons/Fingerprint';

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <Link to='/missions'><Home style={{color: 'white', fontSize: 40}} /></Link>
                <Link to='/progress'><PlaylistAddCheck style={{color: 'white', fontSize: 40}} /></Link>
                <Link to='/history'><History style={{color: 'white', fontSize: 40}} /></Link>
                <Link to='/profile'><Fingerprint style={{color: 'white', fontSize: 40}} /></Link>
            </div>
        )
    }
}

export default NavBar;