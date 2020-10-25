import React from "react"
import clsx from "clsx"
import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  makeStyles,
  TextField,
  Card,
  Divider,
} from "@material-ui/core"
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    minWidth: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
interface Props {}

const NewEventForm: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.list)}>
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
  )
}

export default NewEventForm
