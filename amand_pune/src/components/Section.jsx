const Section = ({ image, header, text }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center p-[3.5rem]">
      <div>
        <img
          src={image}
          className="w-[15rem] md:w-[30rem]"
          alt="say no to violence"
        ></img>
      </div>
      <div className="p-[1.5rem] text-left">
        <div className="text-[18px] font-bold uppercase lg:text-[24px]">
          {header}
        </div>
        <p className="text-[14px] text-left lg:text-[20px]">{text}</p>
      </div>
    </section>
  );
};

export default Section;
