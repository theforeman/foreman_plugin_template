import { registerReducer } from 'foremanReact/common/MountingService';
import { addGlobalFill } from 'foremanReact/components/common/Fill/GlobalFill';
import { registerRoutes } from 'foremanReact/routes/RoutingService';
import Routes from './src/Router/routes'
import reducers from './src/reducers';

// register reducers
Object.entries(reducers).forEach(([key, reducer]) =>
    registerReducer(key, reducer)
);

// register client routes
registerRoutes('PluginTemplate', Routes);

// register fills for extending foreman core
// http://foreman.surge.sh/?path=/docs/introduction-slot-and-fill--page
addGlobalFill('<slotId>', '<fillId>', <div key='plugin-template-example' />, 300);
