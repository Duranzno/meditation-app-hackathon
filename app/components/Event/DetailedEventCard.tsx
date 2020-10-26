import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import faker from 'faker';
import EventModal from './EventModal'

import { useCurrentUser } from "app/hooks/useCurrentUser"
import { useMutation, useQuery } from 'blitz';
import updateUser from "app/users/mutations/updateUser"


interface Props {
    event: {
      name: string; 
      title: string; 
      description: string; 
      datetime: Date; 
      duration: number;
      online: Boolean; 
      location: string;
    };
    id: number;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


/**
 * This is the EventCard that has  images and will be used on the event timeline and the map
 * DEVELOP:
 */
// TODO: This will be the card for an Event that has images

const DetailedEventCard: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen] = useState()
    const [updateUserMutation] = useMutation(updateUser)
    const currentUser = useCurrentUser()

    const handleClose =() => {
      setOpen(false)
    }

    const event = props.event
    let id = currentUser ? currentUser.id : null
    

    return (
      <>
          <EventModal open={open} event={props.event} handleClose={handleClose} />
        <Card className={classes.root}>
      <CardActionArea onClick={() => setOpen(true)}>
        <CardMedia
          className={classes.media}
          image={faker.image.nature()}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {console.log(props.event)} */}
            {props.event.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.event.datetime.toString()}
          <br/>
          {props.event.duration}0 mins
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* {console.log(id)} */}
        <Button         
        onClick={async () => {
          try {
            const updated = await updateUserMutation({
              where: { id: id },
              data: { 
                Event: {
                  create: [
                    {
                      name: event.name, 
                      title: event.title, 
                      description: event.description, 
                      datetime: event.datetime, 
                      duration: event.duration, 
                      online: event.online, 
                      location: event.location
                    }
                  ],
                },
              },
            })
          } catch (error) {
            console.log(error)
            alert("Error creating user " + JSON.stringify(error, null, 2))
          }
        }} 
        size="small" 
        color="primary"
        >
          Add
        </Button>
        <Button onClick={() => setOpen(true)} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </>
    )
}

export default DetailedEventCard



