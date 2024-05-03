import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <NavLink className="navbar-brand" to="">
                        <span>
                            <img src='/logo2.png' alt="" />
                        </span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link pl-lg-0" to="labtops">  لابتوب   </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="pc">  كمبيوتر   </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="Mobile">   هواتف  </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="bags">   شنط </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Nav