import React from 'react'
import "./skills.scss"
import {Icon_javascript, Icon_cplusplus, Icon_java, Icon_php, Icon_html, Icon_scss, Icon_solidity} from './skills_assets/icon_languages'
import {Icon_react, Icon_mysql, Icon_d3} from './skills_assets/Icon_technologies'

function Skills() {
  return (
    <div className='Skills'>
        <h1>Skills</h1>
        <div className='container'>
            <div className="groups">
                <span>Languages</span>
                <span>Technologies</span>
                {/* <span>Experience</span> */}
            </div>
            <div className="items">
                
                <div className="language-items">
                    <Icon_cplusplus />
                    <Icon_java />
                    <Icon_solidity />
                    <Icon_javascript />
                    <Icon_php />
                    <Icon_html />
                    <Icon_scss />
                </div>
                <div className="technologie-items">
                    <Icon_react />
                    <Icon_mysql />
                    <Icon_d3 />
                </div>
                {/* <div className="experience-items"></div> */}
            </div>
        </div>
    </div>
  )
}

export default Skills