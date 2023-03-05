import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { rejectWithValue, dispatch, extra }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
