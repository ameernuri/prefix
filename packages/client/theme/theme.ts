import { ThemeProps } from 'styled-components'

export interface Theme {
  colors: {
    primary?: string
    background?: string
    foreground?: string
  }
}

export const colors = (props: ThemeProps<any> = { theme: darkTheme }) => {
  return props.theme.colors
}

export const darkTheme: Theme = {
  colors: {
    primary: '#008862',
    background: '#080b14',
    foreground: '#ffffff',
  },
}
