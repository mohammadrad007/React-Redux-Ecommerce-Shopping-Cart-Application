import React, { Component } from "react";
import util from "../util";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

class Basket extends Component {
  render() {
    const { cartItems } = this.props;
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
                    onClick={e =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
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
