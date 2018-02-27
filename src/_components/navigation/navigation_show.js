import React, { Component } from 'react';

import NavigationList from './navigation_list';

class NavigationShow extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light">
                    <NavigationList />                    
                </nav>
            </div>
        );
    }
}

export default NavigationShow;