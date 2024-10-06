const ContactInfo = ({ contactName, contactDesignation, contactPhone }) => {
  return (
    <div>
      <div className="font-semibold text-[14px] md:text-[18px]">
        {contactName}
      </div>
      <div className="text-[12px] md:text-[16px]">{contactDesignation}</div>
      <div className="text-[12px] md:text-[16px]">+91 {contactPhone}</div>
    </div>
  );
};

export default ContactInfo;
