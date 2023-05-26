import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

const defaultArgs = {
    text:
        'export default {\n' +
        "    title: 'shared/Code',\n" +
        '    component: Code,\n' +
        '    argTypes: {\n' +
        "        backgroundColor: { control: 'color' },\n" +
        '    },\n' +
        '} as ComponentMeta<typeof Code>;\n' +
        '\n' +
        'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
        '\n' +
        'export const Normal = Template.bind({});',
};

export const Normal = Template.bind({});
Normal.args = defaultArgs;
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];


export const Red = Template.bind({});
Red.args = defaultArgs;
Red.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

