import { StateSchema } from 'app/providers/StoreProvider';

export const selectProfileReadonly = (state: StateSchema) => state?.profile?.readonly;
