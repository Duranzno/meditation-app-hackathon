import React from 'react'
import { Head } from "blitz"
import { createStyles, makeStyles, Theme } from '@material-ui/core'

export interface BaseLayoutProps {
  title?: string
}
const useStyles = makeStyles((theme: Theme) => createStyles({
  baseLayoutRoot: {
    height: '100vh'
  },
}));
const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>{title || "meditationApp"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.baseLayoutRoot}>
        {children}
      </div>
    </>
  )
}

export default BaseLayout
