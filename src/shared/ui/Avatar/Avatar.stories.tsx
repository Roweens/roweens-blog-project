import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from '@/shared/assets/tests/test.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
    alt: 'test image',
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
    alt: 'test image',
};
