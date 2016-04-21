/* eslint-disable no-unused-vars */
//ref, https://github.com/facebook/jest/tree/master/examples/react
jest.unmock('../Header.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, {renderIntoDocument} from 'react-addons-test-utils';

import Header from '../Header.jsx';

describe('Header', () => {
  it('render', () => {
    // Render a checkbox with label in the document
    const header = TestUtils.renderIntoDocument(
      <Header />
    );

    const headerNode = ReactDOM.findDOMNode(header);

    // Verify that it's Off by default
    expect(headerNode.textContent).toEqual('Home, users');

    // Simulate a click and verify that it is now On
    // TestUtils.Simulate.change(
    //   TestUtils.findRenderedDOMComponentWithTag(header, 'input')
    // );
    // expect(headerNode.textContent).toEqual('On');
  });
});
