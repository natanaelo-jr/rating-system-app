import { Outlet } from 'react-router-dom'
import Aside from './components/Aside'

export default function App(): JSX.Element {
  return (
    <div className="h-screen flex bg-zinc-300">
      <Aside />
      <Outlet />
    </div>
  )
}
