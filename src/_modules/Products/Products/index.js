import React, { Component } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';*/
import './index.css';
/*import Product from './../Product/index';*/

class Products extends Component {
  constructor() {
    super();
    this.products = { list: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:9090/api/products").then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.products.list = data;
      this.setState(this.products);
    }).catch(function (err) {
      console.log(err);
    });
  }


  render() {

    const listItems = this.products.list.map((item) => {
      return (
          <li key={item._id}>
            {item.name}
          </li>        
      );
    });


    return (
      <div>
        <h2>Products</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Products;
