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
        {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,700;1,200;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.baseLayoutRoot}>
        {children}
      </div>
    </>
  )
}

export default BaseLayout
