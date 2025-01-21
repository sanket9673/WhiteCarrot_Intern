// // src/components/Auth.js
// import { SpotlightPreview } from './SpotlightPreview';
// import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

// const Auth = ({ onSignOut }) => {
//   const session = useSession();
//   const supabase = useSupabaseClient();

//   const googleSignIn = async () => {
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
//   };

//   const signOut = async () => {
//     await supabase.auth.signOut();
//     if (onSignOut) onSignOut();
//   };

//   return (
//     <div>
//       {session ? (
//         <>
//           <h2>Hey there {session.user.email}</h2>
//           <button onClick={signOut}>Sign Out</button>
//         </>
//       ) : (
//         <button onClick={googleSignIn}>Sign In With Google</button>
//       )}
//     </div>
//   );
// };

// export default Auth;



// src/components/Auth.js
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import {ShootingStarsDemo } from './ShootingStarDemo';
import { Background } from '@tsparticles/engine';

const Auth = ({ onSignOut }) => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const googleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar.readonly', // Read-only scope for calendar
      }
    });
    if (error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    if (onSignOut) onSignOut();
  };

  return (
    <div>
      {session ? (
        <>
          {/* <h2>Hey there {session.user.email}</h2> */}
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <>
          <ShootingStarsDemo googleSignIn={googleSignIn} /> {/* Show SpotlightPreview when not signed in */}
        </>
      )}
    </div>
  );
};

export default Auth;
