import 'core-js/shim';
import 'regenerator-runtime/runtime';
import MutationObserver from '@sheerun/mutationobserver-shim';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Mocking translation function
global.__ = text => text; // eslint-disable-line

// Mocking locales to prevent unnecessary fallback messages
window.locales = { en: { domain: 'app', locale_data: { app: { '': {} } } } };

// see https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
window.MutationObserver = MutationObserver;
