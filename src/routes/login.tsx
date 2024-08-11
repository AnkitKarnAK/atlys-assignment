import { LoginDialog, SvgIcons } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
    component: () => (
        <main className="h-screen m-auto max-w-[700px] mobile:p-5 flex flex-col justify-center items-center">
            <SvgIcons icon={"Logo"} color='#C5C7CA' width={40} className='mb-12' />
            <LoginDialog />
        </main>
    )
})