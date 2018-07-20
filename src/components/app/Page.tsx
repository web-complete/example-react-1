import * as React from 'react'
import styled from 'config/theme'
import SlideTransitionRouter from './SlideTransitionRouter'
import nav from 'config/navigation'

interface Props {
}

const Page: React.StatelessComponent<Props> = props => (
  <StyledRoot>
    <SlideTransitionRouter nav={nav} />
  </StyledRoot>
)

const StyledRoot = styled.div`
`

export default Page
