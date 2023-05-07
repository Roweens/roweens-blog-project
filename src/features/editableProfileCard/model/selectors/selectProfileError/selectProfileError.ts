import { StateSchema } from '@/app/providers/StoreProvider';

export const selectProfileError = (state: StateSchema) => state?.editableProfileCard?.error;
