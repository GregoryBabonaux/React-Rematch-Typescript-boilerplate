import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

// local
import 'antd/dist/antd.css';
import './App.css';
import './translations/i18n';

// scenes
import Home from './screens/Home';
import About from './screens/About';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2">Sheeps</Menu.Item>
        <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
  
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  
);

export default App;
