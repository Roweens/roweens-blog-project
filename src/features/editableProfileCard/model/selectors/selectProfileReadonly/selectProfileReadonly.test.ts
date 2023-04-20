import { StateSchema } from '@/app/providers/StoreProvider';
import { selectProfileReadonly } from './selectProfileReadonly';

describe('selectProfileReadonly.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                readonly: true,
            },
        };
        expect(selectProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
