import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';
import { STORE } from './store';

describe('Testing Particpant generator', () => {
  // smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant  key={'gsdfgsdfg'} participant={STORE.participants[0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Participant key={'gsdfgsdfg'} participant={STORE.participants[0]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});