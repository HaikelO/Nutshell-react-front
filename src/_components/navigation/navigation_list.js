import React, { Component } from 'react';
import NavigationListItem from './navigation_list_item';


class NavigationList extends Component {
    renderNavigationListItem(item) {
        return <NavigationListItem key={item.title} path={item.path} title={item.title} />
    }
    render() {
        const list = [{ title: "Bills", path: "/bills" }, { title: "Products", path: "/products" }, { title: "Users", path: "/users" }, { title: "Profil", path: "/profil" }]
        return (
            <div>
                {list.map(this.renderNavigationListItem)}
            </div>
        );
    }
}

export default NavigationList;