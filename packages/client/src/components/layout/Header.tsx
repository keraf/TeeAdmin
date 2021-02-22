import React from 'react';
import { Link } from 'react-router-dom';

import TeeNinja from '../../images/teeninja.png';

const Header = () => (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <span className="navbar-item brand-text">
                    <img src={TeeNinja} alt="TeeNinja" /> TeeAdmin
                </span>
                <div className="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-end">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>
                    <Link className="navbar-item" to="/stats">
                        Stats
                    </Link>
                    <Link className="navbar-item" to="/controls">
                        Controls
                    </Link>
                    <Link className="navbar-item" to="/settings">
                        Settings
                    </Link>
                </div>
            </div>
        </div>
    </nav>
);

export default Header;
