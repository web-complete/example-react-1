import * as React from 'react'
import { navigate } from '@reach/router'
import RightImg from 'assets/img/about.jpg'
import TwoColumnsLayout from '../../shared/ui/2ColumnsLayout'
import * as S from './About.styled'

interface Props {
}

const TextBlock:  React.StatelessComponent<Props> = props => (
  <S.Text>
        <p>
          Parturient montes, nascetur ridiculus mus. Maecenas ac finibus turpis. Vivamus et elit in leo pretium
          pharetra. Sed lobortis urna turpis, id ultricies dolor pharetra ac. Proin suscipit odio non libero
          ullamcorper, sit amet tincidunt lacus porta. Aenean sodales lectus ex, non sagittis nibh ultricies at.
          Aliquam nec dolor posuere, vulputate mauris at, fermentum Donec ligula metus, hendrerit at malesuada vel,
          facilisis sit amet dui. Aliquam erat volutpat. Nulla eget ornare dolor. Pellentesque convallis dui ante, eu
          pretium ipsum bibendum fermentum. Proin dui arcu, mattis non ultricies ac, pellentesque eget ipsum.
          Nullam tincidunt orci in interdum facilisis. Vestibulum eu neque et mauris vestibulum pretium vel vitae enim.
          Vestibulum id ipsum risus. Suspendisse lectus tortor, pretium ut orci vitae, mollis iaculis risus.
        </p>
  </S.Text>
)

const PageAbout: React.StatelessComponent<Props> = props => (
  <TwoColumnsLayout
      rightImg={RightImg}
      h2="About."
      h3="Inspired by difference."
      buttonText="Work"
      content={TextBlock}
      onClick={() => { navigate('/work') }}
  />
)

export default PageAbout
