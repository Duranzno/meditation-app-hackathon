import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface Props {
    card: {
    title: string;
    date: string;
    time: string;
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
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.card.date}
          <br/>
          {props.card.time}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
}

export default DetailedEventCard



