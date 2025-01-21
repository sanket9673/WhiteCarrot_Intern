// // src/components/EventsTable.js
// import { useState, useEffect } from "react";

// const EventsTable = ({ session }) => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchCalendarEvents = async () => {
//       if (session) {
//         const response = await fetch(
//           "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//           {
//             method: "GET",
//             headers: {
//               Authorization: "Bearer " + session.provider_token, // Access token for Google
//             },
//           }
//         );

//         const data = await response.json();
//         if (data.items) {
//           setEvents(data.items);
//         }
//       }
//     };

//     fetchCalendarEvents();
//   }, [session]);

//   return (
//     <div>
//       <h3>Your Calendar Events</h3>
//       <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
//         <thead>
//           <tr>
//             <th>Event Name</th>
//             <th>Description</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.length > 0 ? (
//             events.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.summary}</td>
//                 <td>{event.description || "No Description"}</td>
//                 <td>
//                   {new Date(
//                     event.start.dateTime || event.start.date
//                   ).toLocaleString()}
//                 </td>
//                 <td>
//                   {new Date(
//                     event.end.dateTime || event.end.date
//                   ).toLocaleString()}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No events found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventsTable;

// // src/components/EventsTable.js
// import { useState, useEffect } from "react";
// import { useSupabaseClient } from '@supabase/auth-helpers-react'; // Import Supabase client

// const EventsTable = ({ session }) => {
//   const [events, setEvents] = useState([]);
//   const supabase = useSupabaseClient(); // Initialize Supabase client

//   useEffect(() => {
//     const fetchCalendarEvents = async () => {
//       if (session) {
//         const response = await fetch(
//           "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//           {
//             method: "GET",
//             headers: {
//               Authorization: "Bearer " + session.provider_token, // Access token for Google
//             },
//           }
//         );

//         const data = await response.json();
//         if (data.items) {
//           setEvents(data.items);
//         }
//       }
//     };

//     fetchCalendarEvents();
//   }, [session]);

//   // Sign out function
//   const signOut = async () => {
//     await supabase.auth.signOut();
//   };

//   return (
//     <div className="text-white">
//       <h3>Your Calendar Events</h3>
//       <button onClick={signOut} style={{ marginBottom: "20px", padding: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}>
//         Sign Out
//       </button>
//       <table border="1" style={{ width: "100%", marginBottom: "20px" }}>
//         <thead>
//           <tr>
//             <th>Event Name</th>
//             <th>Description</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.length > 0 ? (
//             events.map((event, index) => (
//               <tr key={index}>
//                 <td>{event.summary}</td>
//                 <td>{event.description || "No Description"}</td>
//                 <td>
//                   {new Date(
//                     event.start.dateTime || event.start.date
//                   ).toLocaleString()}
//                 </td>
//                 <td>
//                   {new Date(
//                     event.end.dateTime || event.end.date
//                   ).toLocaleString()}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4">No events found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventsTable;

// import React, { useState, useEffect } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { motion } from "framer-motion";
// import { Calendar, Clock, LogOut, Filter } from "lucide-react";

// const EventsTable = ({ session }) => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const supabase = useSupabaseClient();

//   useEffect(() => {
//     const fetchCalendarEvents = async () => {
//       if (session) {
//         const response = await fetch(
//           "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//           {
//             method: "GET",
//             headers: {
//               Authorization: "Bearer " + session.provider_token,
//             },
//           }
//         );

//         const data = await response.json();
//         if (data.items) {
//           const sortedEvents = data.items.sort((a, b) => {
//             const dateA = new Date(a.start.dateTime || a.start.date);
//             const dateB = new Date(b.start.dateTime || b.start.date);
//             return dateB - dateA;
//           });
//           setEvents(sortedEvents);
//           setFilteredEvents(sortedEvents);
//         }
//       }
//     };

//     fetchCalendarEvents();
//   }, [session]);

//   const handleFilter = () => {
//     if (startDate && endDate) {
//       const filtered = events.filter((event) => {
//         const eventStartDate = new Date(event.start.dateTime || event.start.date);
//         const eventEndDate = new Date(event.end.dateTime || event.end.date);
//         return (
//           eventStartDate >= new Date(startDate) &&
//           eventEndDate <= new Date(endDate)
//         );
//       });
//       setFilteredEvents(filtered);
//     } else {
//       setFilteredEvents(events);
//     }
//   };

