import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'shared/redesigned/Modal',
    component: Modal,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const defaultArgs = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quos vel dicta eveniet accusamus possimus ea expedita, perspiciatis ullam ipsum dolor. Sed excepturi totam quasi, tenetur corporis quaerat ipsum unde.',
};

export const Primary = Template.bind({});
Primary.args = defaultArgs;
Primary.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = defaultArgs;
Red.decorators = [NewDesignDecorator, ThemeDecorator(Theme.RED)];
