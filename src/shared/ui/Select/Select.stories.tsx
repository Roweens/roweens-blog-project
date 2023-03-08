import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImg from 'shared/ui/Avatar/test.jpg';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select something',
    options: [
        { value: '123', content: 'Первый' },
        { value: '1234', content: 'Второй' },
        { value: '1235', content: 'Третий' },
    ],
};
