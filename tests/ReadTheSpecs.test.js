import React from 'react';
import { shallow } from 'enzyme';

import ReadTheSpecs from '../client/src/components/ReadTheSpecs.jsx';

describe('ReadTheSpecs component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      specs: {}
    };
    wrapper = shallow(<ReadTheSpecs {...props} />, {disableLifecycleMethods: true});
  });

  it('should render without throwing an error', () => {
    expect(wrapper.find('div')).toBeTruthy;
  });

  it('should render 6 rows, one for each spec detail', () => {
    expect(wrapper.find('.details-table-row').length).toBe(6);
  })
});