import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPageItems } from './MainPageItems';

export default {
    title: 'pages/MainPage/MainPageItems',
    component: MainPageItems,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPageItems>;

const Template: ComponentStory<typeof MainPageItems> = (args) => (
    <MainPageItems {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
