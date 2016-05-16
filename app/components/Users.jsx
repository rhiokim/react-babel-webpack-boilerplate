import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';

import DocumentTitle from 'react-document-title';
import { Layout, Header, Content, Grid, Cell,
  IconButton, Menu, MenuItem, Footer, FooterSection,
  FooterLinkList, DataTable, TableHeader, Textfield } from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

import * as Actions from 'actions/user';

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  linkName(name) {
    return (
      <Link to={`/posts/${name}`}>{name}</Link>
    );
  }

  render() {
    const {users} = this.props;

    return (
      <DocumentTitle title="Users">
        <div className={classNames('mdl-demo', 'mdl-base')}>
          <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>
            <Header className={classNames('demo-header', getColorClass('grey', 100), getTextColorClass('grey', 800))} title="User List" scroll>
              <Textfield value="" label="Search" expandable expandableIcon="search"/>
            </Header>
            <Content component="main">
              <Grid component="section" className="section--center" shadow={0} noSpacing>
                <Cell col={12} table={12} phone={12}>
                  <IconButton name="more_vert" id="demo-menu-lower-left"/>
                  <Menu target="demo-menu-lower-left">
                    <MenuItem>Move</MenuItem>
                    <MenuItem>Remove</MenuItem>
                  </Menu>
                </Cell>
                <Cell col={12} tablet={12} phone={12}>
                  <DataTable selectable shadow={0} rowKeyColumn="id" rows={users}>
                    <TableHeader name="id" tooltip="The amazing material name">Id</TableHeader>
                    <TableHeader name="name" cellFormatter={(name) => <Link to={`/posts/${name}`}>{name}</Link>} tooltip="Price pet unit">Name</TableHeader>
                    <TableHeader name="username" tooltip="Number of materials">Username</TableHeader>
                    <TableHeader name="email" tooltip="">Email</TableHeader>
                    <TableHeader name="phone" tooltip="">Phone</TableHeader>
                    <TableHeader name="website" cellFormatter={(site) => <a href={`http://${site}`} target="_blank">{site}</a>} tooltip="The amazing material name">Website</TableHeader>
                  </DataTable>
                </Cell>
              </Grid>
              <Footer size="mega">
                <FooterSection type="bottom" logo="(c) 2016 Company, Inc.">
                  <FooterLinkList>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Contact</a>
                    <a href="#">Help</a>
                  </FooterLinkList>
                </FooterSection>
              </Footer>
            </Content>
          </Layout>
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
