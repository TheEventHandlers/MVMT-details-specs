import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';

describe('App component', () => {
  let wrapper;
  let stateProps;

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    stateProps = wrapper.state();
  });

  it('should render without throwing an error', () => {
    expect(wrapper.find('div').length).toBeTruthy;
  });

  it('should render the main watch image', () => {
    expect(wrapper.find('img').length).toBeTruthy;
  });

  it('should render the Buttons component', () => {
    expect(wrapper.find('Buttons').length).toBeTruthy;
  });

  it('should render the ReadTheSpecs component initially', () => {
    expect(wrapper.find('ReadTheSpecs').length).toBeTruthy;
    expect(wrapper.find('SeeTheStyle').length).toBeFalsy;
  });

  it('should store the watch specs in state', () => {
    expect(stateProps.hasOwnProperty('specs')).toBe(true);
  });

  it('should store the string representation of currentDisplay in state', () => {
    expect(stateProps.hasOwnProperty('currentDisplay')).toBe(true);
  });

  it('initial value for currentDisplay should be read the specs', () => {
    expect(stateProps.currentDisplay).toBe('read the specs');
  });
});