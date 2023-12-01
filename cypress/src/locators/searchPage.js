import {utils} from '../utils.js';
const getByDataTestId = (id, suffix='') => `[data-testid="${id}"]${suffix}`;

export const addReturnButton = getByDataTestId('FlightSearchBox__AddReturnButton');
export const adultsMinusButton = getByDataTestId('FlightSearchPAXSelection__AdultsMinusButton');
export const autoCompleatFirstOption = getByDataTestId('FlightSearchBox__AirportOption0');
export const autoCompleatFirstOptionText = getByDataTestId('FlightSearchBox__AirportOption1', '> div > div > span');
export const cabinClassDropdown = getByDataTestId('FlightSearchBox__CabinTypeDropdown');
export const cabinClassOptions = (cabinClass) => `[data-testid="FlightSearchCabinSelection__${utils.capitalizeFirstLetter(cabinClass)}Option"]`;
export const currentAdultCount = getByDataTestId('FlightSearchPAXSelection__AdultsCountLabel');
export const flightDestinationInput = getByDataTestId('FlightSearchBox__ToAirportInput');
export const flightOriginInput = getByDataTestId('FlightSearchBox__FromAirportInput');
export const fromDateButton = getByDataTestId('FlightSearchBox__FromDateButton');
export const oneWayButton = getByDataTestId('FlightSearchBox__OneWayButton');
export const pastDate = (dates) => `[aria-label="${dates}"]`
export const plusAdultButton = getByDataTestId('FlightSearchPAXSelection__AdultsPlusButton');
export const preferredCountryContinueButton = '.cta__continue'
export const previousMonthButton = getByDataTestId('FlightSearchCalendar__PreviousMonthButton');
export const searchFlightButton = getByDataTestId('FlightSearchBox__SearchButton');
export const selectDate = (dates) => `[data-testid="FlightSearchCalendar__${dates}"]`
export const selectPassengerNumberDownDown = getByDataTestId('FlightSearchBox__PaxDropdown');
export const toDateButton = getByDataTestId('FlightSearchBox__ToDateButton');
