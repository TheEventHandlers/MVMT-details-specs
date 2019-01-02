import React from 'react';
import { shallow } from 'enzyme';

import SeeTheFit from '../client/src/components/SeeTheFit.jsx';

describe('SeeTheFit component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      show: false,
      handleClose: jest.fn(),
      specs: {
        case_size: 42,
        case_thickness: 13.5
      }
    };
    wrapper = shallow(<SeeTheFit {...props} />, {disableLifecycleMethods: true});
  });

  it('should render without throwing an error', () => {
    expect(wrapper.find('div').length).toBeTruthy;
  });

  it('should render a see-the-fit image', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('should render one slider for case thickness and one slider for case size', () => {
    expect(wrapper.find('.details-slider').length).toBe(2);
  });

  it('should render one button to close the modal', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should display medium for a case size of 42', () => {
    expect(wrapper.find('.details-modal-watch-size').first().text()).toBe(' medium ');
  });

  it('should have a slider fill of three-fifths for a case size of 42', () => {
    expect(wrapper.find('.details-slider-fill-three-fifths').length).toBe(1);
    expect(wrapper.find('.details-slider-fill-one-fifth').length).toBe(0);
    expect(wrapper.find('.details-slider-fill-two-fifths').length).toBe(0);
    expect(wrapper.find('.details-slider-fill-four-fifths').length).toBe(0);
  });

  it('should have a slider fill of full for a case thickness of 13.5', () => {
    expect(wrapper.find('.details-slider-fill-full').length).toBe(1);
  });

  it('clicking the close button should invoke the handleClose function', () => {
    expect(props.handleClose).toHaveBeenCalledTimes(0);
    wrapper.find('button').at(0).simulate('click');
    expect(props.handleClose).toHaveBeenCalledTimes(1);
  });
});