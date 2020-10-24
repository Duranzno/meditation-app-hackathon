import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import AddIcon from '@material-ui/icons/Add';
import { Card, CardActions, CardContent, FormControl, TextField } from '@material-ui/core';


interface Props {
    
}
/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 * DEVELOP:
 */

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    root: {
        minWidth: 100,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  });
  
const NewEventSidebar: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const form = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
    >
        <FormControl>
            <Card className={classes.root}>
                <CardContent>
                    <h2>Add new event</h2>
                    <TextField id="standard-basic" label="Title:" />
                    <TextField id="standard-basic" label="Date:" />
                    <TextField id="standard-basic" label="Time" />                
                </CardContent>
                <CardActions>
                    <Button size="small">Submit Event</Button>
                </CardActions>
            </Card>
            
        </FormControl>

      <Divider />
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <AddIcon onClick={toggleDrawer(anchor, true)}/>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {form(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NewEventSidebar;
