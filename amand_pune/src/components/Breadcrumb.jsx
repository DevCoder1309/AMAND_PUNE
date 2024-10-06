import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation(); // Get current location
  const pathnames = location.pathname.split("/").filter((x) => x); // Split path into an array

  return (
    <nav className="text-[12px] md:text-[14px] font-mont bg-primary p-2 my-4 w-full max-w-[70rem]">
      <ul className="flex gap-2 text-darkGreen">
        <li>
          <Link to="/" className="font-semibold">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
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
