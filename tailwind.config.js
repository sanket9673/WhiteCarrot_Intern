// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // your paths
//     "./src/**/*.{html,js,jsx,ts,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       animation: {
//         aurora: "aurora 60s linear infinite",
//         spotlight: "spotlight 2s ease .75s 1 forwards",
//       },
//       keyframes: {
//         aurora: {
//           from: {
//             backgroundPosition: "50% 50%, 50% 50%",
//           },
//           to: {
//             backgroundPosition: "350% 50%, 350% 50%",
//           },
//         },
//         spotlight: {
//           "0%": {
//             opacity: 0,
//             transform: "translate(-72%, -62%) scale(0.5)",
//           },
//           "100%": {
//             opacity: 1,
//             transform: "translate(-50%,-40%) scale(1)",
//           },
//         },
//       },
//     },
//   },
//   plugins: [addVariablesForColors],
// };

// function addVariablesForColors({ addBase, theme }) {
//   try {
//     const colors = theme("colors");
//     const generateCSSVariables = (colorObj, prefix = "--") => {
//       const vars = {};
//       for (const [key, value] of Object.entries(colorObj)) {
//         if (typeof value === "object") {
//           Object.assign(vars, generateCSSVariables(value, `${prefix}${key}-`));
//         } else {
//           vars[`${prefix}${key}`] = value;
//         }
//       }
//       return vars;
//     };

//     const cssVariables = generateCSSVariables(colors);
//     addBase({
//       ":root": cssVariables,
//     });
//   } catch (error) {
//     console.error("Error in addVariablesForColors plugin:", error);
//   }
// }



const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  try {
    const colors = theme("colors");
    const generateCSSVariables = (colorObj, prefix = "--") => {
      const vars = {};
      for (const [key, value] of Object.entries(colorObj)) {
        if (typeof value === "object") {
          Object.assign(vars, generateCSSVariables(value, `${prefix}${key}-`));
        } else {
          vars[`${prefix}${key}`] = value;
        }
      }
      return vars;
    };

    const cssVariables = generateCSSVariables(colors);
    addBase({
      ":root": cssVariables,
    });
  } catch (error) {
    console.error("Error in addVariablesForColors plugin:", error);
  }
}
