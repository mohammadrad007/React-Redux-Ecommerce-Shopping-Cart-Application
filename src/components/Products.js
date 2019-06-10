import React, { Component } from "react";
import util from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Products extends Component {
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log(this.props);
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map(product => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={this.props.handleAddToCart}>
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <div>
            <b>{util.formatCurency(product.price)} </b>
            <button
              className="btn btn-success"
              onClick={e => this.props.handleAddToCart(e, product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    ));
    return <div className="row">{productItems}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.products.items
  };
};
export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
