import styled from 'styled-components'

const Text = styled.div`
  & h5 {
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
    color: #ffffff;
    font-size: 22px;
  }
  & h5:after {
    content:'';
    display:block;
    padding-top: 15px;
    border-bottom:1px solid #f4ad24;
    max-width: 130px;
    width: 100%;
  }
  & p {
   color: #7e8890;
   font-size: 15px;
   line-height: 36px;
   font-weight: 400;
  }
`

export { Text }
