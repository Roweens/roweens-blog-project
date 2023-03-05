import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
