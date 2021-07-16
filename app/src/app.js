import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Nav 1</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div>Content</div>
      </Content>
      <Footer>
        Retro Tool ©2021
      </Footer>
    </Layout>
  );
}

export default App;
