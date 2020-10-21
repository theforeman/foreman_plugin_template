import componentRegistry from 'foremanReact/components/componentRegistry';
import ForemanPluginTemplate from './src/ForemanPluginTemplate';

// register components for erb mounting
componentRegistry.register({
  name: 'ForemanPluginTemplate',
  type: ForemanPluginTemplate,
});
