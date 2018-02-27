import React, { Component } from 'react';
import ProductsList from './products_list';
import NavigationShow from './../../_components/navigation/navigation_show';

class ProductsShow extends Component {

    render() {

        const list = [{ title: "toto" }, { title: "tata" }, { title: "tete" }];
        return (
            <div>
                <NavigationShow />
                <ProductsList list={list}/>
            </div>
        );
    }
}

export default ProductsShow;