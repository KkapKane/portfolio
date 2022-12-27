import "../styles/Contact.scss";
import { motion as m } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { container, item } from "./animation";

export default function Contact() {
  return (
    <m.div
      className='Contact'
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <m.div
        className='staggerBox1'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <div className='email'>
          <MdOutlineEmail />
          <m.p variants={item}>KaneDev95@gmail.com</m.p>
        </div>
      </m.div>
    </m.div>
  );
}
