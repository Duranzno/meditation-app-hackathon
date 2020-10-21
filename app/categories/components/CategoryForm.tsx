import React from "react"

type CategoryFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}
/**
 * This is a Component created by Blitz that would create a Tag but this is done by the NewEventSidebar Tag creator with 
 *  a reactselect like component
 */
const CategoryForm = ({ initialValues, onSubmit }: CategoryFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <div>Put your form fields here. But for now, just click submit</div>
      <div>{JSON.stringify(initialValues)}</div>
      <button>Submit</button>
    </form>
  )
}

export default CategoryForm
