// @ts-nocheck
import React from 'react'
import { Marker } from 'here-maps-react'
import HereMap, { Point } from './Map'

interface Props {
  addEventLocation: (hereObjectány) => Point
}

const AddEventMap: React.FC<Props> = ({ addEventLocation }) => {
  const [eventLocation, setEventLocation] = React.useState<Point>()
  const onTouchMap = (e) => {
    console.log(e);
  }
  return (
    <HereMap onTouchMap={onTouchMap}>
      {eventLocation && (
        <Marker
          lat={eventLocation.lat}
          lng={eventLocation.lng}
        />
      )}
    </HereMap>
  )
}

export default AddEventMap
