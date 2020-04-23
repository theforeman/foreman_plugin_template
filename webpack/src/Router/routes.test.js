import React from 'react';
import { shallow } from '@theforeman/test';

import Routes from './routes';

describe('ForemanPluginTemplateRoutes', () => {
  it('should create routes', () => {
    Object.entries(Routes).forEach(([key, Route]) => {
      const Component = Route.component;
      const component = shallow(<Component history={{}} some="props" />);
      Route.renderResult = component;
    });

    expect(Routes).toMatchSnapshot();
  });
});
