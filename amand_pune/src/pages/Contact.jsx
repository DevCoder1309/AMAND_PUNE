import Header from "../components/Header";
import ContactInfo from "../components/ContactInfo";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <div className="bg-bgColor min-h-screen flex flex-col md:gap-[2rem] py-[2rem] px-[4rem] items-center">
      <Breadcrumb />
      <Header
        headerName="Contact Us"
        pageDesc="We welcome your inquiries and feedback! Please reach out to us for any questions regarding our organization, membership, or events. Our team is here to assist you and provide the information you need. Feel free to contact our registered office or connect with our key representatives listed below."
      />
      <div className="w-full max-w-[70rem] text-left flex flex-col mt-4">
        <div className="font-semibold font-mont text-[18px] uppercase">
          Registered Office
        </div>
        <div className="font-charter text-[12px] md:text-[14px]">
          Association of Manipuri Diaspora (AMAND), Pune
          <br />
          Sana Sanggai
          <br />
          Survey No.280, Plot No. 13 Shathe Vasti, Dhanori Road,
          <br /> Lohegaon, Pune 411047
        </div>
        <div className="font-charter text-[12px] md:text-[14px]">
          <span className="font-semibold">Website:</span> www.amandpune
        </div>
        <div className="font-charter text-[12px] md:text-[14px]">
          <span className="font-semibold">Email:</span> mail@amandpune.org
        </div>
      </div>

      {/* Contacts Section */}
      <div className="flex flex-col md:flex-row xs:max-md:gap-[2rem] gap-[10rem] w-full max-w-[70rem] mt-4">
        <div className="flex flex-col gap-[1rem]">
          <ContactInfo
            contactName="Mr Kulabidhu Chanam"
            contactDesignation="President"
            contactPhone="9172918116"
          />
          <ContactInfo
            contactName="Mr.Irom Jiten"
            contactDesignation="Vice-President"
            contactPhone="9860326218"
          />
          <ContactInfo
            contactName="Mr.L Rishikanta Meitei"
            contactDesignation="Gen Secretary"
            contactPhone="9922429609"
          />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <ContactInfo
            contactName="Mr Sairem Romen"
            contactDesignation="Joint Secretary"
            contactPhone="8787682898"
          />
          <ContactInfo
            contactName="Dr. A. Bijeshkumar"
            contactDesignation="Joint Secretary – Imphal"
            contactPhone="84159 23505"
          />
          <ContactInfo
            contactName="Mr Suresh Chingtham"
            contactDesignation="IT & Publicity Secretary"
            contactPhone="7720036875"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
