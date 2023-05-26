import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollToTopButton } from './ScrollToTopButton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ScrollToTopButton',
    component: ScrollToTopButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => (
    <ScrollToTopButton />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];
