import { screen } from '@testing-library/react'
import BlogPage from 'pages/Blog'
import renderWithProviders from 'testUtils'

describe('<Blog />', () => {
	it('renders', async () => {
		renderWithProviders(<BlogPage />)

		expect(
			await screen.findByText('Why Design Matters for the Small Business')
		).toBeInTheDocument()
	})
})
