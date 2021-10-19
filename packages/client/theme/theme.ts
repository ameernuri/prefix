import { ThemeProps } from 'styled-components'

export interface Theme {
  colors: {
    primary?: string
    background?: string
    foreground?: string
    light?: string
  }
}

export const colors = (props: ThemeProps<any> = { theme: darkTheme }) => {
  return props.theme.colors
}

export const darkTheme: Theme = {
  colors: {
    primary: '#11aa77',
    background: '#070b12',
    foreground: '#ffffff',
    light: '#eeeeee',
  },
}
