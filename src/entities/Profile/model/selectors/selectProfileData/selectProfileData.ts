import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfileData = (state: StateSchema) => state?.profile?.data;
