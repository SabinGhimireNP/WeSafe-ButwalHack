import {NavLink} from 'react-router-dom'
import '../../assets/Style/NavBar.css'
import { IoCreate } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";
const isLoggedIn = !!localStorage.getItem("Token");
// const isLoggedIn = true;

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="LogoHolder">
        <NavLink to="/" className='Logo'>
          <MdOutlineShield className='LogoIcon' />
          <p className='LogoText'> We Safe</p>
        </ NavLink>
      </div>
      <div className="Links">
        <NavLink to="/stories" className={({isActive})=>isActive? "active": ""}><li>Stories</li></NavLink>
        <NavLink to="/safety" className={({isActive})=>isActive? "active": ""}><li>Safety Center</li></NavLink>
       { (isLoggedIn) ? 
        (<NavLink to="/stories/create" ><button className={"NavBarbtn"} >< IoCreate className='CreatePost' />Share Story</button></NavLink>) :
        ( <NavLink to="/signin"><button className={"NavBarbtn"} >Sign In</button></NavLink>)}
      </div>
    </div>
  )
}

export default NavBar