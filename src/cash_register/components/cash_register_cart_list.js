import React, { Component } from 'react';
import CashRegisterCartListItem from './cash_register_cart_list_item';

class CashRegisterCartList extends Component {
    renderListItem(item) {
        return <CashRegisterCartListItem key={item.title} quantity={item.quantity} title={item.title} price={item.price} />
    }
    render() {
        const list = [{ quantity: 1, title: "Produit A", price: 5 }, { quantity: 2, title: "Produit B", price: 10 }, { quantity: 1, title: "Produit C", price: 5 }, { quantity: 1, title: "Produit D", price: 1 }];
        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                Qtt
                            </th>
                            <th>
                                Désignation
                            </th>
                            <th>
                                Prix
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(this.renderListItem)}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default CashRegisterCartList;