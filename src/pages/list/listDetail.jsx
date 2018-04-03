import React, { Component } from "react";
import { connect } from 'react-redux';
import Loading from '@/components/common/loading'
import { getNoticeDetail } from '@/redux/action';

class ListDetail extends Component {
  componentWillMount() {
    let id = this.props.match.params.listId;
    this.props.getNoticeDetail(id)
  }
  componentWillUnmount() {
    //销毁组件时设置content为空
    this.props.listDetail.content = {};
  }
  render() {
    const listDetail = this.props.listDetail;
    return (
      <div className="list">
        <Loading isloading={listDetail.loading} />
        {listDetail.content.content}
      </div>
    )
  }
}
const getList = state => {
  return {
    listDetail: state.getListData
  }
}

export default connect(
  getList,
  { getNoticeDetail }
)(ListDetail)