import { useState } from "react";
import Header from "../components/Header";
import eventsData from "../eventData";
import EventCard from "../components/EventCard";
import Breadcrumb from "../components/Breadcrumb";

const Events = () => {
  const [eventType, setEventType] = useState("past"); // default to past events
  const [selectedYear, setSelectedYear] = useState(""); // for filtering by year

  // Get unique years from the events data
  const uniqueYears = [...new Set(eventsData.map((event) => event.year))];

  // Filter events based on the selected type and year
  const filteredEvents = eventsData.filter((event) => {
    const isUpcoming = event.year > new Date().getFullYear();
    const isPast = event.year <= new Date().getFullYear();
    const matchesYear = selectedYear
      ? event.year === parseInt(selectedYear)
      : true;

    return eventType === "upcoming"
      ? isUpcoming && matchesYear
      : isPast && matchesYear;
  });

  const eventList = filteredEvents.map((event) => (
    <EventCard
      key={event.key}
      eventName={event.eventName}
      eventDesc={event.eventDesc}
      eventImage={event.eventImage}
      eventLongDesc={event.eventLongDesc}
      eventGalleryLink={event.eventGalleryLink}
    />
  ));

  return (
    <div className="bg-bgColor min-h-screen flex flex-col md:gap-[5rem] justify-center items-center py-[2rem] px-[4rem]">
      <Breadcrumb />
      <Header
        headerName="Events"
        pageDesc="The Association of Manipuri Diaspora (AMAND) Pune conducts a diverse range of events that foster cultural exchange and enhance community involvement. These events celebrate the rich heritage of the Manipuri diaspora, serving as vital platforms for strengthening bonds within the community."
      />

      {/* Dropdown for Event Type */}
      <div className="flex gap-4 xs:max-md:my-4 my-2">
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="p-2 text-[12px] md:text-[16px] border font-mont bg-primary border-gray-300 rounded"
        >
          <option value="past">Past</option>
          <option value="upcoming">Upcoming</option>
        </select>

        {/* Dropdown for Year Selection */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 text-[12px] md:text-[16px] bg-primary font-mont border border-gray-300 rounded"
        >
          <option value="">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col justify-center items-center gap-[4rem] md:flex-row md:flex-wrap xs:max-md:min-h-[200px] md:min-h-[400px]">
        {eventList.length > 0 ? (
          eventList
        ) : (
          <p className="text-[12px] md:text-[16px] font-mont text-center">
            No events found for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
