import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})];
