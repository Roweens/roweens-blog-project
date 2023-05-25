import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DetailsContainer } from './DetailsContainer';

export default {
    title: 'pages/ArticleDetailsPage/DetailsContainer',
    component: DetailsContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DetailsContainer>;

const Template: ComponentStory<typeof DetailsContainer> = (args) => (
    <DetailsContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
