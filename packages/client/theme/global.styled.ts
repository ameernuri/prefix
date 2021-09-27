import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${(props) => colors(props).background};
		color: ${(props) => colors(props).foreground}
	}

	* {
		padding: 0;
		margin: 0;
	}
`

export default GlobalStyle
