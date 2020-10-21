import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@patternfly/react-core';
import EmptyState from 'foremanReact/components/common/EmptyState/EmptyStatePattern';
import { useSelector, useDispatch } from 'react-redux';
import { translate as __ } from 'foremanReact/common/I18n';
import { selectEmptyStateHeader } from './EmptyPageSelectors';
import { AddEmptyStateHeader } from './EmptyStateActions';

const ExtendedEmptyState = ({ description }) => {
  // The next section demonstrates how to use redux with hooks
  const dispatch = useDispatch();
  const header = useSelector(selectEmptyStateHeader);

  useEffect(() => {
    dispatch(AddEmptyStateHeader(__('Foreman Plugin Template - React Page')));
  }, [dispatch]);

  const StorybookBtn = (
    <Button href="https://foreman.surge.sh" bsStyle="primary" bsSize="large">
      Storybook
    </Button>
  );
  return (
    <EmptyState
      icon="add-circle-o"
      action={StorybookBtn}
      header={header}
      description={description}
      documentation={false}
      doco
    />
  );
};

ExtendedEmptyState.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ExtendedEmptyState;
