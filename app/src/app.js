import { Layout, Menu } from 'antd';
import {Signin, Signout} from './signin';

import 'antd/dist/antd.css';
import './index.css';

const { Header, Content, Footer } = Layout;

function App(props) {
  return (
    <Layout className="layout">
      <Header>
        {props.user !== null && (
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">Nav</Menu.Item>
            <Menu.Item key="2"><Signout /></Menu.Item>
          </Menu>
        )}
      </Header>
      <Content>
        {props.user === null ?
          <Signin />
          :
          <div>Content</div>
        }
      </Content>
      <Footer>
        Retro Tool ©2021
      </Footer>
    </Layout>
  );
}

export default App;
