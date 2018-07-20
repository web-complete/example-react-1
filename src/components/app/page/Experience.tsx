import * as React from 'react'
import TwoColumnsLayout from '../../shared/ui/2ColumnsLayout'
import RightImg from 'assets/img/experience.jpg'
import { navigate } from '@reach/router'
import * as S from './Experience.styled'

interface Props {
}

const Content: React.StatelessComponent<Props> = props => (
  <S.Text>
    <h5>01. DIGITAL.</h5>
    <p>
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliqui.
      Quos dolores et quas molestias un occaecati.
    </p>
    <h5>02. BRANDING.</h5>
    <p>
      Nam ante mauris, cursus ut nisl vitae, scelerisque tincidunt turpis. In pulvinar est sit amet massa gravida
      blandit.
    </p>
    <h5>03. MARKETING.</h5>
    <p>
      Phasellus pharetra est varius sagittis consectetur. Etiam libero lorem, scelerisque eget tristique mattis metus
      sit amet pulvinar vitae, finibus nec eros.
    </p>
  </S.Text>
)

const PageExperience: React.StatelessComponent<Props> = props => (
  <TwoColumnsLayout
    rightImg={RightImg}
    h2="Work Skills."
    h3="Great design matters."
    h6="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate provident suntin."
    buttonText="Skill"
    backgroundColor="#1D212A"
    h2Color="#2A2F3B"
    h3Color="#FFF"
    content={Content}
    onClick={() => { navigate('/skills') }}
  />
)

export default PageExperience
