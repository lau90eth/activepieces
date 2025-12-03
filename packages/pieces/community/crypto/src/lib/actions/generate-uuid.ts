import { createAction } from '@activepieces/pieces-framework';
import { randomUUID } from 'crypto';

export const generateUuid = createAction({
  name: 'generate-uuid',
  displayName: 'Generate UUID v4',
  description: 'Generate a random UUID (version 4).',
  props: {},
  async run(_context) {
    return {
      uuid: randomUUID(),
    };
  },
});

