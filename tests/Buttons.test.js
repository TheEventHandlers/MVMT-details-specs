import React from 'react';
import { shallow } from 'enzyme';

import Buttons from '../client/src/components/Buttons.jsx';

describe('Buttons component', () => {
  it('should store the current active button in state', () => {
    const wrapper = shallow(<Buttons />, {disableLifecycleMethods: true});
    const stateProps = wrapper.state();
    expect(stateProps.hasOwnProperty('activeButton')).toBe(true);
  });
});