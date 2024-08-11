import { AddFeed, FeedCard } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <main className="m-auto max-w-[700px] py-[70px] mobile:p-5">

            <div className={"w-full max-w-[580px] mb-10"}>
                <h1 className="mb-3 text-xl font-medium leading-none text-light-500">Hello Jane</h1>
                <p className="text-base font-normal text-light-300">
                    How are you doing today? Would you like to share something with the community 🤗
                </p>
            </div>

            <AddFeed />

            <FeedCard />
        </main>
    )
}
