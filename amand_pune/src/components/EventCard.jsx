import { Link } from "react-router-dom";

const EventCard = ({
  eventImage,
  eventName,
  eventDesc,
  eventLongDesc,
  eventGalleryLink,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-2">
      <img className="w-[27rem] md:h-[266px]" src={eventImage}></img>
      <div className="flex-1">
        <h1 className="text-center text-[20px] md:text-[22px] mb-1 font-semibold font-mont">
          {eventName}
        </h1>
        <p className="text-[12px] md:text-[14px] text-left md:w-[25rem] md:h-[70px] font-charter">
          {eventDesc}
        </p>
        <div className="cursor-pointer uppercase mt-3 text-darkGreen font-bold">
          <Link
            to={"/eventPage"}
            state={{
              eventImage,
              eventName,
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
