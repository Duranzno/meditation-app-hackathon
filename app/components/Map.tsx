// @ts-nocheck
import React from "react"
import HEREMap, { usePlatform } from 'here-maps-react';
import { Grid } from "@material-ui/core";
import { usePosition } from 'use-position'
import { useStyles } from './Map.styles'
/**
 * This is the HereMap component to be used when:
 *  * The user wants to see the local events
 *  * An offline event is taking place and it will show its data
 */

export interface Point {
  lat: number;
  lng: number;
}

interface Props {
  onTouchMap?: Function,
}
const HereMap: React.FC<Props> = ({ onTouchMap, children }) => {
  const {
    NEXT_PUBLIC_HERE_MAPS_API_KEY: apiKey
  } = process.env;
  const { latitude: lat, longitude: lng } = usePosition();
  const [center, setCenter] = React.useState({ lat: 10.998666, lng: -63.79841 })
  const [map, setmap] = React.useState()
  React.useEffect(() => {
    if (lat && lng) setCenter({ lat, lng })
  }, [lng, lat, setCenter])
  const onTap = (evt) => {
    // console.log(map)
    debugger
    // var coord = map.screenToGeo(evt.currentPointer.viewportX,
    // evt.currentPointer.viewportY);
    // onTouchMap(coord)
  }
  const classes = useStyles()
  return (
    <Grid className={classes.root} container display="column" justify="center" alignItems="center">
      <div className={classes.map} >
        <HEREMap
          center={center}
          zoom={12}
          hidpi
          interactive
          onTap={onTap}
          mapContainerId="hereMapId"
          apikey={apiKey}
        >
          {children}
        </HEREMap>
      </div>
    </Grid>
  )
}

export default HereMap
