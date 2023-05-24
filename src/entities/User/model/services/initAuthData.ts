import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import { AUTH_LOCALSTORAGE_KEY, LOCAL_STORAGE_DESIGN_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, { rejectWithValue, getState, dispatch }) => {
        const userId = JSON.parse(
            localStorage.getItem(AUTH_LOCALSTORAGE_KEY) || '',
        );

        if (!userId) {
            return rejectWithValue('No user data');
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();

            localStorage.setItem(
                LOCAL_STORAGE_DESIGN_KEY,
                response.features?.isAppRedesigned ? 'new' : 'old',
            );

            return response;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
