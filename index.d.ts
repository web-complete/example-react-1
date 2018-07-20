declare interface INavItem {
  code: string,
  title: string,
  path: string,
  component: React.ComponentType<any>,
  icon: React.ComponentType<any>,
  default?: boolean,
}

declare interface IImage {
  src: string,
  alt: string,
  title: string
}

declare module 'react-icons/*' {
  const any: any
  export default any
}
