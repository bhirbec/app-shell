import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header style={{ position: "sticky", top: "0" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>Nav 1</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '25px 50px' }}>
        <div className="site-layout-content">
          <div>Content</div>
        </div>
      </Content>
      <Footer style={{ position: "sticky", bottom: "0", textAlign: 'center', backgroundColor: '#e3e3e3' }}>
        Retro Tool ©2021
      </Footer>
    </Layout>
  );
}

export default App;
