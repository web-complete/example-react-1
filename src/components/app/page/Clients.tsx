import * as React from 'react'
import { navigate } from '@reach/router'
import TwoColumnsLayout from '../../shared/ui/2ColumnsLayout'
import RightImg from 'assets/img/clients.jpg'
import Image1 from 'assets/img/testimonial/testimonial1.jpg'
import * as S from './Clients.styled'

interface Props {
}

const Content: React.StatelessComponent<Props> = props => (
  <S.Text>
    <S.FlexBox>
      <S.FlexItem><img src={Image1}/></S.FlexItem>
      <S.FlexItem>
        “Phasellus vulputate turpis tincidunt, aliquam quam in, accumsan massa. Donec feugiat ultrices
        molestie etiam venenatis.”
      </S.FlexItem>
    </S.FlexBox>
    <S.FlexBox>
      <S.FlexItem><img src={Image1}/></S.FlexItem>
      <S.FlexItem>
        “Phasellus vulputate turpis tincidunt, aliquam quam in, accumsan massa. Donec feugiat ultrices
        molestie etiam venenatis.”
      </S.FlexItem>
    </S.FlexBox>
  </S.Text>
)

const PageClients: React.StatelessComponent<Props> = props => (
  <TwoColumnsLayout
    rightImg={RightImg}
    h2="Clients."
    h3="Make a difference."
    h6="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
     corrupti quos dolores et quas."
    buttonText="Contact us"
    backgroundColor="#1D212A"
    h2Color="#2A2F3B"
    h3Color="#FFF"
    content={Content}
    onClick={() => { navigate('/contacts') }}
  />
)

export default PageClients
