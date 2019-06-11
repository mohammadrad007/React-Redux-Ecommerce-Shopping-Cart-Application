import React, { Component } from "react";
import util from "../util";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

class Basket extends Component {
  render() {
    console.log(this.props.cartItems);
    const { cartItems } = this.props;
    return (
      <div className="alert alert-info basket">
        {cartItems.length === 0 ? (
          <p>Basket is Empty!!</p>
        ) : (
          <div className="basket-alert">
            You have <span>{cartItems.length}</span> Product(s) in the Basket
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul className="basket-list">
              {cartItems.map(item => (
                <li key={item.id}>
                  <b>{item.title}</b>* {item.count} = {item.price * item.count}
                  <button
                    className="btn btn-basket"
                    onClick={() =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  <hr />
                </li>
              ))}
            </ul>
            <span>Total: </span>
            {util.formatCurency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )}
            <br />
            <button
              className="btn btn-primary"
              onClick={() => alert("Checkout need to implement...")}
            >
              CheckOut
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ cartItems: state.cart.items });
export default connect(
  mapStateToProps,
  { removeFromCart }
)(Basket);
