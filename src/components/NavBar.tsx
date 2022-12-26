import { Link } from 'react-router-dom';

import '../styles/NavBar.scss'


export default function NavBar(){
    return (
      <div className='NavBar'>
        <div className="fullName">Khanh Le</div>
        <div className='Name'>KL</div>
        
        <div className='rightLinks'>
          <Link to="/" className='home'>Home</Link>
          <div className='hide'>Projects</div>
          <div className='hide'>Skills</div>
          <Link to="/contact" className='hide'>Contact</Link>
       
        </div>
      </div>
    );
}