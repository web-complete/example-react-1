import styled from 'styled-components'

const Root = styled.li`
  display: block;
  & {
      border-top: 1px solid ${props => props.theme.colorPrimaryActive};
      height: 110px;
  }
  &:last-child {
      border-bottom: 1px solid ${props => props.theme.colorPrimaryActive};
  }
  & > .nav-item {
    display: block;
    text-decoration: none;
    font-size: 13px;
    color: #fff;
    transition: all 0.2s ease;
  }
  & > .nav-item svg path,
  & > .nav-item svg  {
   fill: ${props => props.theme.colorIconInActive};
   transition: fill .2s ease;
  }
  & > .nav-item:hover svg path,
  & > .nav-item:hover svg {
    fill: ${props => props.theme.colorIconHover};
    transition: fill .2s ease;
  }
  & > .nav-item.active svg path,
  & > .nav-item.active svg  {
    fill: ${props => props.theme.colorIconActive};
  }
   & > .nav-item p  {
   color: ${props => props.theme.colorIconInActive};
   transition: fill .2s ease;
  }
  & > .nav-item:hover p {
    color: ${props => props.theme.colorIconHover};
    transition: fill .2s ease;
  }
  & > .nav-item.active p  {
    color: ${props => props.theme.colorIconActive};
  }
`

const Icon = styled.div`
    & svg {
      padding: 20px 0 0 90px;
      width: 37.5px;
      height: 40px;
    }
`

const Name = styled.p`
  text-align: center;
`

export { Root, Name, Icon }
