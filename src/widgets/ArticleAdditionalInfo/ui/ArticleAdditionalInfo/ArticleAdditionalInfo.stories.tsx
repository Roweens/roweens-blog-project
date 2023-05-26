import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <ArticleAdditionalInfo {...args} />
);

const defaultArgs = {
    author: {
        id: 1,
        username: 'Cognus',
        avatar: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions_505620-617.jpg?w=2000',
    },
    articleId: 1,
    createdAt: '19.05.2022',
    views: 6431,
};

export const Normal = Template.bind({});
Normal.args = defaultArgs;
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = defaultArgs;
Red.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];
