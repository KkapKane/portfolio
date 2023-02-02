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
    if (clicked !== "") {
      setClicked("");
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
            <div
              className='project'
              onClick={() => handleClick("windowsClone")}
            >
              <img
                width='100%'
                src='https://s9.gifyu.com/images/windowsClone.png'
                alt=''
              />
              <div
                className='links'
                style={clicked === "windowsClone" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a
                    href='https://github.com/KkapKane/ReactTS-windows-clone'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </div>
                <div className='liveLink'>
                  <a
                    href='https://kkapkane.github.io/ReactTS-windows-clone/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'>Windows Clone</div>
            {/* -------------------------------------------------------------------- */}
          </Carousel.Item>
          <Carousel.Item>
            {/* -------------------------------------------------------------------- */}
            <div className='project' onClick={() => handleClick("youtube")}>
              <img
                width='100%'
                src='https://s3.gifyu.com/images/Untitled.png'
                alt=''
              />
              <div
                className='links'
                style={clicked === "youtube" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a
                    href='https://github.com/KkapKane/youtube-clone'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </div>
                <div className='liveLink'>
                  <a
                    href='https://kkapkane.github.io/youtube-clone/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'>YouTube Look-alike</div>
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
                alt=''
              />
              <div
                className='links'
                style={clicked === "clothingStore" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a
                    href='https://github.com/KkapKane/shopping-cart'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </div>
                <div className='liveLink'>
                  <a
                    href='https://kkapkane.github.io/shopping-cart/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
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
                alt=''
              />
              <div
                className='links'
                style={clicked === "Restaurant" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a
                    href='https://github.com/KkapKane/restaurant-page'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </div>
                <div className='liveLink'>
                  <a
                    href='https://kkapkane.github.io/restaurant-page/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
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
            <div className='project' onClick={() => handleClick("rhythmGame")}>
              <img
                width='100%'
                src='https://s3.gifyu.com/images/audition5ebd69d440cfe419.png'
                alt=''
              />

              <div
                className='links'
                style={clicked === "rhythmGame" ? {} : { display: "none" }}
              >
                <div className='gitLink'>
                  <a
                    href='https://github.com/KkapKane/R3F-Game'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </a>
                </div>
                <div className='liveLink'>
                  <a
                    href='https://kkapkane.github.io/R3F-Game/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <div className='ProjectName'>Rhythm Game</div>
            {/* -------------------------------------------------------------------- */}
          </Carousel.Item>
        </Carousel>
      </div>
    </m.div>
  );
}
