import { navigation } from "../../src/steps/navigation";
import { searchPage } from "../../src/steps/searchPage";
import { resultPage } from "../../src/steps/resultPage";
import { utils } from "../../src/utils";
const locators = require("../../src/locators/index");

describe("almosafer UI test", () => {
        const originCity = ["DXB", "AUH", "SHJ", "JED", "RUH"];
        const destinationCity = ["AMM", "CAI", "DEL", "KHI", "PAR"];
        it("Verify auto-complete functionality for origin and destination flights @ID: 1", () => {
                navigation.navigateToHomePage();
                searchPage.byPassPreferredCountry();
                searchPage.verifyCurrentUrl("/en");

                cy.get(locators.flightOriginInput).type("Amman");
                cy.get(locators.autoCompleatFirstOptionText).should(
                        "have.text",
                        "Queen Alia International Airport"
                );
                cy.get(locators.flightDestinationInput).type("JED", { force: true });
                cy.get(locators.autoCompleatFirstOptionText).should(
                        "have.text",
                        "King Abdulaziz International Airport"
                );
        });

        it("Verify selecting one-way option should remove the return date @ID: 2", () => {
                navigation.navigateToHomePage();
                searchPage.byPassPreferredCountry();
                cy.get(locators.oneWayButton).click();
                cy.get(locators.toDateButton).should("have.length", 0);
                cy.get(locators.addReturnButton).click();
                cy.get(locators.toDateButton).should("have.length", 1);
        });

        it("Verify the required fields (destination) @ID: 3", () => {
                navigation.navigateToHomePage();
                searchPage.byPassPreferredCountry();
                cy.get(locators.flightOriginInput).type("JED");
                cy.get(locators.autoCompleatFirstOption).click();
                searchPage.clickOnSearchButton();
                cy.contains("Please enter arrival city or airport").should("be.visible");
        });

        it("Verify the required fields (origin) @ID: 4", () => {
                navigation.navigateToHomePage();
                searchPage.byPassPreferredCountry();
                cy.get(locators.flightDestinationInput).type("JED");
                cy.get(locators.autoCompleatFirstOption).click();
                searchPage.clickOnSearchButton();
                cy.contains(" Please enter a departure city or airport").should(
                        "be.visible"
                );
        });

        it("Verify the user needs at least one adult to be able to search @ID: 5", () => {
                navigation.navigateToHomePage();
                searchPage.byPassPreferredCountry();
                searchPage.selectOriginAndDestination(originCity, destinationCity);
                cy.get(locators.selectPassengerNumberDownDown).click();
                cy.get(locators.currentAdultCount).should("have.text", "1");
                cy.get(locators.adultsMinusButton).click();
                cy.get(locators.adultsMinusButton).click();
                cy.get(locators.currentAdultCount).should("have.text", "1");
        });

        it("Verify the price of the first listed flight when cheapest filter option is turned on matches the minimum range in the price filter, @ID: 6", () => {
                cy.on("uncaught:exception", (e, runnable) => {
                        console.log("error", e);
                        console.log("runnable", runnable);
                        return false;
                });

                navigation.navigateToHomePage();
                searchPage.byPassPreferredCountry();
                searchPage.verifyCurrentUrl("/en");
                searchPage.selectOriginAndDestination(originCity, destinationCity);
                searchPage.selectFutureDate();
                searchPage.selectCabinClass("economy");
                searchPage.passengersNumber();
                searchPage.clickOnSearchButton();
                resultPage.waitForSearchToFinish();
                resultPage.clickOnSortByCheapestFilter();
                resultPage.compareFilterPriceWithPriceRange();
        });
});
