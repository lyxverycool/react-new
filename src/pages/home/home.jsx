import React, { Component } from 'react';
import { Layout } from 'antd';
import './home.less';

class Home extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <main className="home-container">
       <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
      </main>
    );
  }
}

export default Home;
