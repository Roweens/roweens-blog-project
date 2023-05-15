let currentArticleId: number;

describe('User navigates to article page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`article/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('Article content fetches and renders', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Article Recommendations List renders', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('Comment form is working', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('Article rating is working', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRating(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
