import { Link } from "react-router-dom";

const EventCard = ({
  eventImage,
  eventHeader,
  eventDesc,
  eventLongDesc,
  eventGalleryLink,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-2">
      <img className="w-[27rem] md:h-[266px]" src={eventImage}></img>
      <div className="flex-1">
        <h1 className="text-center text-2xl font-semibold">{eventHeader}</h1>
        <p className="text-[14px] text-left md:w-[25rem] md:h-[70px]">
          {eventDesc}
        </p>
        <div className="cursor-pointer text-primary font-bold">
          <Link
            to={"/eventPage"}
            state={{
              eventImage,
              eventHeader,
              eventDesc,
              eventLongDesc,
              eventGalleryLink,
            }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
