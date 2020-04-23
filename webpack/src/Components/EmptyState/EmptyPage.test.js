import { testComponentSnapshotsWithFixtures } from '@theforeman/test';

import EmptyState from './EmptyState';

const fixtures = {
  render: {
    header: 'an header',
    description: 'a description',
  },
};

describe('EmptyState', () =>
  testComponentSnapshotsWithFixtures(EmptyState, fixtures));
