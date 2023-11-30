import utils from '../utils.js';

export class NavigationClass {
	/**
     * This function navigates to homepage
     */
	navigateToHomePage() {
		cy.visit('/en');
	}
}

export const navigation = new NavigationClass();
