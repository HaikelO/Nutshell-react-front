import React, { Component } from 'react';

import './cash_register_products_list_item.css'

class CashRegisterProductsListItem extends Component {
    render() {
        return (
            <div className="cr_products_list_item">
                {this.props.title}
            </div>
        );
    }
}

export default CashRegisterProductsListItem;