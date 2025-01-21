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
