export const setRating = (
    starsCount: number = 5,
    feedback: string = 'feedback',
) => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.SendBtn').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
