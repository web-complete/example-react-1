import * as React from 'react'

import SideItem from './side/Item'
import * as S from './Side.styled'

export interface Props {
  nav: INavItem[]

  onMenuItemClick: Function
}

interface State {
  isMenuOpen: boolean
}

class Side extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { isMenuOpen: false }
    this.clickOpenMenu = this.clickOpenMenu.bind(this)
  }

  clickOpenMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }))
  }

  render () {
    const { onMenuItemClick } = this.props
    const { nav } = this.props

    return (
      <S.Root isOpen={this.state.isMenuOpen}>
        <S.Logo />
          <ul>
            {nav.map(item => (<SideItem item={item} key={item.code} onClick={onMenuItemClick} />))}
          </ul>
          <div className="hamburger" onClick={this.clickOpenMenu}><span></span></div>
      </S.Root>
    )
  }
}

export default Side
