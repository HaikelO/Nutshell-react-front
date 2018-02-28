import React, { Component } from 'react';
import CashRegisterProductsListItem from './cash_register_products_list_item';

class CashRegisterProductsList extends Component {
    renderListItem(item){
        return <CashRegisterProductsListItem title={item.title} />;
    }
    render() {
        const list = [{title:"Produit A"},{title:"Produit B"},{title:"Produit C"},{title:"Produit D"},{title:"Produit E"},{title:"Produit A"},{title:"Produit B"},{title:"Produit C"},{title:"Produit D"},{title:"Produit E"}];
        return (
            <div>
                {list.map(this.renderListItem)}
            </div>
        );
    }
}

export default CashRegisterProductsList;