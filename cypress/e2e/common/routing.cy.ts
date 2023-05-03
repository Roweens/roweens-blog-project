import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('User is authorized', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Navigate to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Navigate to articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });

    describe('User is unauthorized', () => {
        it('Navigate to main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigate to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Non existing route', () => {
            cy.visit('/profile1231231');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
});
