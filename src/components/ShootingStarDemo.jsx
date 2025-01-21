// // src/components/ShootingStarDemo.js
// import React from "react";
// import { TextHoverEffect } from "./ui/TextHoverEffect";
// import { Button } from "./ui/MovingBorder";
// import { ShootingStars } from "./ui/ShootingStars";
// import { StarsBackground } from "./ui/StarsBackground";

// export function ShootingStarsDemo({ googleSignIn }) {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden">
//       <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
//         <div className="flex justify-center">
//           <TextHoverEffect text="WhiteCarrot.io" />
//         </div>
//         <p className="lg:mt-[-130px] mt-[-50px] font-normal text-3xl text-neutral-300 max-w-lg text-center mx-auto">
//           Innovation in Every Bite.
//         </p>
//         <div className="flex justify-center mt-[50px]">
//           <Button
//             borderRadius="1.75rem"
//             duration={2000}
//             className="text-white text-sm"
//             onClick={googleSignIn}
//           >
//             Sign In With Google
//           </Button>
//         </div>
//       </div>
//       <ShootingStars />
//       <StarsBackground />
//     </div>
//   );
// }




// import React from "react";
// import { TextHoverEffect } from "./ui/TextHoverEffect";
// import { Button } from "./ui/MovingBorder";
// import { ShootingStars } from "./ui/ShootingStars";
// import { StarsBackground } from "./ui/StarsBackground";


// export function ShootingStarsDemo({ googleSignIn }) {
//   return (
//     <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden">
//       <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
//         <div className="flex justify-center">
//           <TextHoverEffect text="WhiteCarrot.io" />
//         </div>
//         <p className="lg:mt-[-130px] mt-[-50px] font-normal text-3xl text-neutral-300 max-w-lg text-center mx-auto">
//           Innovation in Every Bite.
//         </p>
//         <div className="flex justify-center mt-[50px]">
//           <Button
//             borderRadius="1.75rem"
//             duration={2000}
//             className="text-white text-sm flex items-center space-x-1"
//             onClick={googleSignIn}
//           >
//             {/* Google Logo with valid URL */}
//             <img
//               src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
//               alt="Google Logo"
//               className="w-6 h-6"
//             />
//             <span>Login With Google</span>
//           </Button>
//         </div>
//       </div>
//       <ShootingStars />
//       <StarsBackground />
//     </div>
//   );
// }



import React from "react";
import { TextHoverEffect } from "./ui/TextHoverEffect";
import { Button } from "./ui/MovingBorder";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarsBackground";

export function ShootingStarsDemo({ googleSignIn }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black/[0.96] antialiased relative overflow-hidden">
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="flex justify-center">
          <TextHoverEffect text="WhiteCarrot.io" />
        </div>
        <p className="lg:mt-[-130px] mt-[-50px] font-normal text-3xl text-neutral-300 max-w-lg text-center mx-auto">
          Innovation in Every Bite.
        </p>
        <div className="flex justify-center mt-[50px]">
          <Button
            borderRadius="1.75rem"
            duration={2000}
            className="text-white text-sm flex items-center space-x-1"
            onClick={googleSignIn}
          >
            {/* Google Logo with valid URL */}
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="Google Logo"
              className="w-6 h-6"
            />
            <span>Login With Google</span>
          </Button>
        </div>
      </div>
      {/* Shooting Stars and Background set to fill the entire viewport */}
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
