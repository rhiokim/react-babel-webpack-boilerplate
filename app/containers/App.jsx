import React, {Component} from 'react';
import {Link} from 'react-router';

import {
  Layout, Header, Content, Navigation,
  Icon, Grid, Cell, HeaderRow, Drawer
} from 'react-mdl';

// import FooterWrapper from 'components/Footer';

export default class App extends Component {
  render() {
    const props = this.props;
    return (
      <Layout>
        <Header title="Modern Web Application Boilerplate with Material Design">
          <HeaderRow title="Application">
            <Navigation>
              <Link to="a">About</Link>
              <Link to="a">Products</Link>
              <Link to="b">Blog</Link>
              <Link to="b">Contact</Link>
              <a href="https://github.com/rhiokim/react-babel-webpack-boilerplate">
                <Icon name="link" style={{ marginRight: '8px', verticalAlign: 'middle' }}/>
                  GitHub
              </a>
            </Navigation>
          </HeaderRow>
          <HeaderRow className="mdl-layout__header-second-menu">
            <Navigation>
              <Link to="/users">Users</Link>
              <Link to="/posts">Articles</Link>
              <Link to="/gorae">Gorae</Link>
              <Link to="/birds">Birds</Link>
              <Link to="/tiger">Tiger</Link>
              <Link to="/lion">Lion</Link>
            </Navigation>
          </HeaderRow>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="">menu</a>
            <a href="">menu</a>
            <a href="">Link</a>
            <a href="">Link</a>
          </Navigation>
        </Drawer>
        <Content className="mdl-color-text--grey-600 mdl-color--grey-50">
          <Grid noSpacing>
            <Cell col={12}>
              {props.children}
            </Cell>
          </Grid>
        </Content>
        {
          (() => {
            if (process.env.NODE_ENV !== 'development') {
              const DevTools = require('DevTools').default;
              return <DevTools />;
            }
          })()
        }
      </Layout>
    );
  }
}

