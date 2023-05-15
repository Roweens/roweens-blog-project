import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArticleCreateForm } from './ArticleCreateForm';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { $api } from '@/shared/api/api';
import { articleCreateReducer } from '../../model/slice/articleCreateSlice';
import { Article } from '@/entities/Article';

const article = {
    id: 1,
    user: {
        id: 1,
        username: 'Cognus',
        avatar: 'https://img.championat.com/news/big/k/e/avatar-put-vody-zarabotal-1-7-mlrd-eto-sedmoj-rezultat-v-istorii-kino_16732055081875195205.jpg',
    },
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: ['IT'],
    blocks: [
        {
            id: 1,
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: 2,
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: 3,
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: 4,
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: 5,
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: 6,
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: 7,
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: 8,
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

const options = {
    initialState: {
        user: {
            authData: {
                id: 1,
                username: 'admin',
            },
        },
        articleCreateForm: {
            isLoading: false,
            error: undefined,
            newArticle: {
                id: 0,
                blocks: [],
                createdAt: '',
                img: '',
                subtitle: '',
                title: '',
                type: [],
                views: 0,
            },
            blockCount: 0,
        },
    },
    asyncReducers: { articleCreateForm: articleCreateReducer },
};

const filledOptions = {
    initialState: {
        user: {
            authData: {
                id: 1,
                username: 'admin',
            },
        },
        articleCreateForm: {
            isLoading: false,
            error: undefined,
            newArticle: article,
            blockCount: 0,
        },
    },
    asyncReducers: { articleCreateForm: articleCreateReducer },
};

describe('widgets/Navbar', () => {
    test('Request should be sent', async () => {
        const mockPostRequest = jest.spyOn($api, 'post');
        ComponentRender(<ArticleCreateForm />, options);
        expect(screen.getByTestId('ArticleCreateForm')).toBeInTheDocument();
        await userEvent.type(
            screen.getByTestId('ArticleCreateForm.Title'),
            'RTL test articletitle',
        );
        await userEvent.type(
            screen.getByTestId('ArticleCreateForm.Subtitle'),
            'RTL test article subtitle RTL test article subtitle RTL test article subtitle RTL test article subtitle RTL test article subtitle',
        );
        await userEvent.type(
            screen.getByTestId('ArticleCreateForm.Image'),
            'RTL test article image',
        );
        await userEvent.click(
            screen.getByTestId('ListBox.Button.ArticleCreateSelectType'),
        );
        await userEvent.click(
            screen.getByTestId('ListBox.Option.ArticleCreateSelectType.IT'),
        );
        await userEvent.click(
            screen.getByTestId('ArticleCreateForm.AddBlockButton'),
        );
        await userEvent.click(
            screen.getByTestId('ListBox.Button.ArticleCreateBlock'),
        );
        await userEvent.click(
            screen.getByTestId('ListBox.Option.ArticleCreateBlock.TEXT'),
        );

        await userEvent.type(
            screen.getByTestId('ArticleEditTextBlockForm.Title'),
            'RTL test article block',
        );

        await userEvent.type(
            screen.getByTestId('ArticleEditTextBlockForm.Paragraphs'),
            'RTL test article block',
        );

        await userEvent.click(
            screen.getByTestId('ArticleEditTextBlockForm.SaveButton'),
        );

        await userEvent.click(
            screen.getByTestId('ArticleCreateForm.SaveButton'),
        );

        expect(mockPostRequest).toHaveBeenCalled();
    });
    test('Error check', async () => {
        const mockPostRequest = jest.spyOn($api, 'post');
        ComponentRender(<ArticleCreateForm />, options);
        expect(screen.getByTestId('ArticleCreateForm')).toBeInTheDocument();
        await userEvent.type(
            screen.getByTestId('ArticleCreateForm.Title'),
            'RTL test articletitle',
        );
        await userEvent.type(
            screen.getByTestId('ArticleCreateForm.Subtitle'),
            'RTL test article subtitle RTL test article subtitle RTL test article subtitle RTL test article subtitle RTL test article subtitle',
        );
        await userEvent.type(
            screen.getByTestId('ArticleCreateForm.Image'),
            'RTL test article image',
        );
        await userEvent.click(
            screen.getByTestId('ArticleCreateForm.SaveButton'),
        );
        expect(
            screen.getAllByTestId('ArticleCreateForm.Error.Text')[0],
        ).toBeInTheDocument();

        expect(mockPostRequest).not.toHaveBeenCalled();
    });
    test('Article for edit should fetch', async () => {
        ComponentRender(<ArticleCreateForm articleId={1} />, filledOptions);
        expect(screen.getByTestId('ArticleCreateForm')).toBeInTheDocument();
        expect(screen.getByTestId('ArticleCreateForm.Title')).toHaveValue(
            'Javascript news',
        );
        expect(screen.getByTestId('ArticleCreateForm.Subtitle')).toHaveValue(
            'Что нового в JS за 2022 год?',
        );
    });
});
