import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import {STORE} from './store';

describe('Testing participant list', () => {
  // smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList></ParticipantList>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList></ParticipantList>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});