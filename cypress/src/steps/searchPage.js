/* eslint-disable indent */
import { utils } from "../utils.js";
const locators = require("../../src/locators/index");

export class searchPageClass {
	/**
	 * This function selects the Cabin Class (Economy, Premium Economy, Business, First)
	 */
	selectCabinClass(cabinClass) {
		cy.get(locators.cabinClassDropdown).click();
		cy.get(locators.cabinClassOptions(cabinClass)).click();
	}

	/**
	 * This function selects the number of passengers
	 */
	passengersNumber(adult = 1) {
		cy.get(locators.selectPassengerNumberDownDown).click();

		cy.get(locators.currentAdultCount)
			.invoke("text")
			.then((adultNumber) => {
				if (adult > adultNumber) {
					for (let i = 1; i <= adult - adultNumber; i++) {
						cy.get(locators.plusAdultButton).click();
					}
				} else if (adult < adultNumber) {
					for (let i = 1; i <= adultNumber - adult; i++) {
						cy.get(locators.adultsMinusButton).click();
					}
				}
			});
		cy.get(locators.currentAdultCount).should("have.text", adult);
	}

	/**
	 * Click on the search button
	 */
	clickOnSearchButton() {
		cy.get(locators.searchFlightButton).eq(0).click();
	}

	/**
	 * Select two dates in the future the second date is one week in the future from the first date.
	 */

	selectFutureDate() {
		const dates = utils.generateTripDates();

		cy.get(locators.fromDateButton).click();
		cy.get(locators.selectDate(dates.departureDate)).click();
		cy.get(locators.toDateButton).click();
		cy.get(locators.selectDate(dates.returnDate)).click();
	}

	/**
	 * This function selects two random cities from two arrays
	 */

	selectOriginAndDestination(origin, destination) {
		cy.get(locators.flightOriginInput).type(
			origin[utils.randomIntFromInterval(0, 4)]
		);
		cy.get(locators.autoCompleatFirstOption).click();
		cy.get(locators.flightDestinationInput).type(
			destination[utils.randomIntFromInterval(0, 4)]
		);
		cy.get(locators.autoCompleatFirstOption).click();
	}

	/**
	 * This function clicks on continue button for the preferred country popup
	 */

	byPassPreferredCountry() {
		cy.get(locators.preferredCountryContinueButton).click();
	}

	/**
	 * This function Verifies the current URL to contain a string
	 */

	verifyCurrentUrl(text) {
		cy.url().should("include", text);
	}
}

export const searchPage = new searchPageClass();
