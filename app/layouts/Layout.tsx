import { ReactNode } from "react"
import { Head } from "blitz"
import { CssBaseline } from "@material-ui/core"
import StaticSidebar from '../components/Sidebar/StaticSidebar'
// import { ThemeProvider } from "react-bootstrap"
// import { theme } from '../stylesheets/theme'
type LayoutProps = {
  title?: string
  children: ReactNode
}


const Layout = ({ title, children }: LayoutProps) => {

  const events = (apiResponse: Promise<User[]>) => { //dummy method
    apiResponse = ["Meditation 1.0", "Meditation 2.0", "Meditation 3.0"]
    return apiResponse;
  }

  return (
    <>
      <Head>
        <title>{title || "meditationApp"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ThemeProvider > */}
      <>
      <StaticSidebar events={events}/>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </>
      {/* </ThemeProvider>, */}
    </>
  )
}

export default Layout
