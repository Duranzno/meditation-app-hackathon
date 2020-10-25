import React from "react"
import { useMutation, Link } from "blitz"
import { Container, TextField, Typography, Grid } from "@material-ui/core"

import { Form, FORM_ERROR } from "app/components/Form"
import signup from "app/auth/mutations/signup"
import { SignupInput } from "app/auth/validations"
import useStyles from './AuthForm.styles'

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)
  const classes = useStyles()
  const onSubmit = async (values) => {
    try {
      await signupMutation(values)
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
      <Typography component="h2" variant="h2" className={classes.title}>Join us</Typography>

      <Form
        submitText="Create Account"
        schema={SignupInput}
        initialValues={{ email: "", password: "" }}
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

            <TextField
              variant="outlined"
              name="email"
              label="Email"
              placeholder="Email"
              required
              fullWidth
              margin="dense"
            />
            <TextField
              variant="outlined"
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              fullWidth

              required
              margin="dense"
            />
          </Grid>
        </Grid>

      </Form>      <div style={{ marginTop: "1rem" }}>
        <Link href="/login">Already have an account? </Link>
      </div>
    </Container >
  )
}

export default SignupForm
