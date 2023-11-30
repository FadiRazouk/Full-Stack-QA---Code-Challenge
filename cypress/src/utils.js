class UtilClass {
	/**
     * This function will generate random number
     * @param {Number} min to specify the minimum of random number
     * @param {Number} max to specify the maximum of random number
     */
	randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	/**
 * Generates two random dates for a one-week trip.
 *
 * @returns {Object} An object containing the formatted departure and return dates.
 */
	generateTripDates() {
		const currentDate = new Date();
		const departureDate = new Date(currentDate.getTime() + Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000);
		const returnDate = new Date(departureDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    
		const formattedDepartureDate = departureDate.toISOString().split('T')[0];
		const formattedReturnDate = returnDate.toISOString().split('T')[0];
    
		return {
			departureDate: formattedDepartureDate,
			returnDate: formattedReturnDate,
		};
	}

	/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} inputString - The input string to be processed.
 * @returns {string} The input string with the first letter capitalized. If the input is empty or not a string, the original input is returned.
 */

	capitalizeFirstLetter(inputString) {
		if (inputString && typeof inputString === 'string') {
			return inputString.charAt(0).toUpperCase() + inputString.slice(1);
		} else {
			return inputString;
		}
	}
}

const utils = new UtilClass();
export { utils };
