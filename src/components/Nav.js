import React, { useEffect, useState } from 'react'
import "./Nav.css"


function Nav() {
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 100)
        });
    }, [])

    return (
        <div className={`navbar-container ${show && "navbar-container-black"}`}>
            <img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt='Netflix'></img>
            <img className='nav-avatar' src='https://64.media.tumblr.com/76c9276332a286cbb7efd5c3a6efd1d1/tumblr_nusxze8qie1rpwm80o1_r1_250.png' alt='Leonardo'></img>
        </div>
    )
}

export default Nav