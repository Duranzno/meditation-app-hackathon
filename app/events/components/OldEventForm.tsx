
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Suspense } from "react"
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Button
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

const adapt /* ⬅️ this is a HOC */ = Component => ({
  input,
  meta: { valid },
  ...rest
}) => <Component {...input} {...rest} valid={valid} />

const AdaptedTextField = adapt(TextField)

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
                  <Field
                    name="name"
                    component={AdaptedTextField}
                    type="text"
                  />
                </div>
                <div>
                  <Field
                    name="title"
                    component={AdaptedTextField}
                    type="text"
                  />
                </div>
                <div>
                  <Field
                    name="description"
                    component={AdaptedTextField}
                    type="input"
                  />
                </div>
                <div>
                  <Field
                    name="datetime"
                    component={AdaptedTextField}
                    type="datetime-local"
                  />
                </div>
                <div>
                  <Field
                    name="duration"
                    component={AdaptedTextField}
                    type="number"
                  />
                </div>
                <br></br>
                <div>
                  <Field name="online" component="select">
                    <option value="true" selected>Online</option>
                    <option value="false">In-Person</option>
                  </Field>


                </div>
                              {/* <TextField
                label="Category"
                name="category"
                select
                helperText="Please select a Category"
              > */}
              <br></br>
              <Field name="category" component="select">

                <option key="Mindfulness" value="Mindfulness">Mindfulness</option>
                <option key="Spiritual" value="Spiritual">Spiritual</option>
                <option key="Focused" value="Focused">Focused</option>
                <option key="Yoga" value="Yoga">Yoga</option>
                <option key="Mantra" value="Mantra">Mantra</option>
                <option key="Zen" value="Zen">Zen</option>
                <option key="Kundalini" value="Kundalini">Kundalini</option>
              </Field>
                <div className="buttons">
                  <Button type="submit">
                    Submit
                  </Button>
                  <Button
                    type="button"
                    onClick={form.reset}
                  >
                    Reset
            </Button>
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