import { FeedCard } from '@/components/FeedCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <main className="m-auto max-w-[700px] py-[70px] mobile:p-5">
            <FeedCard />
        </main>
    )
}
