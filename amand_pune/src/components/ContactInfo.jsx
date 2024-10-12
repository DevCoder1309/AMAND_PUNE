const ContactInfo = ({ contactName, contactDesignation, contactPhone }) => {
  return (
    <div>
      <div className="font-semibold text-[12px] md:text-[14px]">
        {contactName}
      </div>
      <div className="text-[12px] md:text-[16px]">{contactDesignation}</div>
      <div className="text-[12px] md:text-[16px] text-blue-500">
        +91 {contactPhone}
      </div>
    </div>
  );
};

export default ContactInfo;
