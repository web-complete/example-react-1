import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

export interface ITheme {
  colorText: string,
  colorPrimary: string,
  colorPrimaryHover: string,
  colorPrimaryActive: string,
  colorGray: string,
  colorGrayLight: string,
  colorAlert: string,
  colorBtnDefault: string,
  colorBtnHover: string,
  colorIconActive: string,
  colorIconInActive: string,
  colorIconHover: string,
  media1500: (styles: string) => string,
  media2280: (styles: string) => string,
}

const theme: ITheme = {
  colorText: '#FFFFFF',
  colorPrimary: '#242A33',
  colorPrimaryHover: '#2E333C',
  colorPrimaryActive: '#2D333D',
  colorGray: '#7F878F',
  colorGrayLight: '#F2F2F2',
  colorAlert: '#EB3324',
  colorBtnDefault: '#f4ad24',
  colorBtnHover: '#f4ad24',
  colorIconActive: '#f4ad24',
  colorIconInActive: '#515863',
  colorIconHover: '#f4ad24',
  media1500: styles => `@media (max-width: 1500px) { ${styles} }`,
  media2280: styles => `@media (max-width: 2280px) { ${styles} }`,
}

export default styled
export { css, injectGlobal, keyframes, ThemeProvider, theme }
