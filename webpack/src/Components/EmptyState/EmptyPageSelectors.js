const selectEmptyState = state => state?.foremanPluginTemplate?.emptyState;
export const selectEmptyStateHeader = state => selectEmptyState(state)?.header;
