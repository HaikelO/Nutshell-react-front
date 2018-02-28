import React, { Component } from 'react';
import './cash_register_products_categories_list_item.css';

class CashRegisterProductsCategoriesListItem extends Component {
    selectCategorie(item){
        console.log("click event",item);
    }
    render() {
        return (
            <button className="btn cr_products_categories_list_item" onClick={() => {this.selectCategorie(this.props.title)}}>
                {this.props.title}
            </button>
        );
    }
}

export default CashRegisterProductsCategoriesListItem;