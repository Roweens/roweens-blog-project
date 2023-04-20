import { StateSchema } from '@/app/providers/StoreProvider';

export const selectUserMounted = (state: StateSchema) => state.user._mounted;
