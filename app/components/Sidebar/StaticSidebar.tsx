import React from "react"
import clsx from "clsx"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import CopyrightIcon from "@material-ui/icons/Copyright"
import HomeIcon from "@material-ui/icons/Home"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined"
import Grid from "@material-ui/core/Grid"
import { useStyles } from "./StaticSidebar.styles"
import { Link } from "blitz"
import { IconButton } from "@material-ui/core"

/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 */

const StaticSidebarIcon: React.FC = ({ children }) => (
  <ListItem style={{ backgroundColor: "transparent" }}>
    <ListItemIcon>{children}</ListItemIcon>
  </ListItem>
)

const StaticSidebar: React.FC = ({ children }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }
  const navbar = [
    { icon: <CopyrightIcon />, onClick: (e: any) => handleDrawerOpen() },
    { icon: <HomeIcon fontSize="large"/>, href: "/" },
    { icon: <LocalOfferIcon fontSize="large"/>, href: "/local/" },
    { icon: <RoomIcon fontSize="large"/>, href: "/events/" },
    { icon: <VideocamOutlinedIcon fontSize="large"/>, href: "/" },
  ]
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <List>
              {navbar
                .map(({ onClick, href, icon: c }) => {
                  if (href) {
                    return <Link href={href}>{c}</Link>
                  } else if (onClick) {
                    return <IconButton onClick={onClick}>{c}</IconButton>
                  } else {
                    throw Error("StaticSidebar.tsx:Element neither button nor link")
                  }
                })
                .map((v) => (
                  <StaticSidebarIcon>{v}</StaticSidebarIcon>
                ))}
            </List>
          </Grid>
          {open && children}
        </Grid>
      </Drawer>

    </div>
  )
}
export default StaticSidebar
