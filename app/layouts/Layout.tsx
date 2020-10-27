import React, { ReactNode, Suspense, useState } from "react"
import StaticSidebar from "../components/Sidebar/StaticSidebar"
import TimelineSidebar from "app/components/Sidebar/TimelineSidebar"
import NewEventSidebar from "app/components/Sidebar/NewEventSidebar"
import BaseLayout, { BaseLayoutProps } from "./BaseLayout"
import { createStyles, makeStyles } from "@material-ui/core"
import { useQuery } from "blitz"
import getEvent from "app/events/queries/getEvent"
import getEvents from "app/events/queries/getEvents"
import getCategories from "app/categories/queries/getCategories"
interface LayoutProps extends BaseLayoutProps {
  children: ReactNode
}

const useStyles = makeStyles((theme) => {
  return createStyles({
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }

  })
});
const Layout: React.FC<LayoutProps> = ({ children, ...props }: LayoutProps) => {

  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)

  const classes = useStyles()

  const [events] = useQuery(getEvents, {orderBy: {datetime: 'asc'}})
  const [categories] = useQuery(getCategories, {orderBy: {id: 'asc'}})
  debugger
  return (

    <BaseLayout {...props}>

      <StaticSidebar>
        <TimelineSidebar openNewEvent={() => setOpen(true)} />
      </StaticSidebar>
      <NewEventSidebar open={open} onClose={onClose} />
      <div className={classes.container}>{children}</div>

    </BaseLayout>

  )
}

export default Layout
