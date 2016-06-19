/* global __DEV__ */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import WebFontLoader from 'webfontloader';
import classnames from 'classnames';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import FontIcon from 'react-md/lib/FontIcons';
import Snackbar from 'react-md/lib/Snackbars';
import Overlay from 'react-md/lib/Transitions/Overlay';

import AppFooter from '../components/AppFooter';

// import 'react-md/dist/react-md.css';
WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      page: 1
    };
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  fakeChangePage = page => {
    this.setState({ page });
  };

  render() {
    const page = this.state;
    const navItems = [{
      primaryText: 'Home',
      component: Link,
      to: '/users',
      tileClassName: classnames({ active: page === 1 }),
      leftIcon: <FontIcon>home</FontIcon>
    }, {
      primaryText: 'Samples',
      // component: Link,
      // to: '/bbb',
      tileClassName: classnames({ active: page === 2 }),
      leftIcon: <FontIcon>info_outline</FontIcon>,
      nestedItems: [
        {
          primaryText: 'DataTable',
          component: Link,
          to: '/components/datatable',
          tileClassName: classnames({ active: page === 1 }),
          leftIcon: <FontIcon>home</FontIcon>
        },
        {
          primaryText: 'Button',
          tileClassName: classnames({ active: page === 2 }),
          leftIcon: <FontIcon>info_outline</FontIcon>,
          nestedItems: [
            {
              primaryText: 'Flat Button',
              component: Link,
              to: '/bbb-2-1',
              tileClassName: classnames({ active: page === 2 })
            },
            {
              primaryText: 'Icon',
              component: Link,
              to: '/bbb-2-2',
              tileClassName: classnames({ active: page === 2 })
            }
          ]
        }
      ]
    }, {
      primaryText: 'Customization',
      component: Link,
      to: '/articles',
      tileClassName: classnames({ active: page === 3 }),
      leftIcon: <FontIcon>color_lens</FontIcon>
    }];

    return (
      <div className="theme-2">
        <NavigationDrawer
          initiallyOpen
          initialDrawerType="desktop"
          drawerTitle="drawerTitle"
          toolbarTitle="toolbarTitle"
          tabletDrawerType={NavigationDrawer.DrawerType.FULL_HEIGHT}
          desktopDrawerType={NavigationDrawer.DrawerType.FULL_HEIGHT}
          navItems={navItems}
        >
          {this.props.children}
          <AppFooter key="footer" />
        </NavigationDrawer>
        {
          (() => {
            if (__DEV__) {
              const DevTools = require('DevTools').default;
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
