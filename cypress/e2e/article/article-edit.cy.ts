const articleId = 2;

describe('Article edit page visit', () => {
    beforeEach(() => {
        cy.login();
        cy.visit(`/article/${articleId}/edit`);
    });
    it('Article create page loads', () => {
        cy.getByTestId('ArticleEditPage').should('exist');
    });
    it('Article edit by id works', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-edit.json',
        });
        cy.getByTestId('ArticleCreateForm.Title').should(
            'have.value',
            'Typescript news',
        );
        cy.getByTestId('ListBox.Button.ArticleCreateSelectType').click();
        cy.getByTestId('ListBox.Button.ArticleCreateSelectType').should(
            'exist',
        );
        cy.getByTestId('ArticleCreateBlock').should('have.length', 8);
    });
});
