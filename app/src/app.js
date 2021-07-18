import React from 'react';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Signin, Signout, AuthenticatedRoute} from './auth';

import 'antd/dist/antd.css';
import './index.css';

const { Header, Content, Footer } = Layout;

function App(props) {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          {props.user !== null && (
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/contact">Contact</Link>
              </Menu.Item>
              <Menu.Item key="4"><Signout /></Menu.Item>
            </Menu>
          )}
        </Header>
        <Content>
          <Switch>
            <AuthenticatedRoute exact path="/home">
              <div>Home page</div>
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/about">
              <div>About page</div>
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/contact">
              <div>Contact page</div>
            </AuthenticatedRoute>
            <Route path="/signin">
              <Signin />
            </Route>
            <AuthenticatedRoute path="*">
              <div>Not found page</div>
            </AuthenticatedRoute>
          </Switch>
        </Content>
      </Router>
      <Footer>
        Retro Tool ©2021
      </Footer>
    </Layout>
  );
}

export default App;
