import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleCreateIsLoading = (state: StateSchema) => state.articleCreateForm?.isLoading;
