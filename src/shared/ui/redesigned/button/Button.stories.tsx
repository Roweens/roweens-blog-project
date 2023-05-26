import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button } from './Button';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Button',
    component: Button,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    variant: 'clear',
};
ClearDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const ClearRed = Template.bind({});
ClearRed.args = {
    children: 'Text',
    variant: 'clear',
};
ClearRed.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    variant: 'outlined',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    variant: 'outlined',
};
OutlineDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const OutlineRed = Template.bind({});
OutlineRed.args = {
    children: 'Text',
    variant: 'outlined',
};
OutlineRed.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const FilledDark = Template.bind({});
FilledDark.args = {
    children: 'Text',
    variant: 'filled',
};
FilledDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const FilledRed = Template.bind({});
FilledRed.args = {
    children: 'Text',
    variant: 'filled',
};
FilledRed.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
    children: 'Text',
    variant: 'filled',
    color: 'error',
};
ErrorFilled.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const ErrorClear = Template.bind({});
ErrorClear.args = {
    children: 'Text',
    variant: 'clear',
    color: 'error',
};
ErrorClear.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const ErrorOutlined = Template.bind({});
ErrorOutlined.args = {
    children: 'Text',
    variant: 'outlined',
    color: 'error',
};
ErrorOutlined.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const SuccessFilled = Template.bind({});
SuccessFilled.args = {
    children: 'Text',
    variant: 'filled',
    color: 'success',
};
SuccessFilled.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const SuccessClear = Template.bind({});
SuccessClear.args = {
    children: 'Text',
    variant: 'clear',
    color: 'success',
};
SuccessClear.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const SuccessOutlined = Template.bind({});
SuccessOutlined.args = {
    children: 'Text',
    variant: 'outlined',
    color: 'success',
};
SuccessOutlined.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    variant: 'outlined',
    size: 'l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    variant: 'outlined',
    size: 'xl',
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    variant: 'clear',
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'l',
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Some text',
    variant: 'outlined',
    disabled: true,
};
