import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
`

const Main = styled.div`
  width: 100%;
  flex: 0 1 auto;
  @media (max-width: 1024px) {
    padding-top: 100px;
  }
`

export { Layout , Main }
