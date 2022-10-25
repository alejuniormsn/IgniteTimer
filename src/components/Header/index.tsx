import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo do ignite" />
      <nav>
        <NavLink to="/" end={true} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" end={true} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
