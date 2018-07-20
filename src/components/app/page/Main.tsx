import * as React from 'react'
import { ChevronDown } from 'styled-icons/fa-solid'
import { navigate } from '@reach/router'
import Button from '../../shared/ui/Button'
import * as S from './Main.styled'

interface Props {
}

const PageMain: React.StatelessComponent<Props> = props => (
  <S.Content>
    <S.AbsoluteBlock>
      <S.H2>CLEAR THINKING.<br/>MADE VISUAL.</S.H2>
      <S.H3>Jone Doe • WEB DESIGNER</S.H3>
      <Button onClick={() => { navigate('/about') }} icon={<ChevronDown />} fontSize={18}>Learn more</Button>
    </S.AbsoluteBlock>
  </S.Content>
)

export default PageMain
