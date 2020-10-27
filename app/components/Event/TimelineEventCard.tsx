import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { ListItem, makeStyles } from "@material-ui/core"
import { CalendarTodayOutlined, RoomOutlined } from "@material-ui/icons"
const useStyles = makeStyles({
  root: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    borderRadius: "16px",
  },
  title: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 800,
  },
  pos: {
    marginBottom: 12,
  },
  textContainer: {
    display: 'flex',
    flexDirection: "row",
    justifyItems: "space-between"
  },
  data: {
    paddingLeft: 6
  }
})
interface Props {
  text: string,
  onClick: Function
}

const TimelineEventCard: React.FC<Props> = ({ text, onClick }) => {
  const classes = useStyles()
  return (
    <ListItem button key={text}>
      <Card className={classes.root} onClick={() => onClick()}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {text}
          </Typography>
          <div className={classes.textContainer}>
            <CalendarTodayOutlined />
            <Typography className={classes.data} variant="body2" component="p">
              {text}``
            </Typography>
          </div>
          <div className={classes.textContainer}>
            <RoomOutlined />
            <Typography className={classes.data} variant="body2" component="p">
              {text}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default TimelineEventCard
