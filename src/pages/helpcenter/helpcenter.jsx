import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import './helpcenter.less';
export default class HelpCenter extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  render(){
    return (
      <main>
        222
      </main>
    )
  }
}