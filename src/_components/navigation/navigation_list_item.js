import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationListItem extends Component {
    render() {
        return (
            <div>
                <Link className="nav-item" to={this.props.path}>
                    {this.props.title}
                </Link>
            </div>
        );
    }
}
export default NavigationListItem;