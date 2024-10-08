import './App.css'
import { LoginDialog, SvgIcons } from '@/components'

function App() {

  return (
    <div className='h-dvh flex flex-col justify-center items-center'>
      <SvgIcons icon={"Logo"} color='#C5C7CA'  width={40} className='mb-12' />
      <LoginDialog />
    </div>
  )
}

export default App
