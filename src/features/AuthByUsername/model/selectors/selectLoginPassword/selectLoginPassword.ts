import { StateSchema } from '@/app/providers/StoreProvider';

export const selectLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
