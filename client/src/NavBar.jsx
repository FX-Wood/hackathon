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
                <Link to='/'><Home style={{color: '#ff3b3f', fontSize: 40}} /></Link>
                <Link to='/configure'><PlaylistAddCheck style={{color: '#ff3b3f', fontSize: 40}} /></Link>
                <Link to='/history'><History style={{color: '#ff3b3f', fontSize: 40}} /></Link>
                <Link to='/review'><Fingerprint style={{color: '#ff3b3f', fontSize: 40}} /></Link>
            </div>
        )
    }
}

export default NavBar;