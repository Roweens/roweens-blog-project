import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
    variant: 'primary',
};
Primary.decorators = [NewDesignDecorator];

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'Text',
    variant: 'primary',
};

PrimaryDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const PrimaryRed = Template.bind({});

PrimaryRed.args = {
    children: 'Text',
    variant: 'primary',
};

PrimaryRed.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: 'red',
};

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    variant: 'red',
};
RedDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const RedRed = Template.bind({});
RedRed.args = {
    children: 'Text',
    variant: 'red',
};
RedRed.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];
