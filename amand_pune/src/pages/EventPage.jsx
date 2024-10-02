import { useLocation } from "react-router-dom";

const EventPage = () => {
  const location = useLocation();
  const {
    eventHeader,
    eventDesc,
    eventImage,
    eventLongDesc,
    eventGalleryLink,
  } = location.state || {};

  return (
    <div className="bg-bgColor flex flex-col gap-[2.6rem] items-center justify-center py-7 min-h-screen">
      <img src={eventImage} className="w-[50rem]" />
      <div className="text-2xl font-semibold text-center">{eventHeader}</div>
      <div className="w-full md:w-[60rem] px-[3rem]">
        {eventDesc}
        {eventLongDesc}
        <p className="text-primary font-semibold">
          {eventGalleryLink ? (
            <a href={eventGalleryLink} target="_blank" rel="noreferrer">
              View Gallery
            </a>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default EventPage;
