import React from 'react'
import DetailedEventCard from '../Event/DetailedEventCard'
import Grid from '@material-ui/core/Grid';


interface Props {
  events: Array<object>
}

const CardsContainer: React.FC<Props> = (props) => {
  const renderCards = () => {
    console.log(props.events)
    return props.events.map((event: {
      data: object;
    }, i) => {
      return (
        <Grid 
        item 
        xs={3}                 
        justify="center"
        direction="row"
        alignItems="flex-start" 
        key={i}>
          <DetailedEventCard event={event.data} />
        </Grid>

      )
    })
  }

  return (
    <>
      <div style={{ width: "1200px"}}>
      <Grid 
            container 
            item 
            direction="row" 
            alignItems="flex-start" 
            xs={12} 
            spacing={3}
            >
          {renderCards()}
        </Grid>
      </div>
    </>
  )
}

export default CardsContainer