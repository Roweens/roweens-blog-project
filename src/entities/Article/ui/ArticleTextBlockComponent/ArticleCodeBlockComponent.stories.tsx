import { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleTextBlock } from '../../model/types/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Article/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleTextBlockComponent>;

type Story = StoryObj<typeof ArticleTextBlockComponent>;

const defaultArgs = {
    block: {
        id: 5,
        type: ArticleBlockType.TEXT,
        title: 'Заголовок этого блока',
        paragraphs: [
            'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
            'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        ],
    } as ArticleTextBlock,
};

export const Normal: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({})],
};

export const Dark: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({}), ThemeDecorator(Theme.RED)],
};

export const NormalRedesigned: Story = {
    args: defaultArgs,
    decorators: [StoreDecorator({}), NewDesignDecorator],
};

export const DarkRedesigned: Story = {
    args: defaultArgs,
    decorators: [
        StoreDecorator({}),
        NewDesignDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};

export const RedRedesigned: Story = {
    args: defaultArgs,
    decorators: [
        StoreDecorator({}),
        NewDesignDecorator,
        ThemeDecorator(Theme.RED),
    ],
};
