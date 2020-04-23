import { testComponentSnapshotsWithFixtures } from '@theforeman/test';

import WelcomePage from '../Welcome';

const fixtures = {
  render: {
    history: {
      push: jest.fn(),
    },
  },
};

describe('WelcomePage', () =>
  testComponentSnapshotsWithFixtures(WelcomePage, fixtures));
