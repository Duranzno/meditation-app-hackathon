import { BlitzPage } from 'blitz'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardsContainer from 'app/components/Event/CardsContainer';
import Layout from 'app/layouts/Layout';


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
const TemporalEvent: BlitzPage = () => {
  const classes = useStyles()
  const renderCards = () => {
    // let cards = getAllCardsFromDB();
    // iterate over cards to render
    console.log(cards)
    return <CardsContainer cards={cards} />
  }
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {renderCards()}
    </main>
  )
}
TemporalEvent.getLayout = (page) => <Layout title="Temporal">{page}</Layout>

export default TemporalEvent
