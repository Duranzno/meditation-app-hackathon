import React, { ReactNode, useState } from "react"
import { Head } from "blitz"
import { CssBaseline, Drawer, ThemeProvider } from "@material-ui/core"
import StaticSidebar from '../components/Sidebar/StaticSidebar'
import { theme } from '../stylesheets/theme'
import TimelineSidebar from "app/components/Sidebar/TimelineSidebar"
import NewEventSidebar from "app/components/Sidebar/NewEventSidebar"
type LayoutProps = {
  title?: string
  children: ReactNode
}


const Layout = ({ title, children }: LayoutProps) => {
  const [open, setOpen] = useState(false)
  const events = ["Meditation 1.0", "Meditation 2.0", "Meditation 3.0"]
  const onClose = () => setOpen(false)
  return (
    <>
      <Head>
        <title>{title || "meditationApp"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StaticSidebar>
          <TimelineSidebar events={events} openNewEvent={() => setOpen(true)} />
        </StaticSidebar>
        <NewEventSidebar open={open} onClose={onClose} />
        {children}
      </ThemeProvider>,
    </>
  )
}

export default Layout
