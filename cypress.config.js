const { defineConfig } = require('cypress');

module.exports = defineConfig({
	viewportWidth: 1800,
	viewportHeight: 1300,
	retries: 1,
	execTimeout: 30000,
	defaultCommandTimeout: 30000,
	requestTimeout: 30000,
	chromeWebSecurity: false,
	experimentalStudio: true,
	video: false,
	e2e: {
		setupNodeEvents(on, config) {		},
		baseUrl: 'https://almosafer.com',
	},
});
