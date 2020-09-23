import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';

function Header(){

return(

    <div id='header'>
        <Link className='box' to=''>Home</Link>
        <Link className='box' to=''>Link</Link>
        <Link className='box' to=''>Support</Link>
        <Link className='box' to=''>About</Link>
    </div>

)}

export default Header;