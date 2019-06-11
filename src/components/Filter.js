import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    // console.log(this.props.sort);
    // console.log("filteredProduct", this.props.filteredProduct);
    return (
      <div className="row">
        <div className="col-md-6 product-alert">
          {this.props.filteredProduct.length} product(s) found
        </div>
        <div className="col-md-6">
          <label className="product-alert">
            order by
            <select
              value={this.props.sort}
              className="form-control"
              onChange={e =>
                this.props.sortProducts(
                  this.props.filteredProduct,
                  e.target.value
                )
              }
            >
              <option>select</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label className="product-alert">
            filter size
            <select
              value={this.props.size}
              className="form-control"
              onChange={e =>
                this.props.filterProducts(this.props.products, e.target.value)
              }
            >
              <option value="">All</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XLL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.items,
  filteredProduct: state.products.filtredItems,
  size: state.products.size,
  sort: state.products.sort
});
export default connect(
  mapStateToProps,
  { filterProducts, sortProducts }
)(Filter);
