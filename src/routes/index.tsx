import { AddFeed, FeedCard } from '@/components'
import { useAuthUser, useIsLoggedIn } from '@/store/auth-store'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {

    const authUser = useAuthUser();
    const isLoggedIn = useIsLoggedIn();



    return (
        <>
            <main className="m-auto max-w-[700px] py-[70px] mobile:p-5">

                {isLoggedIn && <div className="absolute top-0 right-2 p-5 text-xs text-light-500">
                    <button className="underline">Logout</button>
                </div>}

                <div className={"w-full max-w-[580px] mb-10"}>
                    <h1 className="mb-3 text-xl font-medium leading-none text-light-500">Hello {authUser?.name || authUser?.username || "User"}</h1>
                    <p className="text-base font-normal text-light-300">
                        How are you doing today? Would you like to share something with the community 🤗
                    </p>
                </div>

                <AddFeed />

                <FeedCard />
            </main>
        </>
    )
}
