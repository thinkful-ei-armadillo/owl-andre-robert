import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageArea from './StageArea';
import {STORE} from './store';

describe('Testing stage area', () => {
  // smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StageArea></StageArea>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StageArea></StageArea>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});