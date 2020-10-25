import React from 'react';
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

interface Props {
    event: {
      name: string; 
      title: string; 
      description: string; 
      datetime: Date; 
      duration: number;
      online: Boolean; 
      location: string;
    }
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
    return (
      <>
          
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={faker.image.nature()}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {console.log(props.event)}
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
        <Button size="small" color="primary">
          Add
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </>
    )
}

export default DetailedEventCard



