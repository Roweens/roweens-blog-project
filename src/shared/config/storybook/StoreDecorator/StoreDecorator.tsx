import { Story } from '@storybook/react';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { editableProfileCardReducer } from '@/features/editableProfileCard/model/slice/editableProfileCardSlice';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slices/articlePageSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    editableProfileCard: editableProfileCardReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
    articlePage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
