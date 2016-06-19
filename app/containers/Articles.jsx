import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import * as ArticleActions from 'actions/article';
import ArticleList from 'components/articles/ArticleList';
import { LinearProgress } from 'react-md/lib/Progress';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isFetching: false
    };
  }

  componentWillMount() {
    this.setState({
      isFetching: true
    });
    this.props.fetchArticles();
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
    this.setState({
      isFetching: false
    });
  }

  handleChange() {
  }

  render() {
    const {isFetching} = this.state;
    const {articles} = this.props;
    return (
      <div>
        {isFetching && <LinearProgress key="progress" />}
        <ArticleList articles={articles} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articleReducer.articles
});

const mapDispatchToProps = dispatch => bindActionCreators(ArticleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
