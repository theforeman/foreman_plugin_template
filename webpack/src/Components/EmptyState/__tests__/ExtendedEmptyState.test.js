import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { render, waitFor, screen } from '@testing-library/react'
import { Provider } from 'react-redux';

import { reducers as APIReducer } from 'foremanReact/redux/API';
import { middlewares } from 'foremanReact/redux/middlewares';
import APIHelper from 'foremanReact/redux/API/API';
import ExtendedEmptyState from '../ExtendedEmptyState';

jest.mock('foremanReact/redux/API/API');

const reducers = combineReducers(APIReducer);
const store = createStore(reducers, applyMiddleware(...middlewares));
const wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
describe('foreman plugin template', () => {
  it('should render an error alert', async () => {
    APIHelper.get.mockRejectedValue({ error: new Error() });
    render(<ExtendedEmptyState header="Test header" />, { wrapper });
    await waitFor(() => expect(screen.getByText('Loading description has failed')).toBeInTheDocument());
  });
  it('should render an empty state with custom description', async () => {
    APIHelper.get.mockResolvedValue({ data: { description: 'some description' } });
    render(<ExtendedEmptyState header="Test header" />, { wrapper });
    await waitFor(() => expect(screen.getByText('some description')).toBeInTheDocument());
  });
});
