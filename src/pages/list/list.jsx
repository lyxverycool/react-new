import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import Loading from '@/components/common/loading'
import { getNoticeList } from '@/redux/action';


class List extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  componentWillMount() {
    this.props.getNoticeList()
  }
  render() {
    const { lists } = this.props;
    return (
      <div className="list">
        <Loading isloading={lists.loading} />
        {/* <button type="button" className="btn btn-default" onClick={() => getNoticeList()}>清除数据</button> */}
        <div>
          {lists.data.map((list, index) => {
            return (
              <div key={index}>
                <Link to={`/list/${list._id}`}>
                  {list.title}
                </Link>
              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }
}
const getList = state => {
  return {
    lists: state.getListData
  }
}

export default connect(
  getList,
  { getNoticeList }
)(List)