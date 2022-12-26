import { motion as m } from "framer-motion";
import "../styles/Projects.scss";
import { Carousel } from 'react-responsive-carousel'

export default function Projects() {
   
  return (
    <m.div
      className='Projects'
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div>
        <Carousel>
          <div>
          <img src='https://s3.gifyu.com/images/Untitled.png' alt='' />
            Youtube Clone
            </div>
        </Carousel>
      </div>
    </m.div>
  );
}
