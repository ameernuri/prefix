import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'
import InterRegular from '../public/fonts/inter/Inter-Regular.ttf'
import InterBlack from '../public/fonts/inter/Inter-Black.ttf'
import InterBold from '../public/fonts/inter/Inter-Bold.ttf'
import InterExtraBold from '../public/fonts/inter/Inter-ExtraBold.ttf'
import InterExtraLight from '../public/fonts/inter/Inter-ExtraLight.ttf'
import InterLight from '../public/fonts/inter/Inter-Light.ttf'
import InterMedium from '../public/fonts/inter/Inter-Medium.ttf'
import InterSemiBold from '../public/fonts/inter/Inter-SemiBold.ttf'
import InterThin from '../public/fonts/inter/Inter-Thin.ttf'

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'Inter';
	src: url(${InterThin}) format('ttf');
	font-weight: 100;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterExtraLight}) format('ttf');
	font-weight: 200;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterLight}) format('ttf');
	font-weight: 300;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterRegular}) format('ttf');
	font-weight: 400;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterMedium}) format('ttf');
	font-weight: 500;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterSemiBold}) format('ttf');
	font-weight: 600;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterBold}) format('ttf');
	font-weight: 700;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterExtraBold}) format('ttf');
	font-weight: 800;
}

@font-face {
	font-family: 'Inter';
	src: url(${InterBlack}) format('ttf');
	font-weight: 900;
}

	body {
		background-color: ${(props) => colors(props).background};
		color: ${(props) => colors(props).foreground};
		font-family: 'Inter';
	}

	* {
		padding: 0;
		margin: 0;
	}
`

export default GlobalStyle
