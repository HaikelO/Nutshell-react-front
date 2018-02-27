import React, { Component } from 'react';
import ProductsList from './products_list';

class ProductsShow extends Component {

    render() {

        const list = [{ title: "toto" }, { title: "tata" }, { title: "tete" }];
        return (
            <div>
                Product Show !
                <ProductsList list={list}/>
            </div>
        );
    }
}

export default ProductsShow;