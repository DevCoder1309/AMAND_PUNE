const Header = ({ headerName, pageDesc }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="uppercase text-2xl font-semibold">{headerName}</div>
      <div className="text-[12px] md:text-[16px]">{pageDesc}</div>
    </div>
  );
};

export default Header;
