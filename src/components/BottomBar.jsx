
import {MdOutlineContacts} from 'react-icons/md'
import { AiOutlineGithub, AiOutlineHome } from "react-icons/ai";
import { Link } from 'react-router-dom'
import '../styles/BottomBar.scss'

export default function BottomBar() {
    return (
      <div className='BottomBar'>
        <Link to='/' className='skills'>
          <AiOutlineHome size={30} />
          Home
        </Link>
        <a
          href='https://github.com/KkapKane'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='github'>
            <AiOutlineGithub size={30} />
            <div>GitHub</div>
          </div>
        </a>
        <Link to='/contact' className='contact'>
          <MdOutlineContacts size={30} />
          Hire Me
        </Link>
      </div>
    );
}