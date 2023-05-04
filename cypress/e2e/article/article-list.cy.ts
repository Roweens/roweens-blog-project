// const url = 'http://localhost:3000/articles?sort=createdAt&order=desc&search=&type=ALL';
// const arr = url.split('?')[1].split('&');
// const paramObject: Record<string, string> = {};
// arr.forEach((param) => {
//     const [key, value] = param.split('=');
//     paramObject[key] = value;
// });

describe('User navigates to articles list page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('Article List renders', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem.Block').should(
            'have.length.greaterThan',
            3,
        );
    });

    it('Article List view changes', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem.Block').should(
            'have.length.greaterThan',
            3,
        );
        cy.getByTestId('ArticleViewSelector.List').click();
        cy.getByTestId('ArticleListItem.List').should(
            'have.length.greaterThan',
            3,
        );
    });

    it('Article List sort changes with URL', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ListBox.Button.SortField').click();
        cy.getByTestId('ListBox.Option.SortField.title').click();
        cy.url().should('include', 'sort=title');
        cy.getByTestId('ListBox.Button.SortOrder').click();
        cy.getByTestId('ListBox.Option.SortOrder.asc').click();
        cy.url().should('include', 'order=asc');
    });

    it('Article List search', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticlesPageFilters.Search')
            .click()
            .type('Test query1231321312312');
        cy.url().should('include', 'search=Test+query1231321312312');
        cy.getByTestId('ArticleList.NotFound').should('exist');
    });
});
