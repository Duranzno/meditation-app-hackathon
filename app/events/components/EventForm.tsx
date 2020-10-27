/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Form,
  FORM_ERROR
} from "app/components/Form"
import DateFnsUtils from '@date-io/date-fns';
import useStyles from "./EventForm.styles"
import {
  TextField,
  KeyboardDatePicker, KeyboardTimePicker, Select, Switches,
} from 'mui-rff'
import {
  Container, Typography, Grid,
} from "@material-ui/core"
import { Save } from "@material-ui/icons"
import { EventInput, EventInputDefault, EventInputType } from "../validations"
import { durationData, strings } from "app/constants"
import { Suspense } from "react";
import { getDatetime } from "app/utils";
import AddEventMap from "app/components/AddEventMap";
type EventFormProps = {
  onSubmit: (event: object) => void
}
const EventForm: React.FC<EventFormProps> = (props) => {
  const classes = useStyles()


  const onSubmit = async (values: EventInputType) => {
    try {
      console.log(values)
      const { date, time, ...event } = values
      const datetime = getDatetime(date, time);
      props.onSubmit({ ...event, datetime })
    } catch (error) {
      if (error.name === "AuthenticationError") {
        return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
      } else {
        return {
          [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        }
      }
    }
  }
  const formFields: JSX.Element[] = [
    <TextField variant="outlined" name="title" label={strings.event.title} placeholder={strings.event.title} required fullWidth />,
    <TextField variant="outlined" name="name" label={strings.event.name} placeholder={strings.event.name} required fullWidth />,
    <TextField multiline variant="outlined" name="description" label={strings.event.description} placeholder={strings.event.description} required fullWidth />,
    <KeyboardDatePicker name="date" label={strings.event.date} dateFunsUtils={DateFnsUtils} disableToolbar variant="inline" margin="normal" id="date-picker-inline" disablePast KeyboardButtonProps={{
      'aria-label': strings.event.date,
    }}
    />,
    <KeyboardTimePicker margin="normal" id="time-picker" name="time" label={strings.event.time} dateFunsUtils={DateFnsUtils} KeyboardButtonProps={{
      'aria-label': strings.event.time,
    }}
    />,
    <Select name="duration" data={durationData} label={strings.event.duration}
    />,
    <Switches label={strings.event.online} name="online" data={{ label: "online", value: true }} />
  ]
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <Container maxWidth="lg" className={classes.root}>
        <Typography component="h2" variant="h2" className={classes.title}>{strings.event.newEventTitle}</Typography>

        <Form
          submitText={strings.event.newSubmit}
          schema={EventInput}
          initialValues={EventInputDefault}
          onSubmit={onSubmit}
          className={classes.form}
          buttonProps={{
            variant: "contained",
            color: "secondary",
            fullWidth: true,
            size: "large",
            endIcon: <Save />,
            className: classes.submit
          }}
        >
          <Grid container direction="column" alignContent="stretch" spacing={2}>
            {formFields.map((item, idx) => (
              <Grid item className={classes.maxWidth} key={idx}>
                {item}
              </Grid>
            ))}
            <Grid item className={classes.maxWidth} >
              <AddEventMap addEventLocation={console.log}></AddEventMap>
            </Grid>
          </Grid>
        </Form>
      </Container>
    </Suspense>
  )
}
export default EventForm

