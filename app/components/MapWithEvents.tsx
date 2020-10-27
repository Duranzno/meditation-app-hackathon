// @ts-nocheck
import React from 'react'
import { Marker } from 'here-maps-react'
import HereMap, { Point } from './Map'

interface Props {
  events: Point[],
  onTouchEvent: Function,
}

const MapWithEvents: React.FC<Props> = ({ events, onTouchEvent }) => {
  return (
    <HereMap>
      {events.map(({ lat, lng }) => {
        return (
          <Marker
            lat={lat}
            lng={lng}
            onTap={(e) => onTouchEvent(e)}
            draggable
            key={lat + " " + lng}
          />
        )
      })}
    </HereMap>
  )
}

export default MapWithEvents
