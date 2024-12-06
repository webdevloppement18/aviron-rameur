import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.jpg'


export default function Nav() {

    const navLinkStyle = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    < nav className="w-full h-16 flex  items-center jusitfy-between space-x-4 bg-[white] px-3 py-6 mt-2" >

        <img src={Logo} alt="" className='w-10 h-10 ' />
        <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/'>Acceuil </NavLink>
        <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/'> Articles </NavLink>
        <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/register'> Devenir Membres </NavLink>
        <NavLink  style={navLinkStyle} className='text-[red-500] font-semibold'to='/login'> Se connecter </NavLink>
        <NavLink style={navLinkStyle} className='text-[red-500] font-semibold' to='/contact'> Contacts </NavLink>
       
    </nav>
  )
}
