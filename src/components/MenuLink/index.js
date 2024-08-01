import "components/MenuLink/MenuLink.css"
import { NavLink } from 'react-router-dom'


const MenuLink = ({children, to}) => {

  return(
    <NavLink 
      to={to} 
      className={({isActive}) => {
       return `link ${isActive ? "linkDestacado": ""}`
      }}>
      {children}
    </NavLink>
  )
}

export default MenuLink