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
Normal.args = {};
Normal.decorators = [
    StoreDecorator({ user: { authData: { id: '1', username: 'ADMIN' } } }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({ user: { authData: { id: '1', username: 'ADMIN' } } }),
    ThemeDecorator(Theme.DARK),
];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};

export const Red = Template.bind({});
Red.args = {};
Red.decorators = [
    StoreDecorator({ user: { authData: { id: '1', username: 'ADMIN' } } }),
    ThemeDecorator(Theme.RED),
];
Red.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings`,
            method: 'GET',
            status: 200,
            response: [rating],
        },
    ],
};
