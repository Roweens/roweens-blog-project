import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, {
    rejectWithValue, dispatch, extra, getState,
}) => {
    const formData = selectProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
        if (!response.data) throw new Error();

        return response.data;
    } catch (error) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
