import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList.jsx"
import { useEffect, useState } from "react"
import {featuredPortfolio,
        blockchainPortfolio,
        webPortfolio,
      } from "../../data.js"

export default function Portfolio() {

  const [selected, setSelected] = useState("web")
  const [data, setData] = useState([])

  const list = [
    {
        id: "web",
        title: "Web Dev"
    },
    {
        id: "featured",
        title: "Featured"
    },
    {
        id: "blockchain",
        title: "Blockchain Dev"
    },
  ];

  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "blockchain":
        setData(blockchainPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map(item => <PortfolioList 
                              title={item.title} 
                              id={item.id}
                              active={selected === item.id}  
                              setSelected={setSelected}
                            />
          )}
        </ul>
        <div className="container">
            {data.map(item => {
              return(
                <a href={item.link} target="_blank" className="item">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </a>
              )
            })}
          
         
        </div>

        <div className="container"></div>
    </div>
  )
}
