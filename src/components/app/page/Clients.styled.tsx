import styled from 'styled-components'

const Text = styled.div`
  & p {
   color: #7e8890;
   font-size: 15px;
   line-height: 36px;
   font-weight: 400;
  }
`

const FlexBox = styled.div`
    display: flex;
    padding-top: 50px;
`

const FlexItem = styled.div`
  &:last-child{
    padding-left: 40px;
    color: #fff;
        font-size: 22px;
    line-height: 37px;
        font-style: italic;
  }
`

export { Text, FlexBox, FlexItem }
