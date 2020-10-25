import { createStyles, Grid, makeStyles, Paper, Theme } from "@material-ui/core";
import React from "react"
import BaseLayout, { BaseLayoutProps } from "./BaseLayout"
interface LayoutProps extends BaseLayoutProps {
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  authRoot: {
    height: '100vh',
    flexDirection: "row"
  },
  formContainer: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
const AuthLayout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  const classes = useStyles()
  return (
    <BaseLayout {...rest}>
      <Grid container direction="row" justify="flex-end" component="main" className={classes.authRoot}>
        <Grid item xs={12} sm={8} md={5} component="div"
          className={classes.formContainer} >
          {children}
        </Grid>
      </Grid>
    </BaseLayout>
  )
}

export default AuthLayout
