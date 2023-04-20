import { StateSchema } from '@/app/providers/StoreProvider';

export const selectProfileReadonly = (state: StateSchema) => state?.editableProfileCard?.readonly;
