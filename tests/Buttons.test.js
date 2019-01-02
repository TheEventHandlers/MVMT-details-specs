import React from 'react';
import { shallow } from 'enzyme';

import Buttons from '../client/src/components/Buttons.jsx';

describe('Buttons component', () => {
  let props;
  let wrapper;
  let stateProps;

  beforeEach(() => {
    props = {
      clickHandler: jest.fn(),
      specs: {}
    }
    wrapper = shallow(<Buttons {...props} />, {disableLifecycleMethods: true});
    stateProps = wrapper.state();
  });

  it('should render without throwing an error', () => {
    expect(wrapper.find('div').length).toBeTruthy;
  });

  it('should render three buttons', () => {
    expect(wrapper.find('button').length).toBe(3);
  });

  it('should render the SeeTheFit modal', () => {
    expect(wrapper.find('SeeTheFit').length).toBe(1);
  });

  it('should have two non-active buttons and one active button', () => {
    expect(wrapper.find('.details-button').length).toBe(2);
    expect(wrapper.find('.details-active-button').length).toBe(1);
  });

  it('should store the current active button in state', () => {
    expect(stateProps.hasOwnProperty('activeButton')).toBe(true);
  });

  it('should store the boolean value of displayModal in state', () => {
    expect(stateProps.hasOwnProperty('displayModal')).toBe(true);
  });

  it('initial value for active button should be 1', () => {
    expect(stateProps.activeButton).toBe(1);
  });

  it('initial value for displayModal should be false', () => {
    expect(stateProps.displayModal).toBe(false);
  });

  it('first button (read the specs) should be active initially - other two should be inactive', () => {
    expect(wrapper.find('button').at(0).hasClass('details-active-button')).toBe(true);
    expect(wrapper.find('button').at(1).hasClass('details-active-button')).toBe(false);
    expect(wrapper.find('button').at(1).hasClass('details-button')).toBe(true);
    expect(wrapper.find('button').at(2).hasClass('details-button')).toBe(true);
  });

  it('clicking the see the style button should make it active and the read the sepcs button inactive', () => {
    expect(wrapper.find('button').at(0).hasClass('details-active-button')).toBe(true);
    expect(wrapper.find('button').at(1).hasClass('details-active-button')).toBe(false);
    expect(wrapper.state('activeButton')).toBe(1);

    const mockClickEvent = { target: { innerText: 'see the style' } };
    wrapper.find('button').at(1).simulate('click', mockClickEvent);

    expect(wrapper.find('button').at(0).hasClass('details-active-button')).toBe(false);
    expect(wrapper.find('button').at(1).hasClass('details-active-button')).toBe(true);
    expect(wrapper.state('activeButton')).toBe(2);
  });

  it('clicking the see the fit button should toggle dislayModal in state', () => {
    expect(wrapper.state('displayModal')).toBe(false);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state('displayModal')).toBe(true);
  });
});