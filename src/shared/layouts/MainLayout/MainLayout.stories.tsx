import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from './MainLayout';
import { Navbar } from '@/widgets/Navbar/testing';
import { Sidebar } from '@/widgets/Sidebar/testing';
// eslint-disable-next-line roweens-plugin/upper-layer-imports
import { AppRouter } from '@/app/providers/router';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/layouts/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    header: <Navbar />,
    sidebar: <Sidebar />,
    content: <AppRouter />,
};

export const Dark = Template.bind({});
Dark.args = {
    header: <Navbar />,
    sidebar: <Sidebar />,
    content: <AppRouter />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    header: <Navbar />,
    sidebar: <Sidebar />,
    content: <AppRouter />,
};
Red.decorators = [ThemeDecorator(Theme.RED)];
