import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Loadable from 'react-loadable';

// local
import 'antd/dist/antd.css';
import './App.css';
import './translations/i18n';
import Loading from 'atoms/Loading';
import { history } from './store';

// scenes
import Home from 'pages/Home';
import About from 'pages/About';
// import Sheeps from 'pages/Sheeps';
import Login from 'pages/Auth/Login';

// Loadable
const LoadableSheeps = Loadable({
  loader: () => import('pages/Sheeps'),
  loading: Loading,
});


const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Router history={history}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/sheeps">Sheeps</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>

        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/sheeps" component={LoadableSheeps} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Router>
  </Layout>
  
);

export default App;
