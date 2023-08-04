import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MobileLayout } from './MobileLayout';

export default {
    title: 'shared/MobileLayout',
    component: MobileLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MobileLayout>;

const Template: ComponentStory<typeof MobileLayout> = (args) => (
    <MobileLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
