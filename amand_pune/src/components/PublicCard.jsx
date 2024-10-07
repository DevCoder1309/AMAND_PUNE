import { Link } from "react-router-dom";

const PublicCard = ({ image, header, pubDesc, link }) => {
  return (
    <div className="flex flex-col max-w-[70rem] justify-center items-center p-4 mb-10">
      <Link
        to={"/PublicationPage"}
        state={{
          image,
          header,
          pubDesc,
          link,
        }}
      >
        <img className="w-[27rem] h-[200px] md:h-[600px]" src={image}></img>
        <div className="">
          <h1 className="text-center text-[20px] md:text-[22px] mb-1 font-semibold font-mont">
            {header}
          </h1>
          <p className="text-[12px] md:text-[14px] text-left md:w-[25rem] md:h-[70px] font-charter">
            {pubDesc}
          </p>
          <div className="cursor-pointer uppercase pt-3 text-darkGreen font-bold"></div>
        </div>
      </Link>
    </div>
  );
};

export default PublicCard;
