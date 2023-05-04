import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';
import {
    editableProfileCardActions,
    editableProfileCardReducer,
} from './editableProfileCardSlice';
import { ValidateProfileError } from '../consts/consts';

const data = {
    firstname: 'Roweens',
    lastname: 'Roweens',
    country: Countries.Russia,
    username: 'Cognus',
    city: 'Moscow',
    age: 20,
    currency: Currencies.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            readonly: false,
        };
        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                editableProfileCardActions.setReadonly(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            data,
            form: { username: '' },
        };
        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                editableProfileCardActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data,
        });
    });
    test('test update profile', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            form: { username: '123' },
        };
        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                editableProfileCardActions.updateProfile({
                    username: '123456',
                }),
            ),
        ).toEqual({
            form: { username: '123456' },
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.INCORRECT_COUNTRY],
        };
        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
        };
        expect(
            editableProfileCardReducer(
                state as EditableProfileCardSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateError: undefined,
        });
    });
});
