import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';
import TestIcon from '@/shared/assets/icons/article.svg';

export default {
    title: 'shared/redesigned/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: any) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    Svg: TestIcon,
};

export const Interactive = Template.bind({});
Interactive.args = {
    Svg: TestIcon,
    interactive: true,
    width: 50,
    height: 50,
};

export const Big = Template.bind({});
Big.args = {
    Svg: TestIcon,
    width: 80,
    height: 80,
};
