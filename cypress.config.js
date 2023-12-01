const { defineConfig } = require('cypress');

module.exports = defineConfig({
	viewportWidth: 1800,
	viewportHeight: 1300,
	reporter: 'cypress-mochawesome-reporter',
	retries: 1,
	execTimeout: 30000,
	defaultCommandTimeout: 30000,
	requestTimeout: 30000,
	chromeWebSecurity: false,
	experimentalStudio: true,
	video: false,
	e2e: {
		setupNodeEvents(on, config) {	
			require('cypress-mochawesome-reporter/plugin')(on);
		},
		baseUrl: 'https://almosafer.com',
	},
});
