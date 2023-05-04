import { StateSchema } from '@/app/providers/StoreProvider';

export const selectProfileForm = (state: StateSchema) =>
    state?.editableProfileCard?.form;
