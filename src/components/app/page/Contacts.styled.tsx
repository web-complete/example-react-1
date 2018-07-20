import styled from 'styled-components'

const From = styled.form`
  & input {
    height: 55px;
    padding-left: 20px;
    color: #7e8890;
  }
  & textarea {
    padding: 8px 15px;
    color: #7e8890;
    height: 150px;
  }
`

const FormRow = styled.div`
    margin-top: 20px;
    width: 100%;
    & > * {
      width: 100%;
    }
`

export { From, FormRow }
