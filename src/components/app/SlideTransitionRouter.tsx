import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Router, Location } from '@reach/router'

declare interface Props {
  nav: INavItem[]
}

const SlideTransitionRouter: React.StatelessComponent<Props> = props => (
  <Location>
    {({ location }:any) => (
      <TransitionGroup className="transition-group m-up">
        <CSSTransition key={location.key} classNames="transition-slide" timeout={500}>
          <Router location={location}>
            {props.nav.map((route, k) => (
              React.createElement(route.component, {
                path: route.path,
                default: route.default,
                key: k,
              })
            ))}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)

export default SlideTransitionRouter
