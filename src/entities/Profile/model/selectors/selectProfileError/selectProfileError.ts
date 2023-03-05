import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfileError = (state: StateSchema) => state?.profile?.error;
