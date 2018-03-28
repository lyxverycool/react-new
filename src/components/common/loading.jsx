import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Loading extends Component {
  static propTypes = {
    isloading: PropTypes.bool.isRequired
  }
  render() {
    let show = this.props.isloading;
    return (
      <div className="loading" style={{ display: !show ? 'none' : 'block' }}></div>
    )
  }
}