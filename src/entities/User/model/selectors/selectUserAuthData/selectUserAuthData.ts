import { StateSchema } from 'app/providers/StoreProvider';

export const selectUserAuthData = (state: StateSchema) => state.user.authData;
