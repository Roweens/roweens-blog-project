import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currencies } from '@/entities/Currency';
import { Countries } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { editableProfileCardReducer } from '../../model/slice/editableProfileCardSlice';
import { EditableProfileCard as EditableProfile } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    firstname: 'admin',
    lastname: 'admin',
    age: 20,
    currency: Currencies.EUR,
    country: Countries.Germany,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        editableProfileCard: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: 1,
                username: 'admin',
            },
        },
    },
    asyncReducers: { editableProfileCard: editableProfileCardReducer },
};

describe('features/EditableProfileCard', () => {
    test('Toggle readonly', async () => {
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
        ).toBeInTheDocument();
    });
    test('Reset data on cancel', async () => {
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.age'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );
        await userEvent.type(screen.getByTestId('ProfileCard.age'), '25');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.age')).toHaveValue(25);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
        );

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.age')).toHaveValue(20);
    });
    test('One error check', async () => {
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Text'),
        ).toBeInTheDocument();
    });
    test('PUT request should be sent', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');
        ComponentRender(<EditableProfile id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
        );

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
