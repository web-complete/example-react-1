import LogoComponent from '../shared/ui/Logo'
import styled from 'styled-components'

interface Props {
  isOpen: boolean
}

const Root = styled.div.attrs<Props>({})`
  flex: 0 0 auto;
  color: #fff;
  background: ${props => props.theme.colorPrimary};
  width: 214px;
  align-self: stretch;
  border-right: 1px solid ${props => props.theme.colorPrimaryActive};
  & .hamburger {
    display: block;
  }
  @media (max-width: 1024px) {
    & > ul {
      display: ${props => props.isOpen ? 'block' : 'none'};
    }
    margin-top: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    & .hamburger {
      display: block;
      position: absolute;
      overflow: hidden;
      margin: 0;
      padding: 0;
      width: 108px;
      height: 96px;
      font-size: 0;
      text-indent: -9999px;
      -webkit-appearance: none;
      -moz-appearance: none;
      box-shadow: none;
      border-radius: unset;
      border: none;
      cursor: pointer;
      -webkit-transition: background 0.3s;
      transition: background 0.3s;
      top: 35px;
      right: 20px;
    }
    & .hamburger span {
      display: block;
      position: absolute;
      top: 45px;
      left: 18px;
      right: 18px;
      height: 6px;
      background: white;
    }
    & .hamburger span::before,
    & .hamburger span::after {
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: #fff;
      content: "";
    }
    & .hamburger span::before {
      top: -27px;
    }
    & .hamburger span::after {
      bottom: -27px;
    }
  }
`

const Logo = styled(LogoComponent)`
  display: block;
  height: 173px;
  text-align: center;
  line-height: 220px;
  background: ${props => props.theme.colorPrimaryActive};
  @media (max-width: 1024px) {
    text-align: left;
    padding-left: 50px;
  }

`

export { Root, Logo }
