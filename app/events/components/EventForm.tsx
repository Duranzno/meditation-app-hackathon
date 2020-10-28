/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Suspense, useReducer } from "react"
import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  TextField,
  Card,
  Typography,
  MenuItem,
} from "@material-ui/core"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useMutation, useQuery, useSession } from 'blitz';
import updateUser from "app/users/mutations/updateUser";
import { useCurrentUser } from "app/hooks/useCurrentUser";
import getUser from "app/users/queries/getUser";



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

  // const [createEventMutation] = useMutation()
  // const currentUser = useCurrentUser()
  // const categories = useQuery(getCategories, {orderBy: {id: 'asc'}})
  const [updateUserMutation] = useMutation(updateUser)
  const session = useSession()
  const currentUser = useCurrentUser()

  const [state, dispatch] = useReducer(reducer, newEventValues)
  const {name, title, description, datetime, duration, online, location, category} = state
 
  const handleOnChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value})
  }

  const renderForm = () => {
    const cuId = currentUser.id
    console.log(cuId)
    return (
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
                name="category" 
                select
                helperText="Please select a Category"
                onChange={e => handleOnChange(e)}
              >
                <MenuItem key="Spiritual" value="Spiritual">Mindfulness</MenuItem>
                <MenuItem key="Mindfulness" value="Mindfulness">Spiritual</MenuItem>
                <MenuItem key="Focused" value="Focused">Focused</MenuItem>
                <MenuItem key="Movement" value="Movement">Movement</MenuItem>
                <MenuItem key="Mantra" value="Mantra">Mantra</MenuItem>
                <MenuItem key="Zen" value="Zen">Zen</MenuItem>
                <MenuItem key="Kundalini" value="Kundalini">Kundalini</MenuItem>
              </TextField>
          </CardContent>

          <CardActions>
            <Button 
            onClick={async () => {
                try {                 
                  const newEventByCU = await updateUserMutation({
                    where: { id: cuId},
                    data: { 
                      events: {
                        create: [
                          {
                            name: state.name, 
                            title: state.title, 
                            description: state.description, 
                            datetime: new Date(Date.parse(state.datetime)), 
                            duration: parseInt(state.duration), 
                            online: state.online === "true" ? true : false, 
                            location: state.location,
                            category: state.category                                        
                          }
                        ],
                      }
                    },
                  })
                  console.log(newEventByCU)
                  alert("success")
                } catch (error) {
                  console.log(error)
                  alert("Error creating event " + JSON.stringify(error, null, 2))
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
    )
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {console.log(session)}
      {/* {console.log(currentUser)} */}
      {/* {console.log(currentUser.id)} */}
      {/* {console.log(cuId)} */}
      {currentUser ? renderForm() : null}
          

    </Suspense>
  )
}

const categoryNames = ["Mindfulness", "Spiritual", "Focused", "Movement", "Mantra", "Zen", "Kundalini"]

const categories = categoryNames.map((name, i) => {return { name: name, id: i } })


export default EventForm

