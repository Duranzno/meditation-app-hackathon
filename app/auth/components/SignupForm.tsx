import React from "react"
import { useMutation, Link } from "blitz"
import { Container, Typography, Grid } from "@material-ui/core"
import { TextField } from 'mui-rff'
import { Form, FORM_ERROR } from "app/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupInput } from "app/auth/validations"
import useStyles from './AuthForm.styles'
import strings from "app/constants"
// import ImageUploader from "app/components/ImageUploader"

export interface SignupFormProps {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)
  const classes = useStyles()
  const [file, setFile] = React.useState<File>()
  const onSubmit = async (values) => {
    console.log("HEY")
    try {
      await signupMutation(values)
      console.log(values)
      console.log(file)
      props.onSuccess?.()
    } catch (error) {
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        // This error comes from Prisma
        return { email: "This email is already being used" }
      } else {
        return { [FORM_ERROR]: error.toString() }
      }
    }
  }
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography component="h2" variant="h2" className={classes.title}>{strings.auth.signupTitle}</Typography>
      <Typography component="p" variant="body1" className={classes.title}>{strings.auth.signupText}</Typography>

      <Form
        submitText={strings.auth.signupTitle}
        schema={SignupInput}
        initialValues={{ email: "", password: "", name: "" }}
        className={classes.form}

        buttonProps={{
          variant: "contained",
          color: "primary",
          fullWidth: true,
          size: "large",
          className: classes.submit
        }}
        onSubmit={onSubmit}
      >
        <Grid container spacing={2} direction="column"  >
          <Grid item>
            {/* <ImageUploader label={strings.auth.signupUpload} onUploadFile={setFile}></ImageUploader> */}
            <TextField
              variant="outlined"
              name="name"
              label={strings.auth.signupName}
              placeholder={strings.auth.signupName}
              required
              fullWidth
              margin="dense"
            />
            <TextField
              variant="outlined"
              name="email"
              label={strings.auth.signupEmail}
              placeholder={strings.auth.signupEmail}
              required
              fullWidth
              margin="dense"
            />
            <TextField
              variant="outlined"
              name="password" label={strings.password}
              placeholder={strings.password}
              type="password"
              fullWidth

              required
              margin="dense"
            />
          </Grid>
        </Grid>

      </Form>
      <div style={{ marginTop: "1rem" }}>
        <Link href="/login">Already have an account? </Link>
      </div>
    </Container >
  )
}

export default SignupForm
