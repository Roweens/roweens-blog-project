import { StateSchema } from '@/app/providers/StoreProvider';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { selectProfileForm } from './selectProfileForm';

describe('selectProfileForm.test', () => {
    test('should return error', () => {
        const form = {
            firstname: 'Roweens',
            lastname: 'Roweens',
            country: Countries.Russia,
            username: 'Cognus',
            city: 'Moscow',
            age: 20,
            currency: Currencies.USD,
        };

        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                form,
            },
        };
        expect(selectProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
