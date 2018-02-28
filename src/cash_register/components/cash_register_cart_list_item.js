import React, { Component } from 'react';
import './cash_register_cart_list_item.css';

class CashRegisterCartListItem extends Component {
    render() {
        return (
            <tr className="product_item">
                <td>{this.props.quantity}</td>
                <td>{this.props.title}</td>
                <td>{this.props.price}</td>                
            </tr>
        );
    }
}

export default CashRegisterCartListItem;