//   const signOut = async () => {
//     await supabase.auth.signOut();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-8 rounded-lg shadow-lg"
//     >
//       <div className="flex justify-between items-center mb-8">
//         <h3 className="text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Your Calendar Events
//         </h3>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={signOut}
//           className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-lg transition-all duration-300"
//         >
//           <LogOut size={18} /> Sign Out
//         </motion.button>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="mb-8 flex flex-wrap gap-4 items-end"
//       >
//         <div className="flex-1 min-w-[200px]">
//           <label className="block text-sm font-medium mb-2" htmlFor="start-date">
//             Start Date
//           </label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               id="start-date"
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
//             />
//           </div>
//         </div>
//         <div className="flex-1 min-w-[200px]">
//           <label className="block text-sm font-medium mb-2" htmlFor="end-date">
//             End Date
//           </label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               id="end-date"
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
//             />
//           </div>
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleFilter}
//           className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
//         >
//           <Filter size={18} /> Apply Filter
//         </motion.button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//         className="overflow-x-auto"
//       >
//         <table className="min-w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
//           <thead className="bg-gray-700">
//             <tr>
//               <th className="py-3 px-4 text-left text-gray-300">Event Name</th>
//               <th className="py-3 px-4 text-left text-gray-300">Description</th>
//               <th className="py-3 px-4 text-left text-gray-300">Start Time</th>
//               <th className="py-3 px-4 text-left text-gray-300">End Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEvents.length > 0 ? (
//               filteredEvents.map((event, index) => (
//                 <motion.tr
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                   className="border-b border-gray-600 hover:bg-gray-700 transition-colors duration-300"
//                 >
//                   <td className="py-3 px-4 font-medium text-gray-100">{event.summary}</td>
//                   <td className="py-3 px-4 text-gray-300">
//                     {event.description || "No Description"}
//                   </td>
//                   <td className="py-3 px-4 whitespace-nowrap text-gray-300">
//                     <Clock size={16} className="inline-block mr-2" />
//                     {new Date(event.start.dateTime || event.start.date).toLocaleString()}
//                   </td>
//                   <td className="py-3 px-4 whitespace-nowrap text-gray-300">
//                     <Clock size={16} className="inline-block mr-2" />
//                     {new Date(event.end.dateTime || event.end.date).toLocaleString()}
//                   </td>
//                 </motion.tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={4} className="py-3 px-4 text-center text-gray-400">
//                   No events found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default EventsTable;

// import React, { useState, useEffect } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { motion } from "framer-motion";
// import { Calendar, Clock, LogOut, Filter } from "lucide-react";
// import { Cover } from "./ui/Cover";
// import { AuroraBackground } from "./ui/Aurora";

// const EventsTable = ({ session }) => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const supabase = useSupabaseClient();

//   useEffect(() => {
//     const fetchCalendarEvents = async () => {
//       if (session) {
//         const response = await fetch(
//           "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//           {
//             method: "GET",
//             headers: {
//               Authorization: "Bearer " + session.provider_token,
//             },
//           }
//         );

//         const data = await response.json();
//         if (data.items) {
//           const sortedEvents = data.items.sort((a, b) => {
//             const dateA = new Date(a.start.dateTime || a.start.date);
//             const dateB = new Date(b.start.dateTime || b.start.date);
//             return dateB - dateA;
//           });
//           setEvents(sortedEvents);
//           setFilteredEvents(sortedEvents);
//         }
//       }
//     };

//     fetchCalendarEvents();
//   }, [session]);

//   const handleFilter = () => {
//     if (startDate && endDate) {
//       const filtered = events.filter((event) => {
//         const eventStartDate = new Date(event.start.dateTime || event.start.date);
//         const eventEndDate = new Date(event.end.dateTime || event.end.date);
//         return (
//           eventStartDate >= new Date(startDate) &&
//           eventEndDate <= new Date(endDate)
//         );
//       });
//       setFilteredEvents(filtered);
//     } else {
//       setFilteredEvents(events);
//     }
//   };

//   const signOut = async () => {
//     await supabase.auth.signOut();
//   };

//   // Extract the user's name from the session
//   const userName = session?.user?.user_metadata?.name || "User";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       // className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-8 rounded-lg shadow-lg"
//       className="text-white p-8 rounded-lg shadow-lg"
//     >
//        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-500 to-neutral-700 dark:from-neutral-100 dark:via-white dark:to-white">
//         Hey {userName}, <br /> Achieve More with <Cover>Every Event</Cover>
//       </h1>
//       <div className="flex justify-between items-center mb-8">
//         {/* <h3 className="text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           Hello, {userName}!
//         </h3> */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={signOut}
//           className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-lg transition-all duration-300"
//         >
//           <LogOut size={18} /> Sign Out
//         </motion.button>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="mb-8 flex flex-wrap gap-4 items-end"
//       >
//         <div className="flex-1 min-w-[200px]">
//           <label className="block text-sm font-medium mb-2" htmlFor="start-date">
//             Start Date
//           </label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               id="start-date"
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
//             />
//           </div>
//         </div>
//         <div className="flex-1 min-w-[200px]">
//           <label className="block text-sm font-medium mb-2" htmlFor="end-date">
//             End Date
//           </label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               id="end-date"
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
//             />
//           </div>
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleFilter}
//           className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
//         >
//           <Filter size={18} /> Apply Filter
//         </motion.button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//         className="overflow-x-auto"
//       >
//         <table className="min-w-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg">
//           <thead className="bg-gray-700">
//             <tr>
//               <th className="py-3 px-4 text-left text-gray-300">Event Name</th>
//               <th className="py-3 px-4 text-left text-gray-300">Date</th>
//               <th className="py-3 px-4 text-left text-gray-300">Time</th>
//               <th className="py-3 px-4 text-left text-gray-300">Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEvents.length > 0 ? (
//               filteredEvents.map((event, index) => {
//                 const eventStart = new Date(event.start.dateTime || event.start.date);
//                 const eventEnd = new Date(event.end.dateTime || event.end.date);

