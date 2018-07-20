import * as React from 'react'
import { navigate } from '@reach/router'

import TwoColumnsLayout from '../../shared/ui/2ColumnsLayout'
import RightImg from 'assets/img/skills.jpg'

interface Props {
}

const PageSkills: React.StatelessComponent<Props> = props => (
  <TwoColumnsLayout
    rightImg={RightImg}
    h2="Skills."
    h3="Results driven design."
    h6="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
    corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in."
    buttonText="Clients"
    onClick={() => { navigate('/clients') }}
  />
)

export default PageSkills
