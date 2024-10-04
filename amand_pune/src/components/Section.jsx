const Section = ({ image, header, text, type }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center text-center md:flex-row ${
        type === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div>
        <img src={image} className="w-[15rem] md:w-[25rem]" alt={header} />
      </div>
      <div className="p-[1.5rem] text-left md:w-1/2">
        <div className="text-[14px] font-bold uppercase md:text-[24px] font-mont">
          {header}
        </div>
        <p className="text-[12px] text-left md:text-[16px] max-w-prose font-charter">
          {text}
        </p>
      </div>
    </section>
  );
};

export default Section;