//                 return (
//                   <motion.tr
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.3 }}
//                     className="border-b border-gray-600 hover:bg-gray-700 transition-colors duration-300"
//                   >
//                     <td className="py-3 px-4 font-medium text-gray-100">{event.summary}</td>
//                     <td className="py-3 px-4 text-gray-300">{eventStart.toLocaleDateString()}</td>
//                     <td className="py-3 px-4 text-gray-300">{eventStart.toLocaleTimeString()}</td>
//                     <td className="py-3 px-4 text-gray-300">{event.location || "No Location"}</td>
//                   </motion.tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan={4} className="py-3 px-4 text-center text-gray-400">
//                   No events found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default EventsTable;

// import React, { useState, useEffect } from "react";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { motion } from "framer-motion";
// import { Calendar, Clock, LogOut, Filter } from "lucide-react";
// import { Cover } from "./ui/Cover";

// const EventsTable = ({ session }) => {
//   const [events, setEvents] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const supabase = useSupabaseClient();

//   useEffect(() => {
//     const fetchCalendarEvents = async () => {
//       if (session) {
//         const response = await fetch(
//           "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//           {
//             method: "GET",
//             headers: {
//               Authorization: "Bearer " + session.provider_token,
//             },
//           }
//         );

//         const data = await response.json();
//         if (data.items) {
//           const sortedEvents = data.items.sort((a, b) => {
//             const dateA = new Date(a.start.dateTime || a.start.date);
//             const dateB = new Date(b.start.dateTime || b.start.date);
//             return dateB - dateA;
//           });
//           setEvents(sortedEvents);
//           setFilteredEvents(sortedEvents);
//         }
//       }
//     };

//     fetchCalendarEvents();
//   }, [session]);

//   const handleFilter = () => {
//     if (startDate && endDate) {
//       const filtered = events.filter((event) => {
//         const eventStartDate = new Date(event.start.dateTime || event.start.date);
//         const eventEndDate = new Date(event.end.dateTime || event.end.date);
//         return (
//           eventStartDate >= new Date(startDate) &&
//           eventEndDate <= new Date(endDate)
//         );
//       });
//       setFilteredEvents(filtered);
//     } else {
//       setFilteredEvents(events);
//     }
//   };

//   const signOut = async () => {
//     await supabase.auth.signOut();
//   };

//   // Extract the user's name from the session
//   const userName = session?.user?.user_metadata?.name || "User";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="text-white p-8 rounded-lg shadow-lg bg-black"
//     >
//       <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-500 to-neutral-700 dark:from-neutral-100 dark:via-white dark:to-white">
//         Hey {userName}, <br /> Achieve More with <Cover>Every Event</Cover>
//       </h1>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="flex justify-between items-center mb-8"
//       >
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={signOut}
//           className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-lg transition-all duration-300"
//         >
//           <LogOut size={18} /> Sign Out
//         </motion.button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//         className="mb-8 flex flex-wrap gap-4 items-end"
//       >
//         <div className="flex-1 min-w-[200px]">
//           <label className="block text-sm font-medium mb-2" htmlFor="start-date">
//             Start Date
//           </label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               id="start-date"
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
//             />
//           </div>
//         </div>
//         <div className="flex-1 min-w-[200px]">
//           <label className="block text-sm font-medium mb-2" htmlFor="end-date">
//             End Date
//           </label>
//           <div className="relative">
//             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
//             <input
//               id="end-date"
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
//             />
//           </div>
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleFilter}
//           className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
//         >
//           <Filter size={18} /> Apply Filter
//         </motion.button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//         className="overflow-x-auto"
//       >
//         <table className="min-w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
//           <thead className="bg-gray-700">
//             <tr>
//               <th className="py-3 px-4 text-left text-gray-300">Event Name</th>
//               <th className="py-3 px-4 text-left text-gray-300">Date</th>
//               <th className="py-3 px-4 text-left text-gray-300">Time</th>
//               <th className="py-3 px-4 text-left text-gray-300">Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredEvents.length > 0 ? (
//               filteredEvents.map((event, index) => {
//                 const eventStart = new Date(event.start.dateTime || event.start.date);
//                 const eventEnd = new Date(event.end.dateTime || event.end.date);

