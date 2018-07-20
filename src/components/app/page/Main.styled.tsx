import styled from 'styled-components'
import HomeBgImg from 'assets/img/home_bg.jpg'

const Content = styled.div`
  background-size: cover;
  background: url(${HomeBgImg}) no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
`

const AbsoluteBlock = styled.div`
  position: absolute;
  padding: 0 15%;
  top: 35%
`

const H2 = styled.h2`
    white-space: nowrap;
    font-size: 72px;
    line-height: 86px;
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 30px 0;
`

const H3 = styled.h3`
    white-space: nowrap;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    text-transform: uppercase;
    margin: 0 0 100px 0;
    letter-spacing: 2px;
`

export { Content, AbsoluteBlock, H2, H3 }
