import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ForemanPluginTemplateRoute from './Router';

const ForemanPluginTemplate = () => (
  <BrowserRouter>
    <ForemanPluginTemplateRoute />
  </BrowserRouter>
);

export default ForemanPluginTemplate;
