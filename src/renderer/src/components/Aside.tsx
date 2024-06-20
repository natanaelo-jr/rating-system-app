import { Home, Bolt, History, UserRound } from 'lucide-react'
import AsideButton from './AsideButton'

export default function Aside() {
  return (
    <aside className="my-5 mx-4">
      <div className="py-3 bg-indigo-900 h-full rounded-xl flex flex-col justify-between">
        <div className="flex-col mt-3 w-40">
          <AsideButton path="/" icon={Home} text="Home" />
          <AsideButton path="/players/" icon={UserRound} text="Players" />
          <AsideButton path="/history/" icon={History} text="History" />
        </div>
        <div>
          <AsideButton path="configs" icon={Bolt} text="Config" />
        </div>
      </div>
    </aside>
  )
}
