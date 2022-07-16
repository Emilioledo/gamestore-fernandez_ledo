import './ListContainer.css'

interface Props {
  greeting: string
}

export default function ListContainer({ greeting }: Props) {
  return <div className="container">{greeting}</div>
}
