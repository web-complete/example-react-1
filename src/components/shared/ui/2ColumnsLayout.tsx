import * as React from 'react'
import * as S from './2ColumnsLayout.styled'
import ChevronDownIcon from 'react-icons/lib/fa/chevron-down'

interface Props {
  backgroundColor?: string
  h2Color?: string
  h3Color?: string
  rightImg: string
  h2: string
  h3: string
  h6?: string
  buttonText: string
  content?: React.ComponentType<any>

  onClick: () => void
}

const TwoColumnsLayout: React.StatelessComponent<Props> = props => (
  <S.FlexBox backgroundColor={props.backgroundColor} className="page">
    <S.FlexItem>
      <S.ContentArea>
        <S.H2 color={props.h2Color}>{props.h2}</S.H2>
        <S.H3 color={props.h3Color}>{props.h3}</S.H3>
        {props.h6 && <S.H6>{props.h6}</S.H6>}
        {props.content && React.createElement(props.content)}
        <S.MButton
          onClick={props.onClick}
          icon={<ChevronDownIcon />}
          fontSize={18}>{props.buttonText}
          </S.MButton>
      </S.ContentArea>
    </S.FlexItem>
    <S.FlexItem><img src={props.rightImg}/></S.FlexItem>
  </S.FlexBox>
)

export default TwoColumnsLayout
