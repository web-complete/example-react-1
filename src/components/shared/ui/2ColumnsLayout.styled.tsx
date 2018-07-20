import Button from '../../shared/ui/Button'
import styled from 'styled-components'

const MButton = styled(Button)`
  margin-top: 100px;
`

const FlexBox = styled.div`
  ${(props: any) => `
    display: flex;
    height: 100vh;
    background-color: ${props.backgroundColor ? props.backgroundColor : '#fff'};
    align-items: stretch;
  `}
`

const FlexItem = styled.div`
  &:first-child {
    width: 60%;
  }
  &:last-child {
    width: 40%;
    max-height: 100vh;
  }
  &:last-child img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 1500px) {
    &:last-child {
      display: none;
    }
  }
`

const ContentArea = styled.div`
  padding: 115px 10%;
`

const H2 = styled.h2`
  ${(props: any) => `
    white-space: nowrap;
    font-size: 110px;
    font-weight: 700;
    line-height: 110px;
    color: ${props.color ? props.color : '#f2f2f2'};
    text-transform: uppercase;
    margin: 0 0 30px 0;
  `}
`

const H3 = styled.h3`
  ${(props: any) => `
    font-size: 36px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 2px;
    color: ${props.color ? props.color : '#333c4e'};
    text-transform: uppercase;
  `}
`

const H6 = styled.h6`
    font-size: 19px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 1px;
    font-style: italic;
    color: #7e8890;
`

export { MButton, FlexBox, FlexItem, ContentArea, H2, H3, H6 }
