import { NavbarStyled } from './navbar.styled'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <NavbarStyled>
      <div>
        <Image
          src='/logo-text.svg'
          alt='Prefix Logo'
          width={60}
          height={10}
          className='logo'
        />
      </div>
      <div className='right-side'>
        <a className='username'>glixch</a>
      </div>
    </NavbarStyled>
  )
}
