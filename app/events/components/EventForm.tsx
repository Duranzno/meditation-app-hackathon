/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Suspense, useReducer } from "react"
import { Form, Field } from 'react-final-form'
import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  TextField,
  Card,
  Typography,
  MenuItem,
  Menu,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import createEvent from "app/events/mutations/createEvent"
import { useMutation, useQuery } from 'blitz';
import { useCurrentUser } from "app/hooks/useCurrentUser";
import getCategories from "app/categories/queries/getCategories";



type EventFormProps = {
  newEventValues: any
}



const reducer = (state, {field, value}) => {
  return{
    ...state,
    [field]: value
  }
}

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    minWidth: 70,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
})
);

const EventForm = ({ newEventValues }: EventFormProps) => {
  // TODO: replace HTML5 input/form components with react-bootstrap
  const classes = useStyles()

  const [createEventMutation] = useMutation(createEvent)
  const currentUser = useCurrentUser()
  const cuId = currentUser?.id
  const categories = useQuery(getCategories, {orderBy: {id: 'asc'}})

  const [state, dispatch] = useReducer(reducer, newEventValues)
  const {name, title, description, datetime, duration, online, location, categoryId} = state
 
  const handleOnChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value})
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {console.log(state.categoryId)}
      
          <FormControl>
            <Card className={classes.root}>
              <CardContent>
              <Typography className={classes.title}>Add new event</Typography>
              <TextField
                onChange={e => handleOnChange(e)}
                label="Session Name"
                name="name"
                id="standard-basic"
                type="text"
              />
              <br></br>
              <TextField 
                onChange={e => handleOnChange(e)}
                label="Session Title"
                name="title"
                id="standard-basic"
                type="text"
              />
              <br></br>
              <TextField
                onChange={e => handleOnChange(e)}
                label="Description"
                name="description"
                id="standard-multiline-flexible"
                rowsMax={7}
                multiline
                type="input"
              />
              <br></br>              
              <TextField
                id="datetime-local"
                label="Time"
                name="datetime"
                type="datetime-local"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => handleOnChange(e)}
              />
              <TextField
                label="Duration (mins)"
                name="duration"
                id="standard-basic"
                type="number"
                onChange={e => handleOnChange(e)}
              />
              <br></br>
              <TextField 
                label="Session Type" 
                name="online" 
                select
                helperText="Please select Online of In-Person"
                onChange={e => handleOnChange(e)}
              >
                <MenuItem value="true">Online</MenuItem>
                <MenuItem value="false">In-Person</MenuItem>
              </TextField>
              <br></br>
              <TextField 
                label="Category" 
                name="Category" 
                select
                helperText="Please select a Category"
                onChange={e => handleOnChange(e)}
              >
                <MenuItem key="s" value="7">Spiritual</MenuItem>
                <MenuItem key="m" value="8">Mindfulness</MenuItem>
                <MenuItem key="f" value="9">Focused</MenuItem>
                <MenuItem key="mo" value="10">Movement</MenuItem>
              </TextField>
          </CardContent>

          <CardActions>
            <Button 
            onClick={async () => {
                try {
                  const newEvent = await createEventMutation({
                    data: { 
                            name: state.name, 
                            title: state.title, 
                            description: state.description, 
                            datetime: new Date(Date.parse(state.datetime)), 
                            duration: parseInt(state.duration), 
                            online: state.online === "true" ? true : false, 
                            location: state.location,
                            Category: {
                              connect: {
                                id: state.categoryId,
                              },
                            },
                            User: {
                              connect: {
                                id: cuId,
                              },
                            },
                    },
                  })
                  alert("success")
                } catch (error) {
                  console.log(error)
                  alert("Error creating user " + JSON.stringify(error, null, 2))
                }
              }
            }
            type="submit" 
            size="small"
            >Submit Event
            </Button>
          </CardActions>
          </Card>
          </FormControl>

    </Suspense>
  )
}

export default EventForm

let mockCategories: Array<object>  = [
  {data: {id: 7, name: "Spiritual"}},
  {data: {id: 8, name: "Mindfulness"}},
  {data:  {id: 9, name: "Focused"}},
  {data: {id: 10, name: "Movement"}}
]