import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Countries } from '@/entities/Country';
import { Currencies } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const defaultArgs = {
    data: {
        firstname: 'Roweens',
        lastname: 'Roweens',
        country: Countries.Russia,
        username: 'Cognus',
        city: 'Moscow',
        age: 20,
        currency: Currencies.USD,
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
};

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = defaultArgs;
Red.decorators = [ThemeDecorator(Theme.RED)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = defaultArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = defaultArgs;
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const RedRedesigned = Template.bind({});
RedRedesigned.args = defaultArgs;
RedRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
    isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator];

export const ErrorRedesigned = Template.bind({});
ErrorRedesigned.args = {
    error: 'true',
};
ErrorRedesigned.decorators = [NewDesignDecorator];
