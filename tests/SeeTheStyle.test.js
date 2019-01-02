import React from 'react';
import { shallow } from 'enzyme';

import SeeTheStyle from '../client/src/components/SeeTheStyle.jsx';

describe('SeeTheStyle component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      specs: {}
    };
    wrapper = shallow(<SeeTheStyle {...props} />, {disableLifecycleMethods: true});
  });

  it('should render without throwing an error', () => {
    expect(wrapper.find('div')).toBeTruthy;
  });

  it('should render 6 rows, one for each style detail', () => {
    expect(wrapper.find('.details-table-row').length).toBe(6);
  })
});