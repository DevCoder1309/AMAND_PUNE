const Header = ({ headerName, pageDesc }) => {
  return (
    <div className="flex flex-col gap-2 w-[18rem] md:w-[50rem]">
      <div className="uppercase text-2xl font-semibold">{headerName}</div>
      <div className="text-[12px] md:text-[16px] md:w-fill">{pageDesc}</div>
    </div>
  );
};

export default Header;
