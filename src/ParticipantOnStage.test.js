import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantOnStage from './ParticipantOnStage';
import { STORE } from './store';

describe('Testing stage area', () => {
  // smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantOnStage key={'adfd'} obj={STORE.participants[1]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantOnStage key={'adfd'} obj={STORE.participants[1]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});