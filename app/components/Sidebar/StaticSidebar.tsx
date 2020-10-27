import React from "react"
import clsx from "clsx"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import HomeIcon from "@material-ui/icons/Home"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import VideocamIcon from "@material-ui/icons/Videocam"
import Grid from "@material-ui/core/Grid"
import { useStyles } from "./StaticSidebar.styles"
import { Link } from "blitz"
import { Avatar, ButtonBase } from "@material-ui/core"

/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 */

const StaticSidebarIcon: React.FC<{ className: string }> = ({ children, className }) => (
  <ListItem className={className}>
    <ListItemIcon>{children}</ListItemIcon>
  </ListItem>
)
const Logo: React.FC<{ onClick: Function }> = ({ onClick }) => {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.logo} onClick={() => onClick()} >
      <Avatar src="/logo-transparent.png" />
    </ButtonBase>
  )
}
const StaticSidebar: React.FC = ({ children }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }
  const navbar = [
    { name: "Home", icon: <HomeIcon fontSize="large" />, href: "/events" },
    { name: "Categories", icon: <LocalOfferIcon fontSize="large" />, href: "/categories" },
    { name: "Local Events", icon: <RoomIcon fontSize="large" />, href: "/local" },
    { name: "Room", icon: <VideocamIcon fontSize="large" />, href: "/" },
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
        <Grid className={classes.shameFlex} container spacing={3}>
          <Grid className={classes.shameFlex} item xs={3}>
            <List className={classes.list}>
              <StaticSidebarIcon className={classes.listItem}>
                <Logo onClick={() => { handleDrawerOpen() }} />
              </StaticSidebarIcon>
              {navbar
                .map(({ href, icon: c, name }) =>
                  <StaticSidebarIcon className={classes.listItem} key={name}>
                    <Link href={href} >{c}</Link>
                  </StaticSidebarIcon>
                )}
            </List>
          </Grid>
          {open && children}
        </Grid>
      </Drawer>

    </div>
  )
}
export default StaticSidebar
