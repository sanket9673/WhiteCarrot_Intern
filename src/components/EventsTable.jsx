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
      // Filter events only by the start date, ignoring the end date
      const filtered = events.filter((event) => {
        const eventStartDate = new Date(event.start.dateTime || event.start.date);
        const eventStartDateStr = eventStartDate.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'
        return eventStartDateStr === startDate;
      });
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events); // Reset to all events if no start date is entered
    }
  };

  const handleReset = () => {
    setStartDate("");
    setFilteredEvents(events); // Reset the filtered events list to show all
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
        className="text-white p-8 rounded-lg shadow-lg bg-black mt-10"
      >
        {/* Sign Out Button and Title Container */}
        <div className="relative flex flex-col sm:flex-col lg:flex-row items-center justify-center space-y-6 sm:space-y-6 lg:space-y-0">
          {/* Sign Out Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:relative lg:absolute top-4 right-4"
          >
            <Button
              borderRadius="1.75rem"
              duration={3000}
              className="text-white text-sm flex items-center space-x-1"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={signOut}
                className="flex items-center gap-2 text-white lg:px-4 lg:py-2 rounded-lg transition-all duration-300"
              >
                <LogOut size={18} /> Sign Out
              </motion.button>
            </Button>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-12 relative z-20 lg:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-500 to-neutral-700 dark:from-neutral-100 dark:via-white dark:to-white"
          >
            Hey {userName}, <br /> Achieve More with <Cover>Every Event</Cover>
          </motion.h1>
        </div>

        {/* Content and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white p-8 rounded-lg shadow-lg bg-black relative items-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center pt-5"
          >
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <div className="max-w-full sm:max-w-[200px]">
                <label
                  className="block text-sm font-medium"
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

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="overflow-x-auto flex justify-center"
        >
          <div className="w-full sm:w-full lg:w-1/2">
            <table className="w-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-300">
                    Event Name
                  </th>
                  <th className="py-3 px-4 text-left text-gray-300">Date</th>
                  <th className="py-3 px-4 text-left text-gray-300">Time</th>
                  <th className="py-3 px-4 text-left text-gray-300">
                    Location
                  </th>
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
                        <td className="lg:py-3 lg:px-4 py-2 px-2 font-medium text-gray-100">
                          {event.summary}
                        </td>
                        <td className="py-2 px-2 text-gray-300">
                          {eventStart.toLocaleDateString()}
                        </td>
                        <td className="py-2 px-2 text-gray-300">
                          {eventStart.toLocaleTimeString()}
                        </td>
                        <td className="py-2 px-2 text-gray-300">
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
                      No events found for the selected date
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
