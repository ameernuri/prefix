import { ThemeProps } from 'styled-components'

export interface Theme {
  colors: {
    primary?: string
    background?: string
    foreground?: string
  }
}

export const colors = (arg: ThemeProps<any> = { theme: darkTheme }) => {
  return arg.theme.colors
}

export const darkTheme: Theme = {
  colors: {
    primary: 'red',
    background: '#080b14',
    foreground: '#ffffff',
  },
}
