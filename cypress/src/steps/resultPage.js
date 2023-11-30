/* eslint-disable indent */
import {utils} from '../utils.js';

export class ResultPageClass {

    /**
     * This function waits for the loading bar to be no longer visible
     */
    waitForSearchToFinish(){
        cy.get('[data-testid="FlightSearchResults__ProgressBar__loading"]').should('have.length', 0);
    }

    /**
     * This function clicks on the cheapest filter
     */
    clickOnSortByCheapestFilter(){
        cy.get('[data-testid="Cheapest__SortBy__selected"]').click();
    }
}

export const resultPage = new ResultPageClass();
