describe('Link Check', () => {
	it('visits the app root url', () => {
		cy.visit('/')
		cy.contains('RouterLink', 'Home')
		cy.contains('RouterLink', 'Chat')
		cy.contains('RouterLink', 'Register')
	})
})