import React, { Component } from 'react';
import Layout from 'antd/lib/layout';
import 'antd/lib/layout/style';
import './home.less';

class Home extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <main className="home-container">
        <Layout>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
          <Sider>
          </Sider>
        </Layout>
      </main>
    );
  }
}

export default Home;
