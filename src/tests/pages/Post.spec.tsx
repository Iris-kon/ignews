import { render, screen } from "@testing-library/react"
import Post, { getServerSideProps } from "../../pages/posts/[slug]"
import { mocked } from "jest-mock"
import { getSession } from "next-auth/client"
import { getPrismicClient } from "../../services/prismic"

jest.mock('../../services/prismic')
jest.mock('next-auth/client')

const post = {
    slug: 'new-post',
    title: 'New  post',
    content: '<p>Post excerpt</p>',
    updatedAt: '10 de Abril'
}

describe('Post Page', () => {
    it('renders correctly', () => {
        render(<Post post={post} />)

        expect(screen.getByText('New post')).toBeInTheDocument()
        expect(screen.getByText('Post excerpt')).toBeInTheDocument()
    })

    it('redirect users if no subscription is found', async () => {
        const getSessionMocked = mocked(getSession)

        getSessionMocked.mockResolvedValueOnce(null)

        const response =  await getServerSideProps({params: { slug: 'new-post' }} as any)

        expect(response).toEqual(
            expect.objectContaining({
                redirect: expect.objectContaining({
                    destination: '/'
                })
            })
        )
    })

    it('loads initial data', async  () => {
        const getSessionMocked = mocked(getSession)
        const getPrismicClientMocked = mocked(getPrismicClient)

        getSessionMocked.mockResolvedValueOnce({
            activeSubscription: 'fake-active-subscription'
        } as any)

        getPrismicClientMocked.mockReturnValueOnce({
            getByUID: jest.fn().mockResolvedValueOnce({
                data: {
                    title: [
                        { type: 'heading', text: 'New post' }
                    ],
                    constent: [
                        { type: 'paragraph', text: 'Post content' }
                    ]
                },
                last_publication_date: '04-01-2021'
            }) 
        } as any)

        const response =  await getServerSideProps({params: { slug: 'new-post' }} as any)

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    post: {
                        slug: 'new-post',
                        title: 'New Post',
                        content: '<p>Post content</p>',
                        updatedAt: '01 de abril de 2021'
                    }
                }
            })
        )
    })
})