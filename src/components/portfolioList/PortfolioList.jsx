import "./portfolio.scss"

export default function PortfolioList({title, id, active, setSelected}) {
    
  return (
    <li className={"portfolioList " + (active && "active")}  onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}
