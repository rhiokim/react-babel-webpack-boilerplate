import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as CounterActions from 'actions/counter';
import Counter from 'components/counter/Counter';

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
