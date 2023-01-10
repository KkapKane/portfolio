import { motion as m } from "framer-motion";
import "../styles/Projects.scss";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  const [currentImg, setCurrentImg] = useState(0);
  const [project, setProject] = useState([
    {
      ProjectName: "Youtube Clone",
      image: "https://s3.gifyu.com/images/Untitled.png",
      gh: "https://github.com/KkapKane/youtube-clone",
      preview: "https://kkapkane.github.io/youtube-clone/",
    },
    {
      ProjectName: "R3F Dancing Game",
      image: "https://s3.gifyu.com/images/audition5ebd69d440cfe419.png",
      gh: "https://github.com/KkapKane/R3F-Game",
      preview: "https://kkapkane.github.io/R3F-Game/",
    },
    {
      ProjectName: "Mock Clothing Store",
      image: "https://s9.gifyu.com/images/ArashiyamaHP.png",
      gh: "https://github.com/KkapKane/shopping-cart",
      preview: "https://kkapkane.github.io/shopping-cart/",
    },
    {
      ProjectName: "Restaurant Page",
      image: "https://s9.gifyu.com/images/restaurant.png",
      gh: "https://github.com/KkapKane/restaurant-page",
      preview: "https://kkapkane.github.io/restaurant-page/",
    },
    {
      ProjectName: "Cv-Maker",
      image: "https://s9.gifyu.com/images/cvMaker.png",
      gh: "https://github.com/KkapKane/cv-project",
      preview: "https://kkapkane.github.io/cv-project/",
    },
  ]);

  function handleClick(direction) {
    if (currentImg <= 0) {
      setCurrentImg(5);
    }
    direction == "forward"
      ? setCurrentImg((prev) => prev + 1)
      : setCurrentImg((prev) => prev - 1);
  }

  return (
    <m.div
      className='Projects'
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      style={{ backgroundImage: `url(${project[currentImg % 5].image})` }}
    >
      <div className='carousel'>
        <div className='title'>{project[currentImg % 5].ProjectName}</div>
        <div className='imgContainer'>
          <img src={project[currentImg % 5].image} alt='' />
          <div className='preview'>
            <a
              href={project[currentImg % 5].gh}
              className='gitlink'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineGithub size={50} />
              GitHub
            </a>
            <a
              href={project[currentImg % 5].preview}
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview
            </a>
          </div>
        </div>
        <div className='buttonContainer'>
          <button onClick={() => handleClick("backward")}>Previous</button>
          <button onClick={() => handleClick("forward")}>Next</button>
        </div>
      </div>
    </m.div>
  );
}
