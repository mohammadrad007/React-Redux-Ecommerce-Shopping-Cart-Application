import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} product(s) found</div>
        <div className="col-md-4">
          order by
          <label>
            <select
              value={this.props.sort}
              className="form-control"
              onChange={this.props.handleChangeSort}
            >
              <option>select</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          filter size
          <label>
            <select
              value={this.props.sort}
              className="form-control"
              onChange={this.props.handleChangeSize}
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
export default Filter;
