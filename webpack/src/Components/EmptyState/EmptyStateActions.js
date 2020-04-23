import { API_OPERATIONS } from 'foremanReact/redux/API/APIConstants';
import { get } from 'foremanReact/redux/API';
import { ADD_CONTENT, FETCHING_KEY } from './Constants';

export const AddEmptyStateHeader = header => ({
  type: ADD_CONTENT,
  payload: header,
});

/*
This action fetches data from the server
For accessing the response's data, select it via this path: state.api.<FETCHING_KEY>.response`
For further information please visit APIMiddleware page in foreman's storybook
*/

export const fetchData = url => ({
  type: API_OPERATIONS.GET,
  key: FETCHING_KEY, // you will need to re-use this key in order to access the right API reducer later.
  url,
  payload: {},
});

// Also you can use foreman's `get` helper for AJAX requests
export const fetchDataViaHelper = (key, url) => get({ key, url });
