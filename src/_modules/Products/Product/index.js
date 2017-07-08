import React, { Component } from 'react';
import './index.css';

class Product extends Component {
  constructor() {
    super();
    this.products = {list : []};
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:9090/api/products").then( (response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        this.product.list = data;
        this.setState(this.product);
      }).catch(function (err) {
        console.log(err);
      });
  }


  render() {
    
    const listItems = this.product.list.map((item, index) => {
      return (
        {/*<li key={index}>
          <a href="{item._id}">{item.name}</a>
        </li>*/}
      );
    });

    
    return (
      <div>
        <h2>Product</h2>
        {/*<ul>{listItems}</ul>*/}
      </div>
    );
  }
}

export default Product;