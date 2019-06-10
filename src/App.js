import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import { Provider } from "react-redux";
import store from "./Store";
class App extends Component {
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
  handleRemoveFromCart = (e, item) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
      return { cartItems };
    });
  };

  render() {
    // console.log(this.state);
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Ecommerce Shoppin Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <Filter />
              <hr />
              <Products handleAddToCart={this.handleAddToCart} />
            </div>
            <div className="col-md-4">
              <Basket
                // cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
