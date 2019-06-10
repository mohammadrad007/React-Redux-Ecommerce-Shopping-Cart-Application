import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import { Provider } from "react-redux";
import store from "./Store";
class App extends Component {
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
              <Products />
            </div>
            <div className="col-md-4">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
