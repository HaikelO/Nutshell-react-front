import React, { Component } from 'react';
import './cash_register_products_list_item.css'

class CashRegisterProductsListItem extends Component {
    render() {
        return (
            <button className="btn cr_products_list_item">
                {this.props.title}
            </button>
        );
    }
}

export default CashRegisterProductsListItem;