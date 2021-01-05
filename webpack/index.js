import componentRegistry from 'foremanReact/components/componentRegistry';
import ExtendedEmptyState from './src/Components/EmptyState/ExtendedEmptyState';

// register components for erb mounting
componentRegistry.register({
    name: 'ExtendedEmptyState',
    type: ExtendedEmptyState,
});
