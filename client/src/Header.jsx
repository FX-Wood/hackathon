import React from 'react';

const Header = (props) => {
    let name;
    if (props.pagename) {
        name = props.pagename
    } else {
        name = 'Clean or Kill'
    }
    return (
        <div className='Header'>
            <h1 className='brand'>{name}</h1>
        </div>
    )
}

export default Header;