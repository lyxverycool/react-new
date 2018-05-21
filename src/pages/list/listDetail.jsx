import React, { Component } from "react";
import { Card } from 'antd';
// import 'antd/lib/card/style';
import { connect } from 'react-redux';
import timetrans from "@/utils/formatDate";
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
        <Card title={listDetail.content.title} bordered={false} style={{ width: "100%" }}>
          {listDetail.content.content}<br />
          {timetrans(listDetail.content.createTime).getYearMonthDay()}
        </Card>
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