import React from 'react';
import list from '@/pages/list/list';
import listDetail from '@/pages/list/listDetail';
import { Switch, Route } from 'react-router-dom';
const lists = () => (
  <Switch>
    <Route exact path='/list' component={list} />
    <Route path='/list/:listId' component={listDetail} />
  </Switch>
)

export default lists;