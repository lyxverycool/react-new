import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Loading from '@/components/common/loading'
import { getNoticeList } from '@/redux/action';

class List extends Component {
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
                <Link className="well well-sm" to={{ pathname: '/listDetail', query: { id: list._id } }}>
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