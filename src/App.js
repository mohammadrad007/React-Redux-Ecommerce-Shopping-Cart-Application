import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems: []
    };
  }
  componentWillMount() {
    fetch(`http://localhost:8000/products`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      );
  }
  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlredyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productAlredyInCart = true;
          item.count++;
        }
      });
      if (!productAlredyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  };
  handleChangeSort = e => {
    this.setState({
      sort: e.target.value
    });
    this.listProducts();
  };

  handleChangeSize = e => {
    this.setState({ size: e.target.value });
    this.listProducts();
  };

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
      }

      if (state.size !== "") {
        return {
          filteredProducts: state.products.filter(
            product =>
              product.availableSizes.indexOf(state.size.toUpperCase()) > -1
          )
        };
      }
      return {
        filteredProducts: state.products
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h1>Ecommerce Shoppin Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Filter
              size={this.state.size}
              sort={this.state.sort}
              handleChangeSize={this.handleChangeSize}
              handleChangeSort={this.handleChangeSort}
              count={this.state.filteredProducts.length}
            />
            <hr />
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4">
            <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
