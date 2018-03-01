import React, { Component } from 'react';
import CashRegisterCartListItem from './cash_register_cart_list_item';
import {connect} from 'react-redux';


class CashRegisterCartList extends Component {
    renderListItem(item) {
        return <CashRegisterCartListItem key={item.title} quantity={item.quantity} title={item.title} price={item.price} />
    }
    render() {
        if(!this.props.cart){
            return (
                <div>Ajouter un produit !</div>
            );
        }
       /*  const list = [{ quantity: 1, title: "Produit A", price: 5 }, { quantity: 2, title: "Produit B", price: 10 }, { quantity: 1, title: "Produit C", price: 5 }, { quantity: 1, title: "Produit D", price: 1 }]; */
       let list = this.props.cart;
        return (
            <div>
                <table className="table table-hover">
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
function mapStateToProps(state){
    return{
        cart : state.cart
    }
}

export default connect(mapStateToProps)(CashRegisterCartList);