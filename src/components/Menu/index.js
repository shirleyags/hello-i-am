import "components/Menu/Menu.css"
import MenuLink from "../MenuLink"

const Menu = () => {
  return(
    <header>
      <nav className="navegacao">
        <MenuLink to="/">
          Home
        </MenuLink>
        <MenuLink to="/sobremim">
          Sobre Mim
        </MenuLink>
      </nav>
    </header>
  )
}

export default Menu