import * as React from 'react'
import * as S from './Button.styled'

interface Props {
  fontSize?: number
  disabled?: boolean
  outlined?: boolean
  rounded?: boolean
  dashed?: boolean
  active?: boolean
  icon?: React.ReactElement<any>
  className?: string

  onClick: () => void
}

const Button: React.StatelessComponent<Props> = props => (
  <S.Button
    className={props.className}
    outlined={props.outlined}
    disabled={props.disabled}
    rounded={props.rounded}
    dashed={props.dashed}
    active={props.active}
    hasIcon={!!(props.icon)}
    onClick={() => props.onClick()}
  >
    {props.icon && (<S.Icon>{props.icon}</S.Icon>)}
    <S.Text fontSize={props.fontSize}>{props.children}</S.Text>
  </S.Button>
)

export default Button
