import { ReactNode } from "react"
import { Head } from "blitz"
import { CssBaseline } from "@material-ui/core"
import StaticSidebar from '../components/Sidebar/StaticSidebar'
import DetailedEventCard from '../components/Event/DetailedEventCard'
import CardsContainer from '../components/Event/CardsContainer'
import { makeStyles, useTheme } from '@material-ui/core/styles';

// import { ThemeProvider } from "react-bootstrap"
// import { theme } from '../stylesheets/theme'
type LayoutProps = {
  title?: string
  children: ReactNode
}

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));


const Layout = ({ title, children }: LayoutProps) => {
  const classes = useStyles()
  const userEvents = (apiResponse: Promise<User[]>) => { //dummy method
    apiResponse = ["Meditation 1.0", "Meditation 2.0", "Meditation 3.0"]
    return apiResponse;
  }

  const renderCards = () => {
    // let cards = getAllCardsFromDB();
    // iterate over cards to render
    console.log(cards)
    return <CardsContainer cards={cards}/>
  }

  return (
    <>
      <Head>
        <title>{title || "meditationApp"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ThemeProvider > */}
      <>
      <StaticSidebar userEvents={userEvents}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderCards()}

      </main>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </>
      {/* </ThemeProvider>, */}

    </>
  )
}

export default Layout


let cards = [
  {
    title: "Awesome Event",
    time: "2pm",
    date: "11/03/2020"
  },
  {
    title: "Another Event",
    time: "10am",
    date: "11/15/2020"
  },
  {
    title: "Great Meditation Event",
    time: "9am",
    date: "11/15/2020"
  },
  {
    title: "New Event",
    time: "1pmm",
    date: "11/15/2020"
  },
  {
    title: "Medidate Today",
    time: "12pm",
    date: "11/15/2020"
  }
]