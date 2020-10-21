import { registerRoutes } from 'foremanReact/routes/PluginRoutes';
import Routes from './src/Router/routes'
import { registerReducer } from 'foremanReact/common/MountingService';
import reducers from './src/reducers';

// register reducers
Object.entries(reducers).forEach(([key, reducer]) =>
  registerReducer(key, reducer)
);

// register routes
registerRoutes('PluginTemplate', Routes);