//                 return (
//                   <motion.tr
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.3 }}
//                     className="border-b border-gray-600 hover:bg-gray-700 transition-colors duration-300"
//                   >
//                     <td className="py-3 px-4 font-medium text-gray-100">{event.summary}</td>
//                     <td className="py-3 px-4 text-gray-300">{eventStart.toLocaleDateString()}</td>
//                     <td className="py-3 px-4 text-gray-300">{eventStart.toLocaleTimeString()}</td>
//                     <td className="py-3 px-4 text-gray-300">{event.location || "No Location"}</td>
//                   </motion.tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan={4} className="py-3 px-4 text-center text-gray-400">
//                   No events found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default EventsTable;



import React, { useState, useEffect } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import { Calendar, LogOut, Filter } from "lucide-react";
import { Cover } from "./ui/Cover";
import { Button } from "./ui/MovingBorder";
import Background from "./rotateStar";

const EventsTable = ({ session }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [startDate, setStartDate] = useState("");
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      if (session) {
        const response = await fetch(
          "https://www.googleapis.com/calendar/v3/calendars/primary/events",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + session.provider_token,
            },
          }
        );

        const data = await response.json();
        if (data.items) {
          const sortedEvents = data.items.sort((a, b) => {
            const dateA = new Date(a.start.dateTime || a.start.date);
            const dateB = new Date(b.start.dateTime || b.start.date);
            return dateB - dateA;
          });
          setEvents(sortedEvents);
          setFilteredEvents(sortedEvents);
        }
      }
    };

    fetchCalendarEvents();
  }, [session]);

  const handleFilter = () => {
    if (startDate) {
      const filtered = events.filter((event) => {
        const eventStartDate = new Date(
          event.start.dateTime || event.start.date
        );
        return eventStartDate >= new Date(startDate);
      });
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  };

  const handleReset = () => {
    setStartDate("");
    setFilteredEvents(events);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const userName = session?.user?.user_metadata?.name || "User";

  return (
    <div>
      <Background />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white p-8 rounded-lg shadow-lg bg-black"
    >
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-500 to-neutral-700 dark:from-neutral-100 dark:via-white dark:to-white">
        Hey {userName}, <br /> Achieve More with <Cover>Every Event</Cover>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white p-8 rounded-lg shadow-lg bg-black relative items-end" 
      >
        {/* Sign Out Button */}
        <motion.div className="absolute top-[-200px] right-1">
          <Button
            borderRadius="1.75rem"
            duration={3000}
            className="text-white text-sm flex items-center space-x-1"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={signOut}
              className="flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-300"
            >
              <LogOut size={18} /> Sign Out
            </motion.button>
          </Button>
        </motion.div>

        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center pt-5"
        >
          {/* Start Date Input */}
          <div className="flex items-center gap-4">
            <div className="max-w-[200px]">
              <label
                className="block text-sm font-medium "
                htmlFor="start-date"
              >
                Start Date
              </label>
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white"
                />
              </div>
            </div>

            {/* Buttons */}
            <Button
              borderRadius="1.75rem"
              duration={3500}
              className="text-white text-sm flex items-center space-x-1"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleFilter}
                className="flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Filter size={18} /> Apply Filter
              </motion.button>
            </Button>
            <Button
              borderRadius="1.75rem"
              duration={3700}
              className="text-white text-sm flex items-center space-x-1"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleReset}
                className="flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Reset
              </motion.button>
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="overflow-x-auto flex justify-center"
      >
        <div className="lg:w-1/2 sm:w-full">
          <table className="w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-gray-300">
                  Event Name
                </th>
                <th className="py-3 px-4 text-left text-gray-300">Date</th>
                <th className="py-3 px-4 text-left text-gray-300">Time</th>
                <th className="py-3 px-4 text-left text-gray-300">Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => {
                  const eventStart = new Date(
                    event.start.dateTime || event.start.date
                  );

                  return (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="border-b border-gray-600 hover:bg-gray-700 transition-colors duration-300"
                    >
                      <td className="py-3 px-4 font-medium text-gray-100">
                        {event.summary}
                      </td>
                      <td className="py-3 px-4 text-gray-300">
                        {eventStart.toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-gray-300">
                        {eventStart.toLocaleTimeString()}
                      </td>
                      <td className="py-3 px-4 text-gray-300">
                        {event.location || "No Location"}
                      </td>
                    </motion.tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="py-3 px-4 text-center text-gray-400"
                  >
                    No events found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default EventsTable;
