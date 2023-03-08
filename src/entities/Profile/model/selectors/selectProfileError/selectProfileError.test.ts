import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileError } from './selectProfileError';

describe('selectProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'true',
            },
        };
        expect(selectProfileError(state as StateSchema)).toEqual('true');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileError(state as StateSchema)).toEqual(undefined);
    });
});
