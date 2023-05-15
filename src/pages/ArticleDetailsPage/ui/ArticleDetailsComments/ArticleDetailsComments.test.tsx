import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { $api } from '@/shared/api/api';
import { addCommentFormReducer } from '../../../../features/addCommentForm/testing';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Article, ArticleType } from '@/entities/Article';
import { articleDetailsReducer } from '@/entities/Article/testing';

const options = {
    initialState: {
        user: {
            authData: {
                id: 1,
                username: 'admin',
            },
        },
        articleDetails: {
            data: {
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
                type: [ArticleType.IT],
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
                        id: 4,
                        type: 'CODE',
                        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
                    },
                    {
                        id: 5,
                        type: 'TEXT',
                        title: 'Заголовок этого блока',
                        paragraphs: [
                            'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                            'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                        ],
                    },
                    {
                        id: 2,
                        type: 'IMAGE',
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Рисунок 1 - скриншот сайта',
                    },
                    {
                        id: 3,
                        type: 'CODE',
                        code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
                    },
                    {
                        id: 7,
                        type: 'TEXT',
                        title: 'Заголовок этого блока',
                        paragraphs: [
                            'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                            'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                        ],
                    },
                    {
                        id: 8,
                        type: 'IMAGE',
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Рисунок 1 - скриншот сайта',
                    },
                    {
                        id: 9,
                        type: 'TEXT',
                        title: 'Заголовок этого блока',
                        paragraphs: [
                            'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        ],
                    },
                ],
            } as Article,
        },
        addCommentForm: {
            text: '',
        },
    },
    asyncReducers: {
        addCommentForm: addCommentFormReducer,
        articleDetails: articleDetailsReducer,
    },
};

describe('features/ArticleDetailsComments', () => {
    test('Send article comment works', async () => {
        ComponentRender(<ArticleDetailsComments id="1" />, options);
        const mockPostRequest = jest.spyOn($api, 'post');
        expect(
            await screen.findByTestId('AddCommentForm.Input'),
        ).toBeInTheDocument();

        await userEvent.type(
            await screen.findByTestId('AddCommentForm.Input'),
            'Test RTL Comment',
        );

        expect(screen.getByTestId('AddCommentForm.Input')).toHaveValue(
            'Test RTL Comment',
        );

        await userEvent.click(
            await screen.findByTestId('AddCommentForm.Button'),
        );
        expect(mockPostRequest).toHaveBeenCalled();
    });
});
