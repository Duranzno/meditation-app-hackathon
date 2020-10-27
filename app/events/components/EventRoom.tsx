import React, { Suspense } from 'react'
import Jitsi from 'react-jitsi'
import { BlitzPage, useParam } from 'blitz'
import useScript from 'app/hooks/useScript'
import { useCurrentUser } from 'app/hooks/useCurrentUser';

const config = {
  prejoinPageEnabled: false,
}

const interfaceConfig = {
  LANG_DETECTION: false,
  lang: "es",
  APP_NAME: "Satsang",
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  HIDE_INVITE_MORE_HEADER: true,
  MOBILE_APP_PROMO: false,
  SHOW_CHROME_EXTENSION_BANNER: false,
  TOOLBAR_BUTTONS: [
    "microphone",
    "camera",
    "fullscreen",
    "fodeviceselection",
    "hangup",
    "profile",
    "chat",
    "settings",
    "videoquality",
    "tileview",
    "download",
    "help",
    "mute-everyone"
    // 'security'
  ]
};
const handleAPI = JitsiMeetAPI => {
  JitsiMeetAPI.executeCommand("toggleVideo");
};

export const EventRoom: BlitzPage = () => {
  useScript("https://meet.jit.si/external_api.js")
  const eventId = useParam("eventId", "string")
  const user = useCurrentUser();

  const handleAPI = JitsiMeetAPI => {
    JitsiMeetAPI.executeCommand("toggleVideo");
  };

  // TODO: debug initial rendering issue 
  // (component suspends with no fallback, but Suspense component doesn't help and it's inconsistent)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Jitsi
        frameStyle={{ width: '100vw', height: '100vh' }}
        roomName={eventId}
        displayName={user?.name ? user.name : "Anonymous"}
        onAPILoad={handleAPI}
        config={config} />
    </Suspense>
  )
}

export async function getServerSideProps(ctx) {

}

export default EventRoom;