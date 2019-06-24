import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Loadable from 'react-loadable';

// local
import 'antd/dist/antd.css';
import './App.css';
import './translations/i18n';
import Loading from 'atoms/Loading';
import { RouteComponentProps } from "react-router";

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

type PropsType = RouteComponentProps;

const { Header, Content, Footer } = Layout;

const App = (props: PropsType) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          style={{ lineHeight: '64px' }}
          selectedKeys={[props.location.pathname]}>
          <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/sheeps"><Link to="/sheeps">Sheeps</Link></Menu.Item>
          <Menu.Item key="/about"><Link to="/about">About</Link></Menu.Item>
          <Menu.Item key="/login"><Link to="/login">Login</Link></Menu.Item>

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
    </Layout>
  )
};

export default withRouter(App); // need this to inject navigation props
