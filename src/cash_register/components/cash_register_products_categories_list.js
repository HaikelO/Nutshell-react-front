import React, { Component } from 'react';
import CashRegisterProductsCategoriesListItem from './cash_register_products_categories_list_item';

class CashRegisterCategoriesList extends Component {
    renderCategoriesListItem(item){
        return <CashRegisterProductsCategoriesListItem title={item.title} key={item.title}/>
    }
    render() {
        const list = [{title :"Categorie A"},{title :"Categorie B"},{title :"Categorie C"},{title :"Categorie D"}];
        return (
            <div>
                {list.map(this.renderCategoriesListItem)}
            </div>
        );
    }
}

export default CashRegisterCategoriesList;