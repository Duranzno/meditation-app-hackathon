import { ReactNode } from "react"
import { Head } from "blitz"
import { CssBaseline } from "@material-ui/core"
// import { ThemeProvider } from "react-bootstrap"
// import { theme } from '../stylesheets/theme'
type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "meditationApp"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ThemeProvider > */}
      <>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </>
      {/* </ThemeProvider>, */}
    </>
  )
}

export default Layout
