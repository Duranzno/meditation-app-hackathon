import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import NewEventSidebar from '../Sidebar/NewEventSidebar';
import { ListItemIcon } from '@material-ui/core';

interface Props {
}
/**
 * This is the EventCard that has no images and will be used on the event timeline and the map
 * DEVELOP:
 */

const useStyles = makeStyles({
    root: {
      minWidth: 170,
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

const SimpleEventCards: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    
    return (
        <Grid item xs={8}>
                    <h2>Your events</h2>

                    {["Meditation 1.0", "Meditation 2.0", "Meditation 3.0"].map((text, index) => (
                    <ListItem button key={text}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Event of the Day
                                </Typography>
                                <Typography variant="p" component="p">
                                me{bull}di{bull}ta{bull}te
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </ListItem>
                ))}
                <ListItem button style={{ backgroundColor: 'transparent' }}>
                    <ListItemIcon>
                        <NewEventSidebar/>
                    </ListItemIcon>
                </ListItem>
            </Grid>
        
    )
}

export default SimpleEventCards;


