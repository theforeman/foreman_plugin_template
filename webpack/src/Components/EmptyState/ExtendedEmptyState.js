import React from 'react';
import { Button, Alert } from '@patternfly/react-core';
import EmptyState from 'foremanReact/components/common/EmptyState/EmptyStatePattern';
import SkeletonLoader from 'foremanReact/components/common/SkeletonLoader';
import PropTypes from 'prop-types';

import { STATUS } from 'foremanReact/constants'
import { useAPI } from 'foremanReact/common/hooks/API/APIHooks'
import { translate as __ } from 'foremanReact/common/I18n';
import { FOREMAN_STORYBOOK } from './Constants';

const ExtendedEmptyState = ({ header }) => {
  // AJAX request using useAPI hook
  const { response, status } = useAPI('get', '/foreman_plugin_template/plugin_template_description');
  const { description } = response || {};
  

  const storybookBtn = (
    <Button onClick={() => window.open(FOREMAN_STORYBOOK, '_blank')}>
      Storybook
    </Button>
  );

  switch (status) {
    case STATUS.ERROR:
      return (<Alert variant="danger" title={__("Loading description has failed")} />);
    case STATUS.RESOLVED: return (
      <EmptyState
        icon="add-circle-o"
        action={storybookBtn}
        header={header}
        description={description}
        documentation={false}
      />
    )
    default:
      return (
        <SkeletonLoader
          status={status || STATUS.PENDING}
          skeletonProps={{ count: 5 }}
        />
      );
  }
};
ExtendedEmptyState.propTypes = {
  header: PropTypes.string.isRequired,
};

export default ExtendedEmptyState;
