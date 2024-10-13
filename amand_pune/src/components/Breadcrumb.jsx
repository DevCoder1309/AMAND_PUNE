import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation(); // Get current location
  const pathnames = location.pathname.split("/").filter((x) => x); // Split path into an array
  const state = location.state || {}; // Get state if it exists, e.g., event details

  return (
    <nav className="text-[10px] md:text-[14px] font-mont my-1 w-full max-w-[70rem]">
      <ul className="flex gap-2 text-darkGreen">
        <li>
          <Link to="/" className="font-semibold">
            Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // Special handling for the event page
          if (to === "/EventPage" && state.eventName) {
            return (
              <li key={index}>
                <span className="mx-2">/</span>
                <Link to="/Events" className="font-semibold">
                  Events
                </Link>
                <span className="mx-2">/</span>
                <span className="font-bold">{state.eventName}</span>
              </li>
            );
          }

          return (
            <li key={index}>
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-bold">{value}</span>
              ) : (
                <Link to={to} className="underline">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
