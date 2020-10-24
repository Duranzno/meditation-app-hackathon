/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Suspense } from "react"
import { Form, Field } from 'react-final-form'

type EventFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const EventForm = ({ initialValues, onSubmit }: EventFormProps) => {
  // TODO: replace HTML5 input/form components with react-bootstrap
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        <div>Put your form fields here. But for now, just click submit</div>
        <div>{JSON.stringify(initialValues, null, 2)}</div>

      </Form >
    </Suspense>
  )
}

export default EventForm
