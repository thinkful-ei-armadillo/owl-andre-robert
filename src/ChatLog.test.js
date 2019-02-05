import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatLog from './ChatLog';
import { STORE } from './store';

describe('Testing Chat log', () => {
  // smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatLog></ChatLog>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatLog></ChatLog>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});