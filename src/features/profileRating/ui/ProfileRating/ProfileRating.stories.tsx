import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Rating } from '@/entities/Rating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileRating>;

const rating: Rating = {
    id: 1,
    rating: 4,
    feedback: 'Nice profile',
};

const Template: ComponentStory<typeof ProfileRating> = (args) => (
    <ProfileRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    profileId: 2,
};
Normal.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?profileId=2`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=2`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    profileId: 2,
};
Dark.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
    ThemeDecorator(Theme.DARK),
];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?profileId=2`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=2`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

export const Red = Template.bind({});
Red.args = {
    profileId: 2,
};
Red.decorators = [
    StoreDecorator({ user: { authData: { id: 1, username: 'ADMIN' } } }),
    ThemeDecorator(Theme.RED),
];
Red.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?profileId=2`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=2`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};
