import React from 'react';
import { translate as __ } from 'foremanReact/common/I18n';
import ExtendedEmptyState from '../../Components/EmptyState/ExtendedEmptyState';

const WelcomePage = () => (
  <ExtendedEmptyState
    description={__(`This is an example for a full react page in a foreman's plugin.
  For further documentation please visit foreman's Storybook page or run it locally by running 'npm run stories'`)}
  />
);

export default WelcomePage;
