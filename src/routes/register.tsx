import { SvgIcons, RegisterDialog } from '@/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
    component: () => (
        <div className='h-dvh flex flex-col justify-center items-center'>
            <SvgIcons icon={"Logo"} color='#C5C7CA' width={40} className='mb-12' />

            <RegisterDialog />
        </div>
    )
})