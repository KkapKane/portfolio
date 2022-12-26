import {RxListBullet} from 'react-icons/rx'
import {MdOutlineContacts} from 'react-icons/md'
import { AiOutlineGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../styles/BottomBar.scss'

export default function BottomBar() {
    return (
      <div className='BottomBar'>
          <a href='https://github.com/KkapKane' >
        <div className='github'>
          <AiOutlineGithub size={30} />
            <div >GitHub</div>
          
        </div>
          </a>
        <div className='skills'>
          <RxListBullet size={30} />
          Skills
        </div>
        <Link to='/contact' className='contact'>
          <MdOutlineContacts size={30} />
          Hire Me
        </Link>
      </div>
    );
}