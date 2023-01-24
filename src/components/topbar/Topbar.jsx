import "./topbar.scss"
import { AcUnit, Mail } from '@mui/icons-material';


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">krumbs.</a>
                <div className="itemContainer">
                    <AcUnit className="icon" />
                    <span>+49 176 3774 6846</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span onClick={() => {navigator.clipboard.writeText("krumbs8749@gmail.com")}}>krumbs8749@gmail.com</span>
                </div>
            </div>
            
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line2"></span>
                </div>
                
            </div>
        </div>
    </div>
  )
}
