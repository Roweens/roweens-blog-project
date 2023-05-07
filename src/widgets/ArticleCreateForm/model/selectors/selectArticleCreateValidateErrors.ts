import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleCreateValidateErrors = (state: StateSchema) =>
    state.articleCreateForm?.validateError;
