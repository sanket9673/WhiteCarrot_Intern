import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const supabase = createClient(
  "https://dvbguoktgkacvjokyixj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2Ymd1b2t0Z2thY3Zqb2t5aXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMjc5MTAsImV4cCI6MjA1MjkwMzkxMH0.ki0IcPpdbeCTUfF2_k5MR0CVb9G5qLk8rUAg1z1nrt0"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </StrictMode>
);
