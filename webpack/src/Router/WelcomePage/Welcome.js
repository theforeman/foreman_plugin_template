import React from 'react';
import { translate as __ } from 'foremanReact/common/I18n';
import EmptyState from '../../Components/EmptyState/EmptyState';

const WelcomePage = () => (
  <EmptyState
    description={__(`This is an example for a full react page! 
  For further documentation please visit foreman's Storybook page or run it locally via 'npm run stories'`)}
  />
);

export default WelcomePage;
