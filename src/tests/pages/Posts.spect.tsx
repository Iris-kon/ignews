import { render, screen } from "@testing-library/react"
import Posts, { getStaticProps } from "../../pages/posts"
import { mocked } from "jest-mock"
import { getPrismicClient } from "../../services/prismic"

jest.mock('../../services/prismic')

const posts = [
    {
        slug: 'new-post',
        title: 'New  post',
        excerpt: 'Post excerpt',
        updatedAt: '10 de Abril'
    }
]

describe('Posts Page', () => {
    it('renders correctly' , () => {
        render(<Posts posts={posts} />)

        expect(screen.getByText('New post')).toBeInTheDocument()
    })

    it('loads initial data', async () => {
        const getPrismicClientMocked = mocked(getPrismicClient)

        getPrismicClientMocked.mockReturnValueOnce({
            query: jest.fn().mockResolvedValueOnce({
                results: [
                    {
                        uid: 'new-post',
                        data: {
                            title: [
                                { type: 'heading', text: 'New post' }
                            ],
                            constent: [
                                { type: 'paragraph', text: 'Post excerpt' }
                            ]
                        },
                        last_publication_date: '04-01-2021'
                    }
                ]
            })
        } as any)

        const response = getStaticProps({})

        expect(response).toEqual(
            expect.objectContaining({
                props: {
                    posts: [{
                        slug: 'new-post',
                        title: 'New  post',
                        excerpt: 'Post excerpt',
                        updatedAt: '01 de abril de 2021'
                    }]
                }
            })
        )
    })
})