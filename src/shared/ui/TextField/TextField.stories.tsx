import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';

export default {
    title: 'shared/TextField',
    component: TextField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
    <TextField {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
