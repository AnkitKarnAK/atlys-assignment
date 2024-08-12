import { AddFeed, FeedCard, LoginDialog, RegisterDialog } from '@/components'
import { Dialog } from '@/components/base/Dialog';
import { initialPosts } from '@/data/posts';
import { useAuthUser, useIsLoggedIn } from '@/store/auth-store'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const [dialogOpenFor, setDialogOpenFor] = useState<"login" | "register" | null>(null);


    const authUser = useAuthUser();
    const isLoggedIn = useIsLoggedIn();

    const openLoginDialog = () => setDialogOpenFor("login");
    const openRegisterDialog = () => setDialogOpenFor("register");
    const closeDialog = () => setDialogOpenFor(null);



    return (
        <>
            <main className="m-auto max-w-[700px] py-[70px] mobile:p-5">

                <div className="absolute top-0 right-2 p-5 text-xs text-light-500">
                    {isLoggedIn ? <button className="underline">Logout</button> :
                        <>
                            <button onClick={() => setDialogOpenFor("login")} className="underline">Login</button> | <button onClick={() => setDialogOpenFor("register")} className="underline">Register</button>
                        </>}
                </div>

                <div className={"w-full max-w-[580px] mb-10"}>
                    <h1 className="mb-3 text-xl font-medium leading-none text-light-500">Hello {authUser?.firstName || authUser?.username || "User"}</h1>
                    <p className="text-base font-normal text-light-300">
                        How are you doing today? Would you like to share something with the community 🤗
                    </p>
                </div>

                <AddFeed />

                {
                    initialPosts.map(post => <FeedCard key={post.id} post={post} />)
                }
            </main>

            {
                dialogOpenFor === "login" &&
                <Dialog isOpen={dialogOpenFor === "login"} onClose={closeDialog}>
                    <LoginDialog openRegisterDialog={openRegisterDialog} />
                </Dialog>
            }

            {
                dialogOpenFor === "register" &&
                <Dialog isOpen={dialogOpenFor === "register"} onClose={closeDialog}>
                    <RegisterDialog openLoginDialog={openLoginDialog} />
                </Dialog>
            }
        </>
    )
}
