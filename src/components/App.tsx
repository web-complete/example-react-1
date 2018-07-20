import * as React from 'react'
import 'normalize.css/normalize.css'

import 'assets/css/global.css'
import { ThemeProvider, theme } from 'config/theme'
import * as S from './App.styled'
import nav from 'config/navigation'
import Side from './app/Side'
import Page from './app/Page'

export interface Props {
}

interface State {
  moveDirection: string
  currentNavItem?: INavItem
}
class App extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { moveDirection: 'down' }
    this.onMenuItemClick = this.onMenuItemClick.bind(this)
  }

  onMenuItemClick(item: INavItem) {
    // const currentIndex = nav.findIndex(i => i.code === item.code)
    this.setState({ moveDirection: 'down' })
  }

  render() {
    return (
        <ThemeProvider theme={theme}>
          <S.Layout>
            <Side nav={nav} onMenuItemClick={this.onMenuItemClick}/>
            <S.Main>
              <Page/>
            </S.Main>
          </S.Layout>
        </ThemeProvider>
    )
  }
}

export default App
