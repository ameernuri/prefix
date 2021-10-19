import styled from 'styled-components'
import { colors } from '../../../../theme/theme'

export const NavbarStyled = styled.nav`
  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => colors(props).primary};
  background-color: ${(props) => colors(props).primary};
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  .logo {
    filter: grayscale(1) contrast(100);
    transition: 0.5s;

    &:hover {
      filter: grayscale(1) contrast(0);
    }
  }

  .right-side {
    justify-self: right;

    .username {
      font-weight: bold;
      color: ${(props) => colors(props).background};
      text-decoration: none;
      opacity: 0.7;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
`
