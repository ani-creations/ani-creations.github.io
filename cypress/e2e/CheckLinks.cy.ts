// https://on.cypress.io/api
// CheckLinks.cy.ts
// Cypress E2E test to check all links on the homepage

describe('Check all links on the homepage', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should have no broken links', () => {
		cy.get('a[href]').each(($el) => {
			const href = $el.prop('href');
			// Only check http(s) links, skip anchors and mailto
			if (href && href.startsWith('http')) {
				cy.request({
					url: href,
					failOnStatusCode: false
				}).then((resp) => {
					expect(resp.status).to.be.lessThan(400);
				});
			}
		});
	});
});