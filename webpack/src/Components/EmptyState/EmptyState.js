import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, EmptyState as PfEmptyState } from 'patternfly-react';
import { useSelector, useDispatch } from 'react-redux';
import { translate as __ } from 'foremanReact/common/I18n';
import { selectEmptyStateHeader } from './EmptyPageSelectors';
import { AddEmptyStateHeader } from './EmptyStateActions';

const EmptyState = ({ description }) => {
  const dispatch = useDispatch();
  const header = useSelector(selectEmptyStateHeader);

  useEffect(() => {
    dispatch(AddEmptyStateHeader(__('Foreman Plugin Template - React Page')));
  });

  return (
    <PfEmptyState>
      <PfEmptyState.Icon name="add-circle-o" />
      {header && <PfEmptyState.Title>{header}</PfEmptyState.Title>}
      <PfEmptyState.Info>{description}</PfEmptyState.Info>
      <PfEmptyState.Action>
        <Button
          href="https://theforeman.github.io/foreman"
          bsStyle="primary"
          bsSize="large"
        >
          Storybook
        </Button>
      </PfEmptyState.Action>
    </PfEmptyState>
  );
};

EmptyState.propTypes = {
  description: PropTypes.string.isRequired,
};

export default EmptyState;
