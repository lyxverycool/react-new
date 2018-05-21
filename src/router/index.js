import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/lib/layout/style';
import asyncComponent from '@/components/common/asyncComponent';
import home from "@/pages/home/home";
import lists from '@/pages/list/listRouter';
const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <HashRouter>
        <div className="cool-container">
          <Layout>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
              <Content>
                <Switch>
                  <Route path="/" exact component={home} />
                  <Route path="/helpcenter" component={helpcenter} />
                  <Route path="/list" component={lists} />
                  <Redirect to="/" />
                </Switch>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
            <Sider>
            </Sider>
          </Layout>
        </div>
      </HashRouter>
    )
  }
}
