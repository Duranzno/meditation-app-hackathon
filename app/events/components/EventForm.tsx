/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import { Form, Field } from "react-final-form"

type EventFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// TODO: replace dummy onSubmit with createEvent mutation
const onSubmit = async (values) => {
  console.log(values)
  // await sleep(200);
  // window.alert(JSON.stringify(values, 0, 2))
}

const EventForm = ({ initialValues }: EventFormProps) => {
  // TODO: replace HTML5 input/form components with react-bootstrap
  return (
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
              // placeholder="Session Name"
            />
          </div>
          <div>
            <label> Session Title </label>
            <Field name="title" component="input" type="text" />
          </div>
          <div>
            <label> Description </label>
            <Field name="description" component="textarea" type="text" />
          </div>
          <div>
            <label> Time </label>
            <Field name="datetime" component="input" type="datetime-local" />
          </div>
          <div>
            <label> Duration (mins) </label>
            <Field name="duration" component="input" type="number" />
          </div>
          <div>
            <label> Session Type </label>
            <Field name="online" component="select">
              <option value="true" selected>
                Online
              </option>
              <option value="false">In-Person</option>
            </Field>
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={form.reset}>
              Reset
            </button>
          </div>
        </form>
      )}
    >
      <div>Put your form fields here. But for now, just click submit</div>
      <div>{JSON.stringify(initialValues, null, 2)}</div>
    </Form>
  )
}

export default EventForm
