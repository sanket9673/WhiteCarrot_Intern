// import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
// import { useState, useEffect } from 'react';
// import { SpotlightPreview } from './components/SpotlightPreview';

// function App() {
//   const [events, setEvents] = useState([]); // Store events in state
//   const session = useSession(); // tokens, when session exists we have a user
//   const supabase = useSupabaseClient(); // talk to supabase!
//   const { isLoading } = useSessionContext();

//   useEffect(() => {
//     // If a session exists, fetch events when the component mounts
//     if (session) {
//       fetchCalendarEvents();
//     }
//   }, [session]);

//   if (isLoading) {
//     return <></>;
//   }

//   async function googleSignIn() {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         scopes: 'https://www.googleapis.com/auth/calendar.readonly', // Read-only scope for calendar
//       }
//     });
//     if (error) {
//       alert("Error logging in to Google provider with Supabase");
//       console.log(error);
//     }
//   }

//   async function signOut() {
//     await supabase.auth.signOut();
//   }

//   // Function to fetch events from Google Calendar
//   async function fetchCalendarEvents() {
//     console.log("Fetching calendar events");

//     const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
//       method: 'GET',
//       headers: {
//         'Authorization': 'Bearer ' + session.provider_token // Access token for Google
//       },
//     });

//     const data = await response.json();
//     console.log(data);

//     // Store the events in the state
//     if (data.items) {
//       setEvents(data.items);
//     }
//   }

//   return (
//     <div className="App">
//       <div style={{ width: "600px", margin: "30px auto" }}>
//         {session ? (
//           <>
//             <h2>Hey there {session.user.email}</h2>

//             <h3>Your Calendar Events</h3>
//             {/* Displaying events in a table */}
//             <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
//               <thead>
//                 <tr>
//                   <th>Event Name</th>
//                   <th>Description</th>
//                   <th>Start Time</th>
//                   <th>End Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {events.length > 0 ? (
//                   events.map((event, index) => (
//                     <tr key={index}>
//                       <td>{event.summary}</td>
//                       <td>{event.description || 'No Description'}</td>
//                       <td>{new Date(event.start.dateTime || event.start.date).toLocaleString()}</td>
//                       <td>{new Date(event.end.dateTime || event.end.date).toLocaleString()}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4">No events found</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>

//             <button onClick={() => signOut()}>Sign Out</button>
//           </>
//         ) : (
//           <>
//             <button onClick={() => googleSignIn()}>Sign In With Google</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
import { useSession, useSessionContext } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import Auth from "./components/Auth";
import EventsTable from "./components/EventsTable";

function App() {
  const session = useSession();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <div>Loading...</div>; // Display loading message or spinner
  }

  return (
    <div className="App">
      {/* Authentication Component */}
      {session ? (
        <>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              minHeight: "100vh",
              padding: "20px",
            }}
          >
            <EventsTable session={session} />
          </div>
          {/* <EventsTable session={session} /> */}
        </>
      ) : (
        <Auth onSignOut={() => console.log("User signed out")} />
      )}
    </div>
  );
}

export default App;
