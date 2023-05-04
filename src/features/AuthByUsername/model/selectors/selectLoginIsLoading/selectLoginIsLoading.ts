import { StateSchema } from '@/app/providers/StoreProvider';

export const selectLoginIsLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
