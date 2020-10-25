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
