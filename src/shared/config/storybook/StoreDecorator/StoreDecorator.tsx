import { Story } from '@storybook/react';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { editableProfileCardReducer } from '@/features/editableProfileCard/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    editableProfileCard: editableProfileCardReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
    articlePage: articlesPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
