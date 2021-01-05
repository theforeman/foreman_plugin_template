import React from 'react';
import ExtendedEmptyState from '../../Components/EmptyState/ExtendedEmptyState';
import { translate as __ } from 'foremanReact/common/I18n';

const WelcomePage = () => (
  <ExtendedEmptyState header={__("Welcome to the plugin template")} />
);

export default WelcomePage;
