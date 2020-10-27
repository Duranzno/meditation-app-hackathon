// @ts-nocheck
import React from "react"
import HEREMap, { Marker } from 'here-maps-react';
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { usePosition } from 'use-position'

/**
 * This is the HereMap component to be used when:
 *  * The user wants to see the local events
 *  * An offline event is taking place and it will show its data
 */


const useStyles = makeStyles((theme) => createStyles({
  root: {
  },
  map: {
    width: '500px', height: '500px'
  }
}));
interface Event {
  lat: number;
  lng: number;
}

interface Props {
  events?: Event[]
}
const HereMap: React.FC<Props> = ({ events }) => {
  const {
    NEXT_PUBLIC_HERE_MAPS_API_KEY: apiKey
  } = process.env;
  const { latitude: lat, longitude: lng } = usePosition();
  const [center, setCenter] = React.useState({ lat: 10.998666, lng: -63.79841 })
  React.useEffect(() => {
    if (lat && lng) setCenter({ lat, lng })
  }, [lng, lat, setCenter])

  const classes = useStyles()
  const onInteract = (e) => { console.log(e); };
  // const apiKey = "Jgc8a8TVMJPfBPyoh5gtW9xcz0xDQ79AZnOFkcTXxD0";
  return (
    <Grid className={classes.root} container display="column" justify="center" alignItems="center">
      <div className={classes.map} >
        <HEREMap
          center={center}
          zoom={12}
          hidpi
          interactive
          mapContainerId="hereMapId"
          apikey={apiKey}
        >
          {events.map(({ lat, lng }) => {
            return (
              <Marker
                lat={center.lat}
                lng={center.lng}
                onTap={onInteract}
                draggable
                key={lat + " " + lng}
              />
            )
          })}
        </HEREMap>
      </div>
    </Grid>
  )
}
export default HereMap
