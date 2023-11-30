import { utils } from '../../src/utils';
import { navigation } from '../../src/steps/navigation';
import { searchPage } from '../../src/steps/searchPage';
import { resultPage } from '../../src/steps/resultPage';

describe('a', () => {
	it(' TBD, @ID: 1', () => {
        const regex =  /[\d|,|.|e|E|\+]+/g;
        const originCity = ['DXB', 'AUH', 'SHJ', 'JED', 'RUH']
        const distCir = ['AMM', 'CAI', 'DEL', 'KHI', 'PAR']
        navigation.navigateToHomePage();
        cy.get('.cta__continue').click();
        cy.url().should('include', '/en')
        cy.get('[data-testid="FlightSearchBox__FromAirportInput"]').type(originCity[utils.randomIntFromInterval(0, 4)])
        cy.get('[data-testid="FlightSearchBox__AirportOption0"]').click();
        cy.get('[data-testid="FlightSearchBox__ToAirportInput"]').type(distCir[utils.randomIntFromInterval(0, 4)])
        cy.get('[data-testid="FlightSearchBox__AirportOption0"]').click();


        searchPage.selectFutureDate();


        searchPage.selectCabinClass('economy')
        searchPage.passengersNumber()
        searchPage.clickOnSearchButton()
        resultPage.waitForSearchToFinish()
        resultPage.clickOnSortByCheapestFilter()

        cy.get('[data-testid="Group0__PriceLabel"]').invoke('text').then((cheapestFlight)=>{
            cy.get('[data-testid="Collapsed_PriceFilter"]').click();
            cy.get('[data-testid="FlightSearchResult__PriceFilter__Min"]').invoke('text').then((minimumPrice)=>{
                expect((minimumPrice).match(regex)[0]).eq(cheapestFlight)
            })
        })
	});
});
