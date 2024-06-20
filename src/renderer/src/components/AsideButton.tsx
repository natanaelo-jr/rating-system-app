import { Link } from 'react-router-dom'

export default function AsideButton(props) {
  return (
    <Link to={props.path}>
      <div className="flex justify-start gap-2 text-indigo-200 hover:bg-indigo-800 hover:text-indigo-50 w-40 py-4 px-8">
        <props.icon />
        <span className="text-sm uppercase tracking-wider">{props.text}</span>
      </div>
    </Link>
  )
}
