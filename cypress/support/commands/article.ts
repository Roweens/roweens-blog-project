import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    id: '999',
    userId: '1',
    title: 'Typescript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
    views: 1022,
    createdAt: '22.02.2021',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { authorization: 'auth' },
            body: article ?? defaultArticle,
        })
        .then((response) => response.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'auth' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
