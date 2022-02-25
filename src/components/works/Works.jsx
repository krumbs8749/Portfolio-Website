import "./works.scss"
import {ArrowForwardIos, ArrowBackIos, GridView, Casino, Animation} from '@mui/icons-material';
import { useState } from "react";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: <GridView className="icon"/>,
      title: "Advanced DAO",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "./assets/DAO.png"
    },
    {
      id: "2",
      icon: <Casino className="icon"/>,
      title: "Tenzies",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "./assets/Tenzies.png"
        
    },
    {
      id: "3",
      icon: <Animation className="icon"/>,
      title: "WordBeater",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "./assets/WordBeater.png"
        
    },
  ];

  const sliding = val => {
    val === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: data.length - 1) : 
                    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 )
  }
  return (
    <div className="works" id="works">
        <div 
          className="slider"
          style={{transform: `translateX(-${currentSlide*100}vw)`}}
        >
          {data.map(item => {
            return (
                <div className="container">
                  <div className="item">
                    <div className="left">
                      <div className="leftContainer">
                        <div className="imgContainer">
                          {item.icon}
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <span>Projects</span>
                      </div>
                    </div>
                    <div className="right">
                      <img src={item.img} alt=""/>
                    </div>
                  </div>
                </div>
              
            )
          })}
        </div>
      <ArrowBackIos className="arrow back" onClick={() => sliding("left")} />
      <ArrowForwardIos className="arrow foward" onClick={() => sliding()} />
    </div>
  )
}
