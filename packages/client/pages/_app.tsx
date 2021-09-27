import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/global.styled'
import { darkTheme } from '../theme/theme'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
