import React, { Component } from "react";
import util from "../util";

export default class Basket extends Component {
  render() {
    const { cartItems, handleRemoveFromCart } = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is Empty"
        ) : (
          <div>You have {cartItems.length} in the Basket</div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <b>{item.title}</b>X {item.count} = {item.price * item.count}
                  <button
                    className="btn btn-danger"
                    onClick={e => handleRemoveFromCart(e, item)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            Total :{" "}
            {util.formatCurency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
          </div>
        )}
      </div>
    );
  }
}
