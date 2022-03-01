import "./works.scss"
import {ArrowForwardIos, ArrowBackIos, GridView, Casino, Animation} from '@mui/icons-material';
import { useState, useEffect } from "react";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const data = [
    {
      id: "1",
      icon: <Animation className="icon"/>,
      title: "Landing Page",
      desc:
        "A mobile-first landing page that's optimized to the user's device screen size",
      img: "./assets/Desktop_View.png",
      link: "https://krumbs8749.github.io/Easybank-Landing-Page/"
    },
    {
      id: "2",
      icon: <GridView className="icon"/>,
      title: "Advanced DAO",
      desc:
        "A blockchain development project that focuses on building a basic Decentralised Autonomous Organization (DAO)",
      img: "./assets/DAO.png",
      link: "https://github.com/krumbs8749/AdvancedDAO"
    },
    {
      id: "3",
      icon: <Casino className="icon"/>,
      title: "Realtime Chat App",
      desc:
        "Realtime Chat App that allows users to chat and receive messages in real-time.",
      img: "./assets/Texting.png",
      link: "https://github.com/krumbs8749/Chat-O-Matic"
        
    },
    {
      id: "4",
      icon: <Animation className="icon"/>,
      title: "Quizzical",
      desc: "Quiz game that's created by fetching a list of question set through API call",
      img:
        "assets/Quizzical.png",
      link: "https://krumbs8749.github.io/Quizzical/",
    },
    {
      id: "5",
      icon: <Animation className="icon"/>,
      title: "WordBeater",
      desc:
        "A simple game of typing words the time given (easy: 5s, medium: 3s, hard: 1s).The highest score is stored in localStorage and displayed on the screen.",
      img: "./assets/WordBeater.png",
      link: "https://krumbs8749.github.io/Word-Beater/"
        
    },
    {
      id: "6",
      icon: <Animation className="icon"/>,
      title: "Text-To-Speech",
      desc:
        "A simple website that allows users to type any words and submit them. These words will then be converted to a speech with the voice and language that was selected by users.",
      img: "./assets/TTS.png",
      link: "https://krumbs8749.github.io/text-to-speech/"
        
    },
  ];

  const sliding = val => {
    val === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: data.length - 1) : 
                    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 )
  }
  const transform = matches ? {transform: `translateX(-${currentSlide*100}vw)`} : {transform: `translateX(-${currentSlide*100}vw)`}
  return (
    <div className="works" id="works">
      <h1>Works</h1>
        <div 
          className="slider"
          style={transform}
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
                        <a href={item.link} target="_blank">Projects</a>
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
