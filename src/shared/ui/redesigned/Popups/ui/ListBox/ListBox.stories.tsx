import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

const items = [
    { content: 'Test test', value: '123' },
    { content: 'Test test', value: '123' },
    { content: 'Test test', value: '123' },
];

export const Normal = Template.bind({});
Normal.args = {
    items,
    defaultValue: 'Test defaultValue',
    label: 'Test label',
};
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {
    items,
    defaultValue: 'Test defaultValue',
    label: 'Test label',
};
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    items,
    defaultValue: 'Test defaultValue',
    label: 'Test label',
};
Red.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    items,
    defaultValue: 'Test defaultValue',
    label: 'Test label',
};
TopLeft.decorators = [NewDesignDecorator];

export const TopRight = Template.bind({});
TopRight.args = {
    items,
    defaultValue: 'Test defaultValue',
    label: 'Test label',
};
TopRight.decorators = [NewDesignDecorator];

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    items,
    defaultValue: 'Test defaultValue',
    label: 'Test label',
};
BottomLeft.decorators = [NewDesignDecorator];

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    items,
    defaultValue: 'Test defaultValue',
    label: 'Test label',
};
BottomRight.decorators = [NewDesignDecorator];
