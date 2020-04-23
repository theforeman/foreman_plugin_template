import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PluginTemplateRoute from './Router';

const PluginTemplate = () => (
  <BrowserRouter>
    <PluginTemplateRoute />
  </BrowserRouter>
);

export default PluginTemplate;
