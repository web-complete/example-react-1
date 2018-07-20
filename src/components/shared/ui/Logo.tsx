import * as React from 'react'

interface Props {
  className?: string,
  short?: boolean,
  color?: string,
}

const Logo: React.StatelessComponent<Props> = ({ short, color, className }) => (
  <div className={className}>
    <svg width="55px" height="69px" viewBox="0 0 55 69" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="Oval" stroke="#EAAE46" fill="#EAAE46" cx="28" cy="13" r="5" />
        <polygon id="V" fill="#FFFFFF" points="25.8653846 46.25 28.1730769 56.4423077 28.2692308 56.4423077 30.7692308 46.0576923 47.0192308 0 55 0 29.5192308 68.3653846 25.9615385 68.3653846 0 0 8.75 0" />
      </g>
    </svg>
  </div>
)

export default Logo
