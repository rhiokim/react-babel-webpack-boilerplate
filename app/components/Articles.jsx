import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

import DocumentTitle from 'react-document-title';
import {Layout, Header, Content, Grid, Cell,
  IconButton, Menu, MenuItem, Footer, FooterSection,
  FooterLinkList, Textfield,
  Card, CardText, CardActions, Button, Icon} from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

import * as Actions from 'actions/article';

class Articles extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChange() {
  }

  render() {
    let {articles} = this.props;
    articles.length = 5;

    return (
      <DocumentTitle title="Articles">
        <div className={classNames('mdl-demo', 'mdl-base')}>
          <Layout fixedHeader className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>
            <Header className={classNames('demo-header', getColorClass('grey', 100), getTextColorClass('grey', 800))} title="Articles" scroll>
              <Textfield value="" label="Search" expandable expandableIcon="search"/>
            </Header>
            <Content component="main">
              <Grid component="section" className="section--center" shadow={0} noSpacing>
                <Cell component={Card} col={12}>
                  <Grid component={CardText} noSpacing>
                    <Cell component="h5" col={12}>Top3 articles on Weekend</Cell>
                    <Cell className="section__circle-container" col={2} phone={1}>
                      <div className={classNames('section__circle-container__circle', getColorClass('primary'))}></div>
                    </Cell>
                    <Cell className="section__text" col={10} tablet={6} phone={3}>
                      <h5>Lorem ipsum dolor sit amet</h5>
                      Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                    </Cell>
                    <Cell className="section__circle-container" col={2} phone={1}>
                      <div className={classNames('section__circle-container__circle', getColorClass('primary'))}></div>
                    </Cell>
                    <Cell className="section__text" col={10} tablet={6} phone={3}>
                      <h5>Lorem ipsum dolor sit amet</h5>
                      Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                    </Cell>
                    <Cell className="section__circle-container" col={2} phone={1}>
                      <div className={classNames('section__circle-container__circle', getColorClass('primary'))}></div>
                    </Cell>
                    <Cell className="section__text" col={10} tablet={6} phone={3}>
                      <h5>Lorem ipsum dolor sit amet</h5>
                      Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                    </Cell>
                  </Grid>
                  <IconButton name="more_vert" id="btn2" ripple/>
                  <Menu target="btn2" align="right" valign="bottom">
                    <MenuItem>Lorem</MenuItem>
                    <MenuItem disabled>Ipsum</MenuItem>
                    <MenuItem>Dolor</MenuItem>
                  </Menu>
                </Cell>
              </Grid>
              <Grid component="section" className="section--center" shadow={0} noSpacing>
                <Cell component="header" col={3} tablet={2} phone={4} className={classNames('section__play-btn', getColorClass('teal', 100), getTextColorClass('white'))}>
                  <Icon name="play_circle_filled"/>
                </Cell>
                <Cell component={Card} col={9} tablet={6} phone={4}>
                  <CardText>
                    <h4>Features</h4>
                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
                  </CardText>
                  <CardActions>
                    <Button href="#">Read our features</Button>
                  </CardActions>
                </Cell>
                <IconButton name="more_vert" id="btn1" ripple/>
                <Menu target="btn1" align="right" valign="bottom">
                  <MenuItem>Lorem</MenuItem>
                  <MenuItem disabled>Ipsum</MenuItem>
                  <MenuItem>Dolor</MenuItem>
                </Menu>
              </Grid>
              {articles.map(article => {
                const {id, title, body} = article;
                return (
                  <Grid key={id} component="section" className="section--center" shadow={0} noSpacing>
                    <Cell component={Card} col={12}>
                      <CardText>
                        <h4>{title}</h4>
                        {body}
                      </CardText>
                      <CardActions>
                        <Button href={`/#/posts/${id}`}>Read our features</Button>
                      </CardActions>
                    </Cell>
                    <IconButton name="more_vert" id="btn3" ripple/>
                    <Menu target="btn3" align="right" valign="bottom">
                      <MenuItem>Lorem</MenuItem>
                      <MenuItem disabled>Ipsum</MenuItem>
                      <MenuItem>Dolor</MenuItem>
                    </Menu>
                  </Grid>
                );
              })}

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
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
