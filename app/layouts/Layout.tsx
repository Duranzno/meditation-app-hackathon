import React, { ReactNode, useState } from "react"
import StaticSidebar from "../components/Sidebar/StaticSidebar"
import TimelineSidebar from "app/components/Sidebar/TimelineSidebar"
import NewEventSidebar from "app/components/Sidebar/NewEventSidebar"
import BaseLayout, { BaseLayoutProps } from "./BaseLayout"
interface LayoutProps extends BaseLayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }: LayoutProps) => {
  const [open, setOpen] = useState(false)
  const events = ["Meditation 1.0", "Meditation 2.0", "Meditation 3.0"]
  const onClose = () => setOpen(false)
  return (
    <BaseLayout {...props}>
      <StaticSidebar>
        <TimelineSidebar events={events} openNewEvent={() => setOpen(true)} />
      </StaticSidebar>
      <NewEventSidebar open={open} onClose={onClose} />
      <div className="container">{children}</div>
    </BaseLayout>
  )
}

export default Layout


let cards = [
  {
    title: "Awesome Event",
    time: "2pm",
    date: "11/03/2020"
  },
  {
    title: "Another Event",
    time: "10am",
    date: "11/15/2020"
  },
  {
    title: "Great Meditation Event",
    time: "9am",
    date: "11/15/2020"
  },
  {
    title: "New Event",
    time: "1pmm",
    date: "11/15/2020"
  },
  {
    title: "Medidate Today",
    time: "12pm",
    date: "11/15/2020"
  }
]