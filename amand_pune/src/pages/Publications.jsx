import Header from "../components/Header";
import publications from "../publicationData";
import PublicCard from "../components/PublicCard";
import Breadcrumb from "../components/Breadcrumb";

const Publications = () => {
  const pubList = publications.map((publication) => {
    return (
      <PublicCard
        key={publication.key}
        image={publication.pubImage}
        header={publication.pubName}
        pubDesc={publication.pubDesc}
        link={publication.link}
      />
    );
  });
  return (
    <div className="bg-bgColor min-h-screen  flex flex-col md:gap-[2rem] justify-center items-center py-[2rem] px-[4rem]">
      <Breadcrumb />
      <Header
        headerName="Publications"
        pageDesc="The newsletters provide regular updates on events, initiatives, and developments within the academy, while the memoirs offer deeper reflections on significant experiences and contributions from members of the institution."
      />
      <div className="flex flex-col gap-[1rem] md:flex-row">{pubList}</div>
    </div>
  );
};

export default Publications;
