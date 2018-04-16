import React, { Component } from 'react';
import { Layout } from 'antd'; 
import { is, fromJS } from 'immutable';
import './helpcenter.less';
const { Header, Footer, Sider, Content } = Layout;
export default class HelpCenter extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render(){
    return (
      <main>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              <div className="test">
                  <a href="">111</a>
              </div>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </main>
    )
  }
}