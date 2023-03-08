import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/test.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: {
        firstname: 'Roweens',
        lastname: 'Roweens',
        country: Countries.Russia,
        username: 'Cognus',
        city: 'Moscow',
        age: 20,
        currency: Currencies.USD,
        avatar: AvatarImg,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};
