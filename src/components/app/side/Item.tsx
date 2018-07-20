import * as React from 'react'
import { Link } from '@reach/router'
import * as S from './Item.styled'

declare interface Props {
  onClick: Function,
  item: INavItem,
}

const isActive = ({ isPartiallyCurrent }: any) =>
  isPartiallyCurrent ? { className: 'nav-item active' } : { className: 'nav-item' }

class SideItem extends React.Component<Props> {
  render() {
    const { item, onClick } = this.props
    return (<S.Root>
        <Link to={ item.path } getProps={ isActive } onClick={ () => onClick(item) }>
          <S.Icon>{ React.createElement(item.icon) }</S.Icon>
          <S.Name>{ item.title }</S.Name>
        </Link>
      </S.Root>)
  }
}

export default SideItem
