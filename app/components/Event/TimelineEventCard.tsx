import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { ListItem, makeStyles } from "@material-ui/core"
const useStyles = makeStyles({
  root: {
    minWidth: 170,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
interface Props {
  text: string
}

const TimelineEventCard: React.FC<Props> = ({ text }) => {
  const classes = useStyles()
  return (
    <ListItem button key={text}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Event of the Day
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </ListItem>
  )
}

export default TimelineEventCard
