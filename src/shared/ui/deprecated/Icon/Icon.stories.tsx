import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';
import TestIcon from '@/shared/assets/icons/article.svg';

export default {
    title: 'shared/deprecated/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    Svg: TestIcon,
};

export const Inverted = Template.bind({});
Inverted.args = {
    Svg: TestIcon,
    inverted: true,
};
