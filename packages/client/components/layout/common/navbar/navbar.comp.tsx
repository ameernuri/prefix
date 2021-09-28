import { NavbarStyled } from './navbar.styled'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <NavbarStyled>
      <div>
        <Image src='/logo-text.svg' width={60} height={10} className='logo' />
      </div>
    </NavbarStyled>
  )
}
