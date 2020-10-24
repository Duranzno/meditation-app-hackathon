import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import NewEventForm from './NewEventForm';


/**
 * This is the Sidebar that will show:
 *  * The user's next schedule events
 *  * A button to create a new event and open the NewEventSidebar
 * DEVELOP:
 */


interface Props {
  open: boolean,
  onClose: Function,
}
const NewEventSidebar: React.FC<Props> = ({ open, onClose }) => {

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => onClose()}>
        <NewEventForm />
      </Drawer>
    </div>
  );
}

export default NewEventSidebar;
