import * as React from 'react'
import { navigate } from '@reach/router'
import TwoColumnsLayout from '../../shared/ui/2ColumnsLayout'
import RightImg from 'assets/img/contacts.jpg'
import * as S from './Contacts.styled'

interface Props {
}

const Content: React.StatelessComponent<Props> = props => (
  <S.From>
    <S.FormRow><input type="text" placeholder="Name" /></S.FormRow>
    <S.FormRow><input type="text" placeholder="Email" /></S.FormRow>
    <S.FormRow><textarea/></S.FormRow>
  </S.From>
)

const PageContacts: React.StatelessComponent<Props> = props => (
  <TwoColumnsLayout
    rightImg={RightImg}
    h2="Contact."
    h3="Let’s talk."
    h6="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
     corrupti quos dolores et quas."
    buttonText="Lets talk"
    content={Content}
    onClick={() => { navigate('/') }}
  />
)

export default PageContacts
