const getByDataTestId = (id, suffix = "") => `[data-testid="${id}"]${suffix}`;

export const progressBar = getByDataTestId("FlightSearchResults__ProgressBar__loading");
export const sortByCheapestButton = getByDataTestId("Cheapest__SortBy__selected");
export const firstResultPrice = getByDataTestId("Group0__PriceLabel");
export const priceRangeOptionButton = getByDataTestId("Collapsed_PriceFilter");
export const priceFilterMinimumText = getByDataTestId("FlightSearchResult__PriceFilter__Min");
export const directFlightsOnlyCheckbox = '[for="direct-flights-only-checkbox"]';
export const directFlightFilter = '[for="stop-0"]';
