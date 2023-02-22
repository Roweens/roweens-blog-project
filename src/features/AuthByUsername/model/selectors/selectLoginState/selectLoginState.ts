import { StateSchema } from 'app/providers/StoreProvider';

export const selectLoginState = (state: StateSchema) => state.loginForm;
