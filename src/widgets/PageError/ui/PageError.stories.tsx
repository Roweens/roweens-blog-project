import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/PageError',
    component: PageError,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});

Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [ThemeDecorator(Theme.RED)];
