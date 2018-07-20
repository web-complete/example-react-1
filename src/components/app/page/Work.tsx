import * as React from 'react'
import { navigate } from '@reach/router'

import TwoColumnsLayout from '../../shared/ui/2ColumnsLayout'
import { theme } from '../../../config/theme'

import RightImg from 'assets/img/work.jpg'
import Image1 from 'assets/img/work/portfolio1.jpg'
import Image2 from 'assets/img/work/portfolio2.jpg'
import Image3 from 'assets/img/work/portfolio3.jpg'
import Image4 from 'assets/img/work/portfolio4.jpg'
import Image5 from 'assets/img/work/portfolio5.jpg'
import * as S from './Work.styled'

interface Props {
}

const ImageBlock: React.StatelessComponent<Props> = props => (
  <S.Images>
    <img src={Image1} />
    <img src={Image2} />
    <img src={Image3} />
    <img src={Image4} />
    <img src={Image5} />
  </S.Images>
)

const PageWork: React.StatelessComponent<Props> = props => (
    <TwoColumnsLayout
        rightImg={RightImg}
        h2="Work."
        h3="Recent projects."
        buttonText="Experience"
        backgroundColor={theme.colorGrayLight}
        h2Color="#FFF"
        content={ImageBlock}
        onClick={() => { navigate('/experience') }}
    />
)

export default PageWork
