import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './cash_register_products_list_item.css'
import { addProductToCart } from './../actions/index';

class CashRegisterProductsListItem extends Component {
    selectProduct(title) {
        let item= {};
        item.title = title;
        this.props.addProductToCart(item)
    }
    render() {
        return (
            <button className="btn cr_products_list_item" onClick={() => this.selectProduct(this.props.title)}>
                {this.props.title}
            </button>
        );
    }
}
function mapToDispatch(dispatch) {
    return bindActionCreators({ addProductToCart }, dispatch)
}
export default connect(null,mapToDispatch)(CashRegisterProductsListItem);