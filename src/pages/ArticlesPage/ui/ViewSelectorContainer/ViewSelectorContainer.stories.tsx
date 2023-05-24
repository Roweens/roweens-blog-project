import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ViewSelectorContainer } from './ViewSelectorContainer';

export default {
    title: 'shared/ViewSelectorContainer',
    component: ViewSelectorContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ViewSelectorContainer>;

const Template: ComponentStory<typeof ViewSelectorContainer> = (args) => (
    <ViewSelectorContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
