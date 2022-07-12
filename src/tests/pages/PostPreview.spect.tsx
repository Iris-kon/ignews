import { render, screen } from "@testing-library/react"
import Post, { getStaticProps } from "../../pages/posts/preview/[slug]"
import { mocked } from "jest-mock"
import { getSession, useSession } from "next-auth/client"
import { getPrismicClient } from "../../services/prismic"
import { useRouter } from "next/router"

jest.mock('../../services/prismic')
jest.mock('next-auth/client')
jest.mock('next/router')

const post = {
    slug: 'new-post',
    title: 'New  post',
    content: '<p>Post excerpt</p>',
    updatedAt: '10 de Abril'
}

describe('Post Page', () => {
    it('renders correctly', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<Post post={post} />)

        expect(screen.getByText('New post')).toBeInTheDocument()
        expect(screen.getByText('Post excerpt')).toBeInTheDocument()
        expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()
    })

    it('redirect users if no subscription is found', async () => {
        const useSessionMocked = mocked(useSession)
        const useRouterMocked = mocked(useRouter)
        const pushMock = jest.fn()

        useSessionMocked.mockReturnValueOnce([
            { activeSubscription: 'fake-active-subscription' }
            , false
        ] as any)

        useRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as any)

        expect(pushMock).toHaveBeenCalledWith('/posts/new-post')
    })    

    
    it('loads initial data', async  () => {
        const getPrismicClientMocked = mocked(getPrismicClient)

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

        const response =  await getStaticProps({ params: { slug: 'new-post' } })

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