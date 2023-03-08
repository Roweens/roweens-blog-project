import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { selectProfileValidateErrors } from './selectProfileValidateErrors';

describe('selectProfileValidateErrors.test', () => {
    test('should return error', () => {
        const errors = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.SERVER_ERROR];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errors,
            },
        };
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
