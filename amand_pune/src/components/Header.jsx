const Header = ({ headerName, pageDesc }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[70rem]">
      <div className="uppercase max-w-[10rem] text-[20px] md:text-[24px] font-semibold font-mont">
        {headerName}
      </div>
      <div className="text-[12px] md:text-[16px] font-charter">{pageDesc}</div>
    </div>
  );
};

export default Header;
