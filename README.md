# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The Project

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

This project is broken down to a few components:
  - topbar (menu - opened when click)
  - intro
  - portfolio (portfolioList - allow selection of project groups )
  - Works
  - contact

These components are then imported to the App.jsx (main component) and finally rendered to the DOM in index.js 

### Screenshot

**Desktop View**
 -[Topbar & Intro](./public/assets/Topbar_&_Intro.png)
 -[Portfolio](./public/assets/Portfolio.png)
 -[Works](./public/assets/Works.png)
 -[Contact](./public/assets/Contact.png)

**Desktop View with menu opened**
 -[Menu opened](./public/assets/menu_open.png)

**Mobile View**
 -[Topbar & Intro](./public/assets/m_topbar_&_intro.png)
 -[Portfolio](./public/assets/m_portfolio.png)
 -[Works](./public/assets/m_works.png)
 -[Contact](./public/assets/m_contact.png)

**Mobile View with menu opened**
 -[Menu opened](./public/assets/m_menu_opened.png)


## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned


```scss
.hamburger-design {
  // Scss syntax to design the animated hamburger menu upon click
    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 32px;
      height: 25px;
      overflow: hidden;

      cursor: pointer;

      span {
          width: 100%;
          height: 3px;
          background-color: $mainColor;
          transform-origin: left;
          transition: all 2s ease;
    }
  }
   // Upon click active class will be inserted
  &.active {
    .hamburger{
        
        span{
            &:first-child{
                background-color: white;
                transform: rotate(45deg);
            }
            &:nth-child(2){
                opacity: 0;
            }
            &:last-child{
                background-color: white;
                transform: rotate(-45deg);
            }
        }
    }
  }
    
}
```
```js
const ityped = () => {
  // Used to create an animated text using ityped and React hookes (useEffect, useRef)
      const textRef = useRef();

      useEffect(() => {
        init(textRef.current, {
          showCursor: true, 
          backDelay:  1500,
          backSpeed: 60,
          strings: ['Developer', 'Designer', 'Student' ] 
        })
      }, [])

      (<h3>Freelance <span ref={textRef}></span></h3>)
  
}
```
```js
const slideFunc = () => {
  // Used to create the slides, which designed is optimesed based on the user's device screen size
    const [currentSlide, setCurrentSlide] = useState(0);
    const [matches, setMatches] = useState(
      window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
      window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    const sliding = val => {
    val === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: data.length - 1) : 
                      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 )
    }
    const transform = matches ? {transform: `translateX(-${currentSlide*100}vw)`} : {transform: `translateX(-${currentSlide*100}vw)`}

    (<div 
          className="slider"
          style={transform} 
    >
    {/*Here is the design*/}
    </div>)

    // Arrows for the slider from mui
    (<ArrowBackIos className="arrow back" onClick={() => sliding("left")} />)
    (<ArrowForwardIos className="arrow foward" onClick={() => sliding()} />)
    
}
```

### Continued development

For this portfolio website I only used 'px' for the sizing values. For the next projects, I would use the 'rem' which is relative to the root size to allow more responsiveness with the browsers.


### Useful resources

- [Material Icon](https://mui.com/components/material-icons/) - I could use directly many interresting material icons through this service
- [Codepen](https://codepen.io/) - This helped me for searchin a way to produce a specific design by looking at other people's previous work. I really liked using this website and will use it going forward.
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-tricks) - This is an amazing article which helped me multiple times in trying to figure out the CSS Flex various functionality.


## Author

- Twitter - [@krumbs8749](https://twitter.com/krumbs8749)



