import styled from 'styled-components'

const Icon = styled.span`
  position: relative;
  bottom: 3px;
  font-size: 18px;
  margin-right: 10px;

  & svg {
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
`

const Text = styled.span`
  ${(props: any) => `
    position: relative;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${props.fontSize || '14'}px;
  `}
`
const Button = styled.button`
  ${(props: any) => `
    position: relative;
    display: inline-block;
    cursor: ${props.disabled ? 'default' : 'pointer'};
    opacity: ${props.disabled ? '0.5' : '1'};
    padding: 0 20px;
    border-radius: 2px;
    transition: all 0.1s;
    font-weight: 700;
    letter-spacing: 2px;
    ${(() => {
      return `
            vertical-align: bottom;
            background: ${props.theme.colorBtnDefault};
            color: #fff;
            border: none;
            height: 55px;
            padding: 17px 40px
            &:hover {
              background: ${props.theme.colorBtnHover};
            }
        `
    })()}
  `}
`

export { Icon, Text, Button }
