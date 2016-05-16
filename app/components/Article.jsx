import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

import DocumentTitle from 'react-document-title';
import {Layout, Content, Grid, Cell,
  Footer, FooterSection, FooterLinkList } from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

import * as Actions from 'actions/article';

class Articles extends Component {
  componentWillMount() {
    // const {id} = this.props.params;
    // this.props.fetchArticle(id);
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  handleChange() {
  }

  render() {
    return (
      <DocumentTitle title="Title">
        <Layout className={classNames('demo-layout', getColorClass('grey', 100))} fixedHeader>
          <div className="demo-ribbon"/>
          <Content className="demo-main">
            <Grid className="demo-container">
              <Cell col={2} hidePhone hideTablet/>
              <Cell col={8} shadow={2} className={classNames('demo-content', getColorClass('white'), getTextColorClass('grey', 800))}>
                <div className={classNames('demo-crumbs', getTextColorClass('grey', 500))}>
                    React and Redux &gt; So Awesome &gt; Material Design
                </div>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan pulvinar dui non aliquet. Mauris pretium molestie urna, quis pharetra massa faucibus imperdiet. Nunc scelerisque ante at leo dapibus malesuada. Curabitur laoreet velit eu tincidunt mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper tellus vitae risus placerat efficitur eu id elit. Vivamus elit mauris, facilisis et erat eget, convallis semper massa. Nullam ut dignissim augue, a laoreet purus. Praesent viverra odio egestas tortor efficitur tincidunt. Aenean tempor nisi sit amet purus rhoncus finibus.</p>
                <p>Nulla eu sodales ex. Sed leo turpis, dignissim sed venenatis in, sagittis sed felis. Nam nec libero non odio gravida gravida. Ut auctor, orci vel commodo ullamcorper, mi felis consectetur libero, ut vestibulum ligula leo in nisl. Duis gravida, leo ut aliquet suscipit, tellus nisl laoreet tellus, eget aliquet justo ex in ipsum. Mauris bibendum lectus a purus congue, at viverra tellus elementum. Aliquam sapien sapien, pellentesque sit amet porta vel, euismod in arcu. Fusce non nisi ut lorem hendrerit mollis. Praesent et tortor quis mauris scelerisque fringilla ut quis arcu.</p>
                <p>Sed auctor tempor velit id eleifend. Pellentesque in pharetra magna. Nulla ac iaculis ligula, vel semper enim. Etiam porta, lorem et tincidunt dictum, ipsum lorem pretium nulla, quis sagittis libero turpis sed sapien. Cras ut tincidunt mi. Suspendisse ut semper massa. Quisque lacus turpis, efficitur ac consectetur nec, maximus at eros. Nunc ullamcorper sagittis nulla in volutpat. Proin tincidunt facilisis erat sed cursus. Nam tincidunt odio est, eu sodales augue venenatis ac.</p>
                <p>Nunc elementum egestas gravida. Quisque non dolor eu metus consequat consectetur in nec sapien. Morbi facilisis turpis vel tellus convallis ultrices in a nisl. Vestibulum et lacus at ligula luctus maximus. Donec facilisis porttitor odio, a dapibus orci aliquet facilisis. Integer vel ultrices enim, eget pellentesque tellus. Phasellus vitae mi in enim ultricies elementum. Etiam iaculis justo sit amet lacus sagittis volutpat dignissim id elit. In at viverra nisi, id porta sapien. Praesent a congue neque, non fermentum ligula. Integer malesuada nisl odio, vel lobortis elit faucibus non. Phasellus tempus mi in sem varius, eu luctus tellus imperdiet. Sed egestas auctor est, sit amet scelerisque diam vehicula et. Vestibulum ullamcorper, nisi eu luctus scelerisque, arcu lacus sollicitudin ipsum, vitae pretium risus quam in dolor. Nunc vehicula, leo accumsan finibus facilisis, sapien nisi sollicitudin sapien, eu consequat diam nisi at risus</p>
                <h3>Lorem Ipsum</h3>
                <p>Vestibulum id lectus ac neque ullamcorper vehicula. Integer gravida eleifend facilisis. Donec nec leo nec mauris dapibus aliquam nec non magna. Morbi gravida ipsum in diam ornare, vitae interdum orci tincidunt. Vivamus et finibus ante, quis pharetra nisi. Sed scelerisque quis diam sed congue. Etiam faucibus elementum sapien, vitae posuere neque tempus sit amet. Aenean faucibus dolor vel rhoncus efficitur. Praesent nec rhoncus augue, quis tincidunt odio. Aenean a ipsum placerat, finibus risus et, luctus arcu. Nulla pellentesque mattis justo et mattis. Duis nec porttitor ante. Maecenas pellentesque orci metus, eget aliquam velit tincidunt ut. Integer ante neque, pulvinar at fringilla sit amet, euismod sed nulla.quip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
                <p>Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor. Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet ex dolore consectetur aliqua elit.</p>
                <p>Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident aute ad consectetur eiusmod.</p>
              </Cell>
            </Grid>
            <Footer size="mini" className="demo-footer">
              <FooterSection type="left">
                <FooterLinkList>
                  <a href="#">Help</a>
                  <a href="#">Privacy and Terms</a>
                  <a href="#">User Agreement</a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Content>
        </Layout>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
