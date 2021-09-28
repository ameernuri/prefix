import styled from 'styled-components'
import { colors } from '../../../../theme/theme'

export const NavbarStyled = styled.nav`
  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => colors(props).primary};
  background-color: ${(props) => colors(props).primary};

  .logo {
    filter: grayscale(1) contrast(100);
    transition: 0.5s;

    &:hover {
      filter: grayscale(1) contrast(0);
    }
  }
`
