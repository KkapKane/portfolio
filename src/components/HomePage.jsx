import "../styles/HomePage.scss";
import Carousel from "better-react-carousel";
import { useState } from "react";
import { BsCloud } from "react-icons/bs";
import { IoIosRocket } from "react-icons/io";
import { motion as m } from "framer-motion";
import { container, item } from "./animation";
import view from "../assets/view.jpg";



export default function HomePage() {
  const [clicked, setClicked] = useState("");
  const handleClick = (pName) => {
    setClicked(pName);
    if(clicked != ""){
      setClicked("")
    }
  };

  return (
    <m.div
      className='HomePage'
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <img src={view} alt='' className='bg' />
      <div className='hero'>
        <BsCloud size={100} className='cloud' />
        <BsCloud className='cloud2' size={100} />
        <IoIosRocket size={100} className='rocket' />
        <m.div className='title'>
          <m.div
            className='div'
            animate={{ y: 0 }}
            initial={{ y: "150%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hi, I'm Khanh
          </m.div>
        </m.div>
        <m.div
          className='StaggerBox'
          variants={container}
          initial='hidden'
          animate='show'
        >
          <div className='overFlowHidden'>
            <m.p variants={item}> Self-taught </m.p>
          </div>

          <div className='overFlowHidden'>
            <m.p variants={item} className='dev'>
              {" "}
              Frontend Developer{" "}
            </m.p>
          </div>
          <div className='overFlowHidden'>
            <m.p variants={item}>from Louisiana</m.p>
          </div>
        </m.div>
      </div>
      <div className='Carousel'>
        <div id='myWork'>
          <div className='t1'>My Work</div>
          <div className='t2'>- All Projects</div>
        </div>
        <Carousel cols={2} rows={1} gap={10} loop={true}>
          <Carousel.Item>
            {/* -------------------------------------------------------------------- */}
            <div className='project' onClick={() => handleClick("youtube")}>
              <img
                width='100%'
                src='https://s3.gifyu.com/images/Untitled.png'
              />
              <div
                className='links'
                style={clicked == "youtube" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a href='https://github.com/KkapKane/youtube-clone' target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className='liveLink'>
                  <a href='https://kkapkane.github.io/youtube-clone/' target="_blank" rel="noopener noreferrer">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'>YouTube Clone</div>
            {/* -------------------------------------------------------------------- */}
          </Carousel.Item>

          <Carousel.Item>
            {/* -------------------------------------------------------------------- */}
            <div
              className='project'
              onClick={() => handleClick("clothingStore")}
            >
              <img
                width='100%'
                src='https://s9.gifyu.com/images/ArashiyamaHP.png'
              />
              <div
                className='links'
                style={clicked == "clothingStore" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a href='https://github.com/KkapKane/shopping-cart' target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className='liveLink'>
                  <a href='https://kkapkane.github.io/shopping-cart/' target="_blank" rel="noopener noreferrer">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'> Mock Clothing Store</div>
            {/* -------------------------------------------------------------------- */}
          </Carousel.Item>

          <Carousel.Item>
            {/* -------------------------------------------------------------------- */}
            <div className='project' onClick={() => handleClick("Restaurant")}>
              <img
                width='100%'
                src='https://s9.gifyu.com/images/restaurant.png'
              />
              <div
                className='links'
                style={clicked == "Restaurant" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a href='https://github.com/KkapKane/restaurant-page' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </div>
                <div className='liveLink'>
                  <a href='https://kkapkane.github.io/restaurant-page/' target="_blank" rel="noopener noreferrer">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'>Restaurant Page</div>
            {/* -------------------------------------------------------------------- */}
          </Carousel.Item>

          <Carousel.Item>
            {/* -------------------------------------------------------------------- */}
            <div className='project' onClick={() => handleClick("memGame")}>
              <img
                width='100%'
                src='https://s9.gifyu.com/images/memoryGame.png'
              />

              <div
                className='links'
                style={clicked == "memGame" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a href='https://github.com/KkapKane/react-memory-game' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </div>
                <div className='liveLink'>
                  <a href='https://kkapkane.github.io/react-memory-game/' target="_blank" rel="noopener noreferrer">
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'>React-Memory-Game</div>
            {/* -------------------------------------------------------------------- */}
          </Carousel.Item>

          <Carousel.Item>
            {/* -------------------------------------------------------------------- */}
            <div className='project' onClick={() => handleClick("cvMaker")}>
              <img width='100%' src='https://s9.gifyu.com/images/cvMaker.png' />
              <div
                className='links'
                style={clicked == "cvMaker" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a href='https://github.com/KkapKane/cv-project'target="_blank" rel="noopener noreferrer" >Github</a>
                </div>
                <div className='liveLink'>
                  <a href='https://kkapkane.github.io/cv-project/'target="_blank" rel="noopener noreferrer" >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'>CV Maker</div>
            {/* -------------------------------------------------------------------- */}
          </Carousel.Item>
        </Carousel>
      </div>
    </m.div>
  );
}
