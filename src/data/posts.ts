export type Post = {
    id: string
    userId: string
    text: string
    emoji: string
    createdAt: string
    updatedAt: string
    commentIds: string[]
}

export const initialPosts: Post[] = [
    {
        id: 'post1',
        userId: 'user1',
        text: 'Feeling great today. labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        emoji: '🙂',
        createdAt: '2024-08-01 12:00:00',
        updatedAt: '2024-08-01 12:00:00',
        commentIds: ['comment1', 'comment2']
    },
    {
        id: 'post2',
        userId: 'user2',
        text: 'Feeling sad today. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        emoji: '😢',
        createdAt: '2024-07-01 12:00:00',
        updatedAt: '2024-07-01 12:05:00',
        commentIds: ['comment3, comment4, comment5']
    },
    {
        id: 'post3',
        userId: 'user1',
        text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
        emoji: '😎',
        createdAt: '2024-06-01 12:00:00',
        updatedAt: '2024-06-01 12:00:00',
        commentIds: []
    },
    {
        id: 'post4',
        userId: 'user3',
        text: 'To login use username as `userone` and password as `Test@1234`',
        emoji: '😇',
        createdAt: '2024-05-01 12:00:00',
        updatedAt: '2024-05-01 12:00:00',
        commentIds: ['comment6']
    }
]