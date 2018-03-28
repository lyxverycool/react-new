import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/components/common/asyncComponent';

import home from "@/pages/home/home";
const list = asyncComponent(() => import("@/pages/list/list"));
const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/helpcenter" component={helpcenter} />
          <Route path="/list" component={list} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
