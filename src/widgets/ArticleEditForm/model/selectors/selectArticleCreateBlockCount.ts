import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleCreateBlockCount = (state: StateSchema) => state.articleCreateForm?.blockCount;
