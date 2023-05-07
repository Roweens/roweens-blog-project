import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleCreateData = (state: StateSchema) =>
    state.articleCreateForm?.newArticle || {
        id: 0,
        blocks: [],
        createdAt: '',
        img: '',
        subtitle: '',
        title: '',
        type: [],
        views: 0,
    };
