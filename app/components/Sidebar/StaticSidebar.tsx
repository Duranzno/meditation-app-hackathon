import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CopyrightIcon from '@material-ui/icons/Copyright';
import HomeIcon from '@material-ui/icons/Home';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import Grid from '@material-ui/core/Grid';

import NewEventSidebar from './NewEventSidebar';
import TimeLineSidebar from './TimelineSidebar';
import SimpleEventCards from '../Event/SimpleEventCards';
import DetailedEventCard from '../Event/DetailedEventCard';


interface Props {
    events: string[]
}
/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 * DEVELOP:
 */

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
     backgroundColor: 'transparent' 
  }
}));

export default function StaticSidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

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

                    <ListItem button onClick={handleDrawerOpen} style={{ backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <CopyrightIcon />
                        </ListItemIcon>
                    </ListItem>

                    <ListItem button style={{ backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                    </ListItem>

                    <ListItem button style={{ backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <LocalOfferIcon/>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem button style={{ backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <RoomIcon/>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem button style={{ backgroundColor: 'transparent' }}>
                        <ListItemIcon>
                            <VideocamOutlinedIcon />
                        </ListItemIcon>
                    </ListItem>

                    

                </List>
            </Grid>


            {open ? <SimpleEventCards/> : null}

        </Grid>

      </Drawer>

    {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <DetailedEventCard/>

      </main> */}
    </div>
  );
}



