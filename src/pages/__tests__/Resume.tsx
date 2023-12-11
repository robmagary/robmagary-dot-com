import { screen } from '@testing-library/react'
import ResumePage from 'pages/Resume'
import renderWithProviders from 'testUtils'

describe('<Resume />', () => {
	it('renders', async () => {
		renderWithProviders(<ResumePage />)

		expect(await screen.findByText('resume')).toBeInTheDocument()
	})
})
