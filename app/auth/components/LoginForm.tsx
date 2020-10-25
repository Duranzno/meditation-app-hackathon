import React from "react"
import { Link, useMutation } from "blitz"
import { Form, FORM_ERROR } from "app/components/Form"
import login from "app/auth/mutations/login"
import { LoginInput } from "app/auth/validations"
import { Container, TextField, Typography, InputAdornment, Grid } from "@material-ui/core"
import Chevron from "@material-ui/icons/ChevronRight"
import Person from "@material-ui/icons/Person"
import Lock from "@material-ui/icons/Lock"
import useStyles from './AuthForm.styles'
type LoginFormProps = {
  onSuccess?: () => void
}
export const LoginForm = (props: LoginFormProps) => {
  const classes = useStyles()

  const [loginMutation] = useMutation(login)

  const onSubmit = async (values) => {
    try {
      await loginMutation(values)
      props.onSuccess?.()
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
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography component="h2" variant="h2" className={classes.title}>Login</Typography>

      <Form
        submitText="Sign In"
        schema={LoginInput}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        className={classes.form}
        buttonProps={{
          variant: "contained",
          color: "secondary",
          fullWidth: true,
          size: "large",
          endIcon: <Chevron />,
          className: classes.submit
        }}
      >
        <Grid container spacing={2} direction="column"  >
          <Grid item>

            <TextField
              variant="outlined"
              name="email"
              label="Email"
              placeholder="Email"
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }}
              fullWidth
            />
          </Grid>
          <Grid item>

            <TextField
              variant="outlined"
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }}
              required
            />
          </Grid>
        </Grid>

      </Form>


      <div style={{ marginTop: "1rem" }}>
        Your are new? <Link href="/signup">Create new user</Link>
      </div>

    </Container >
  )
}

export default LoginForm
