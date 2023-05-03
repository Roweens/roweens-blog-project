import { StateSchema } from '@/app/providers/StoreProvider';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData.test', () => {
    test('should return data', () => {
        const data = {
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
                data,
            },
        };
        expect(selectProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileData(state as StateSchema)).toEqual(undefined);
    });
});
