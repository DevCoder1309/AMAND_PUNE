import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
const PublicationPage = () => {
  const location = useLocation();
  const { image, header, link } = location.state || {};

  console.log(link);

  return (
    <div className="bg-bgColor flex flex-col gap-[3rem] items-center justify-center py-2 px-4 md:px[11.5rem] min-h-screen">
      <Breadcrumb />

      <img src={image} className="w-[20rem]" />

      <div className="text-2xl font-semibold text-center font-mont">
        {header}
      </div>
      <div className="w-full font-mont text-center uppercase md:w-[60rem] mb-5 text-[18px] font-semibold">
        <a
          href={link}
          download={`Publication.pdf`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Click To Download
        </a>
      </div>
    </div>
  );
};

export default PublicationPage;
