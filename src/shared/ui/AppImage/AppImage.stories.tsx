import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    src: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    fallback: <Skeleton height={400} width={400} />,
};
