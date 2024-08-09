import './App.css'
import { SvgIcons } from '@/components'

function App() {

  return (
    <div>
      <SvgIcons icon={"Logo"} width={40} />
      <h1 className="text-3xl font-bold underline text-dark-500">
        Hello world!
      </h1>
    </div>
  )
}

export default App
