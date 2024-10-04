const Header = ({ headerName, pageDesc }) => {
  return (
    <div className="flex flex-col gap-2 max-w-[70rem]">
      <div className="uppercase md:text-[24px] font-semibold font-mont">
        {headerName}
      </div>
      <div className="text-[12px] md:text-[16px] font-charter">{pageDesc}</div>
    </div>
  );
};

export default Header;
