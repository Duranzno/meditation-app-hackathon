import { BlitzPage } from 'blitz'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardsContainer from 'app/components/Event/CardsContainer';
import Layout from 'app/layouts/Layout';
import faker from 'faker';

let events: Array<object> = []
for (let i = 0; i < 10; i++) {
  let event = {
    data: {
      name: `${faker.date.weekday()} Meditation`, 
      title: `Peaceful Meditation`, 
      description: faker.random.words(), 
      datetime: faker.date.future(), 
      duration: Math.floor(Math.random() * (9 - 3) + 3), 
      online: Math.random() >= 0.5, 
      location: faker.address.city(),
      Category: {
        connect: {
          id: Math.floor(Math.random() * (5 - 1) + 1),
        },
      },
      User: {
        connect: {
          id: Math.floor(Math.random() * (5 - 1) + 1),
        },
      },
    },
  }
  events.push(event)
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
const TemporalEvent: BlitzPage = () => {
  const classes = useStyles()
  const renderCards = () => {
    // let events = getAllEventsFromDB();
    // iterate over cards to render
    console.log(events)
    return <CardsContainer events={events} />
  }
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {console.log(events)}
      {renderCards()}
    </main>
  )
}
TemporalEvent.getLayout = (page) => <Layout title="Temporal">{page}</Layout>

export default TemporalEvent
