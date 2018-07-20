import PageMain from 'components/app/page/Main'
import PageAbout from 'components/app/page/About'
import PageContacts from 'components/app/page/Contacts'
import PageClients from 'components/app/page/Clients'
import PageExperience from 'components/app/page/Experience'
import PageSkills from 'components/app/page/Skills'
import PageWork from 'components/app/page/Work'

import { Home, User, Briefcase, Lightbulb, Phone, Heart } from 'styled-icons/fa-solid'
import { ChartBar } from 'styled-icons/fa-regular'

const nav: INavItem[] = [
  {
    code: 'main',
    title: 'Главная',
    path: '/main',
    component: PageMain,
    icon: Home,
    default: true,
  },
  {
    code: 'about',
    title: 'О нас',
    path: '/about',
    component: PageAbout,
    icon: User,
  },
  {
    code: 'work',
    title: 'Работы',
    path: '/work',
    component: PageWork,
    icon: Briefcase,
  },
  {
    code: 'experience',
    title: 'Опыт',
    path: '/experience',
    component: PageExperience,
    icon: Lightbulb,
  },
  {
    code: 'skills',
    title: 'Навыки',
    path: '/skills',
    component: PageSkills,
    icon: ChartBar,
  },
  {
    code: 'clients',
    title: 'Клиенты',
    path: '/clients',
    component: PageClients,
    icon: Heart,
  },
  {
    code: 'contacts',
    title: 'контакты',
    path: '/contacts',
    component: PageContacts,
    icon: Phone,
  },
]

export default nav
