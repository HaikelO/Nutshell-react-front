import React, { Component } from 'react';
import './index.css';

class Products extends Component {
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
        this.products.list = data;
        this.setState(this.products);
      }).catch(function (err) {
        console.log(err);
      });
  }


  render() {
    
    const listItems = this.products.list.map((item) => {
      return (
        <li>
          <a href="{item._id}">{item.name}</a>
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
