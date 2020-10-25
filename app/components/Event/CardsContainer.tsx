import React from 'react'
import DetailedEventCard from '../Event/DetailedEventCard'
import Grid from '@material-ui/core/Grid';


interface Props {
  cards: Array<object>
}

const CardsContainer: React.FC<Props> = (props) => {
  const renderCards = () => {
    console.log(props.cards)
    return props.cards.map((card: {
      title: string;
      date: string;
      time: string;
    }) => {
      return (
        <Grid item xs={3} key={card.title}>
          <DetailedEventCard card={card} />
        </Grid>

      )
    })
  }

  return (
    <>
      <div className="container">
        <Grid
          container
          item
          justify="center"
          direction="row"
          alignItems="flex-start"
          xs={12}
          spacing={4}
        >
          {renderCards()}
        </Grid>
      </div>
    </>
  )
}

export default CardsContainer
