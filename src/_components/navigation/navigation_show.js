import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationShow extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light">
                <Link className="nav-item" to={'/bills'}>
                    Bills
                </Link>
                <Link className="nav-item" to={'/products'}>
                    Products
                </Link>
                <Link className="nav-item" to={'/users'}>
                    Users
                </Link>
                </nav>
            </div>
        );
    }
}

export default NavigationShow;