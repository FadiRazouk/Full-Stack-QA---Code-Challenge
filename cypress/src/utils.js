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
		const departureDate = new Date(
			currentDate.getTime() +
			Math.floor(Math.random() * 14) * 24 * 60 * 60 * 1000
		);
		const returnDate = new Date(
			departureDate.getTime() + 7 * 24 * 60 * 60 * 1000
		);

		const formattedDepartureDate = departureDate.toISOString().split("T")[0];
		const formattedReturnDate = returnDate.toISOString().split("T")[0];

		return {
			departureDate: formattedDepartureDate,
			returnDate: formattedReturnDate,
		};
	}

	convertDateFormat(inputDateString) {
		const date = new Date(inputDateString);

		const options = { year: "numeric", day: "numeric", month: "long" };
		const formattedDateString = date.toLocaleDateString("en-US", options);

		return formattedDateString;
	}

	/**
	 * Capitalizes the first letter of a given string.
	 *
	 * @param {string} inputString - The input string to be processed.
	 * @returns {string} The input string with the first letter capitalized. If the input is empty or not a string, the original input is returned.
	 */

	capitalizeFirstLetter(inputString) {
		if (inputString && typeof inputString === "string") {
			return inputString.charAt(0).toUpperCase() + inputString.slice(1);
		} else {
			return inputString;
		}
	}

	/**
	 * Gets the date of one week ago from the current date.
	 *
	 * @returns {string} The formatted date in the "ddd MMM DD YYYY" format representing one week ago from the current date.
	 */
	getDateOneWeekAgo() {
		const currentDate = new Date();
		const oneWeekAgo = new Date(
			currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
		);

		const formatter = new Intl.DateTimeFormat("en-US", {
			weekday: "short",
			month: "short",
			day: "numeric",
			year: "numeric",
		});

		const formattedDate = formatter
			.formatToParts(oneWeekAgo)
			.map((part) => (part.type === "literal" ? " " : part.value))
			.join("");

		return formattedDate;
	}
}

const utils = new UtilClass();
export { utils };
