import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Signin, Signout} from './signin';

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
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="3"><Signout /></Menu.Item>
            </Menu>
          )}
        </Header>
        <Content>
          {props.user === null && (
            <Signin />
          )}

          {props.user !== null && (
            <Switch>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/about">
                About
              </Route>
              <Route path="/">
                Home
              </Route>
            </Switch>
          )}
        </Content>
      </Router>
      <Footer>
        Retro Tool ©2021
      </Footer>
    </Layout>
  );
}

export default App;
