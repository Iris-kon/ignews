import { render, screen } from "@testing-library/react"
import Home, { getStaticProps } from "../../pages"
import { mocked } from "jest-mock"
import { stripe } from "../../services/stripe"

jest.mock('next/router')
jest.mock('../../services/stripe')
jest.mock('next-auth/client', () => {
    return {
        useSession: () => [null, false]
    }
})

describe('Home Page', () => {
    it('renders correctly' , () => {
        render(<Home product={{priceId: 'fake-price-id', amount: '$10,00'}}  />)

        expect(screen.getByText('for $10,00 month')).toBeInTheDocument()
    })

    it('loads inital data',async () => {
        const restrivePricesMocked = mocked(stripe.prices.retrieve)

        restrivePricesMocked.mockResolvedValueOnce({
            id: 'fake-price-id',
            unit_amount: 1000,
        } as any)

        const response = await getStaticProps({})

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    product: {
                        priceId: 'fake-price-id',
                        amount: '$10.00'
                    }
                }
            })
        )
    })
})