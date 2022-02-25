import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList.jsx"
import { useEffect, useState } from "react"
import {featuredPortfolio,
        blockchainPortfolio,
        webPortfolio,
      } from "../../data.js"

export default function Portfolio() {

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list = [
    {
        id: "featured",
        title: "Featured"
    },
    {
        id: "blockchain",
        title: "Blockchain Dev"
    },
    {
        id: "web",
        title: "Web Dev"
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
                <div className="item">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
              )
            })}
          
         
        </div>

        <div className="container"></div>
    </div>
  )
}
