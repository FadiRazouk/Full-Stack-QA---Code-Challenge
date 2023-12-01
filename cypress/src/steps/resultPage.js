/* eslint-disable indent */
const locators = require("../../src/locators/index");

export class ResultPageClass {
    /**
     * This function waits for the loading bar to be no longer visible
     */
    waitForSearchToFinish() {
        cy.get(locators.progressBar).should("have.length", 0);
    }

    /**
     * This function clicks on the cheapest filter
     */
    clickOnSortByCheapestFilter() {
        cy.get(locators.sortByCheapestButton).click();
    }

    /**
     * This function clicks on the direct Flights Only Checkbox
     */
    CheckDirectFlightsOnly() {
        cy.get(locators.directFlightsOnlyCheckbox).click();
    }

    /**
     * This function verifies that the first result after clicking the cheapest option filter equals the minimum value in the price range
     */

    compareFilterPriceWithPriceRange() {
        const regex = /[\d|,|.|e|E|\+]+/g;

        cy.get(locators.firstResultPrice)
            .invoke("text")
            .then((cheapestFlight) => {
                cy.get(locators.priceRangeOptionButton).click();
                cy.get(locators.priceFilterMinimumText)
                    .invoke("text")
                    .then((minimumPrice) => {
                        expect(minimumPrice.match(regex)[0]).eq(cheapestFlight);
                    });
            });
    }
}

export const resultPage = new ResultPageClass();
