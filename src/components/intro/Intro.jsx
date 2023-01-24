import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from 'ityped';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Intro() {

  const textRef = useRef();


  useEffect(() => {
    init(textRef.current, {
       showCursor: true, 
       backDelay:  1500,
       backSpeed: 60,
       strings: ['Developer', 'Designer', 'Student' ] 
    })
  }, [])

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/man.png" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Ikram Hafidz</h1>
            <h3><span ref={textRef}></span></h3>
            <a href="#portfolio">
              <KeyboardArrowDownIcon className="icon"/>
            </a>
          </div>
        </div>
    </div>
  )
}
