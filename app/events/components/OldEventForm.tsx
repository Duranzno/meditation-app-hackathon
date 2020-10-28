/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Suspense } from "react"
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
import { Form, Field } from 'react-final-form'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
type EventFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
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

const EventForm = ({ initialValues, onSubmit }: EventFormProps) => {
  // TODO: replace HTML5 input/form components with react-bootstrap
  const classes = useStyles()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>Add new event</Typography>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, form, values }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <label> Session Name </label>
                  <Field
                    name="name"
                    component="input"
                    type="text"
                  />
                </div>
                <div>
                  <label> Session Title </label>
                  <Field
                    name="title"
                    component="input"
                    type="text"
                  />
                </div>
                <div>
                  <label> Description </label>
                  <Field
                    name="description"
                    component="textarea"
                    type="input"
                  />
                </div>
                <div>
                  <label> Time </label>
                  <Field
                    name="datetime"
                    component="input"
                    type="datetime-local"
                  />
                </div>
                <div>
                  <label> Duration (mins) </label>
                  <Field
                    name="duration"
                    component="input"
                    type="number"
                  />
                </div>
                <div>
                  <label> Session Type </label>
                  <Field name="online" component="select">
                    <option value="true" selected>Online</option>
                    <option value="false">In-Person</option>
                  </Field>
                </div>
                <div className="buttons">
                  <button type="submit">
                    Submit
            </button>
                  <button
                    type="button"
                    onClick={form.reset}
                  >
                    Reset
            </button>
                </div>
              </form>
            )
            }
          >

          </Form >
        </CardContent>
      </Card>
    </Suspense>
  )
}

export default EventForm