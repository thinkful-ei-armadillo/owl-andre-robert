import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatEvent from './ChatEvent';
import { STORE } from './store';

describe('Testing Chat event generator', () => {
  // smoke test
  it('renders a message without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatEvent  key={'gsdfgsdfg'} event={STORE.chatEvents[0]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders a thumbs up without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatEvent  key={'gsdfgsdfg'} event={STORE.chatEvents[1]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI of a message as expected', () => {
    const tree = renderer
      .create(<ChatEvent  key={'gsdfgsdfg'} event={STORE.chatEvents[0]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the UI of a thumbs up as expected', () => {
    const tree = renderer
      .create(<ChatEvent  key={'gsdfgsdfg'} event={STORE.chatEvents[1]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});