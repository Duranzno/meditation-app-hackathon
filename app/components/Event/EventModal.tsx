import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { propTypes } from 'react-bootstrap/esm/Image';
import faker from 'faker';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 700,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modalSize: {
      position: 'fixed',
      background: 'lightblue',
      width: '50%',
      height: '50%',
    
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    
      transform: 'translate(-50%, -50%)',
    }
  }),
);

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const event = props.event


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img src={faker.image.nature()} alt="calming nature" width="500" height="200"/>
      <h2 id="simple-modal-title">{event.name}</h2>
      <p id="simple-modal-description">
        Description: {event.description}
        <br></br>
        Duration: {event.duration}0 mins
        <br></br>
        Location: {event.online ? "Online" : event.location}
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}