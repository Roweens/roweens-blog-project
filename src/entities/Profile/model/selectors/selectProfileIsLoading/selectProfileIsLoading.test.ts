import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileIsLoading } from './selectProfileIsLoading';

describe('selectProfileIsLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
