import React, { useState, useEffect } from 'react'
import Jitsi from 'react-jitsi'
//import JitsiMeetJS from "./external_api.min.js";
<script src='https://meet.jit.si/external_api.js'></script>

interface Props {}
/**
 * This is the JitsiVideochat component
 * DEVELOP:
 */
 
function JitsiVideochat() {
  const [loading, setLoading] = useState(true);
  const containerStyle = {
    width: '800px',
    height: '400px',
  };

  const jitsiContainerStyle = {
    display: (loading ? 'none' : 'block'),
    width: '100%',
    height: '100%',
  }

 function startConference() {
  try {
   const domain = 'meet.jit.si';
   const options = {
    roomName: 'roomName',
    height: 400,
    parentNode: document.getElementById('jitsi-container'),
    interfaceConfigOverwrite: {
     filmStripOnly: false,
     SHOW_JITSI_WATERMARK: false,
    },
    configOverwrite: {
     disableSimulcast: false,
    },
//     jwt: '<jwt_token>',
//     userInfo: {
//       email: 'email@jitsiexamplemail.com',
//       displayName: 'Aashna'
//   }
   };

   const api = new JitsiMeetJS.JitsiMeetExternalAPI(domain, options);
   api.addEventListener('videoConferenceJoined', () => {
    console.log('Local User Joined');
    setLoading(false);
    api.executeCommand('displayName', 'MyName');
   });
  } catch (error) {
   console.error('Failed to load Jitsi API', error);
  }
 }

 useEffect(() => {
  // verify the JitsiMeetExternalAPI constructor is added to the global..
  if (window.JitsiMeetExternalAPI) startConference();
  else alert('Jitsi Meet API script not loaded');
 }, []);

 return (
  <div
   style={containerStyle}
  >
   {loading}
   <div
    id="jitsi-container"
    style={jitsiContainerStyle}
   />
  </div>
 );
}

export default JitsiVideochat
