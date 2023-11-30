/* eslint-disable indent */
import {utils} from '../utils.js';

export class searchPageClass {
	/**
     * This function selects the Cabin Class (Economy, Premium Economy, Business, First)
     */
	selectCabinClass(cabinClass) {
		cy.get('[data-testid="FlightSearchBox__CabinTypeDropdown"]').click();
		cy.get(`[data-testid="FlightSearchCabinSelection__${utils.capitalizeFirstLetter(cabinClass)}Option"]`).click();
	}

	/**
     * This function selects the number of passengers
     */
	passengersNumber(adult = 1) {
		cy.get('[data-testid="FlightSearchBox__PaxDropdown"]').click();
        
		cy.get('[data-testid="FlightSearchPAXSelection__AdultsCountLabel"]').invoke('text').then((adultNumber)=>{
			if (adult > adultNumber) {
				for(let i=1; i <= adult-adultNumber; i++){
					cy.get('[data-testid="FlightSearchPAXSelection__AdultsPlusButton"]').click();
				}
			}else if (adult < adultNumber) {
				for(let i=1; i <=adultNumber-adult; i++){
					cy.get('[data-testid="FlightSearchPAXSelection__AdultsMinusButton"]').click();
				}
			}
		});
		cy.get('[data-testid="FlightSearchPAXSelection__AdultsCountLabel"]').should('have.text', adult);
	}

	/**
     * Click on the search button
     */
	clickOnSearchButton(){
		cy.get('[data-testid="FlightSearchBox__SearchButton"]').eq(0).click();
	}

    /**
     * Select two dates in the future the second date is one week in the future from the first date.
     */

    selectFutureDate(){
        const dates = utils.generateTripDates();

        cy.get('[data-testid="FlightSearchBox__FromDateButton"]').click();
        cy.get(`[data-testid="FlightSearchCalendar__${dates.departureDate}"]`).click();
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').click();
        cy.get(`[data-testid="FlightSearchCalendar__${dates.returnDate}"]`).click();
    }
}

export const searchPage = new searchPageClass();
