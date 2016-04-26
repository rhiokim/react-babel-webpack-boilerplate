/* eslint-disable */
// ref, https://github.com/facebook/jest/tree/master/examples/react
// jest.unmock('../App.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, {renderIntoDocument} from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import expect from 'expect';
import {Link} from 'react-router';

import Header from '../Header.jsx';

describe('<Header/>', () => {
  it('rendered <App /> component has Link', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find(Link)).toExist();
  });
});
