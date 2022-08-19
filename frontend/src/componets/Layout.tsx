import {FC, ReactElement} from "react"

type Props = {
  children: ReactElement,
  style?: string
}

const Layout: FC<Props> = ({children, style})=>{
  const styleDefault = "h-screen bg-neutral-200 dark:bg-slate-900"

  return (
    <main className={`${styleDefault} ${style}`}>{children}</main>
  )
}

export default Layout
