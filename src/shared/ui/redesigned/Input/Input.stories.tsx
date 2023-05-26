import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import TestIcon from '@/shared/assets/icons/article.svg';
import { Icon } from '../Icon';

export default {
    title: 'shared/redesigned/Input',
    component: Input,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const defaultArgs = {
    placeholder: 'Type Text',
    value: 'Test value',
};

export const PrimaryNormal = Template.bind({});
PrimaryNormal.args = defaultArgs;
PrimaryNormal.decorators = [NewDesignDecorator];

export const Readonly = Template.bind({});
Readonly.args = {
    ...defaultArgs,
    readonly: true,
};
Readonly.decorators = [NewDesignDecorator];

export const WithLabel = Template.bind({});
WithLabel.args = {
    ...defaultArgs,
    label: 'Type Text',
};
WithLabel.decorators = [NewDesignDecorator];

export const Small = Template.bind({});
Small.args = {
    ...defaultArgs,
    size: 's',
};
Small.decorators = [NewDesignDecorator];

export const Large = Template.bind({});
Large.args = {
    ...defaultArgs,
    size: 'l',
};
Large.decorators = [NewDesignDecorator];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = defaultArgs;
PrimaryDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryRed = Template.bind({});
PrimaryRed.args = defaultArgs;
PrimaryRed.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const WithAddonLeft = Template.bind({});
WithAddonLeft.args = {
    ...defaultArgs,
    addonLeft: <Icon Svg={TestIcon} />,
};
WithAddonLeft.decorators = [NewDesignDecorator];

export const WithAddonRight = Template.bind({});
WithAddonRight.args = {
    ...defaultArgs,
    addonRight: <Icon Svg={TestIcon} />,
};
WithAddonRight.decorators = [NewDesignDecorator];
