import Header from "../components/Header";
import EventsCard from "../components/EventCard";
import Patriot from "../assets/patriots.png";
import Patriot17 from "../assets/patriots-2017.png";
import Ladies from "../assets/ladies.png";
import Nongin from "../assets/nongin.png";
const Events = () => {
  return (
    <div className="bg-bgColor min-h-screen flex flex-col justify-center items-center py-[5rem] px-[3rem] md:px-[5rem] gap-[5rem]">
      <Header
        headerName="Events"
        pageDesc="The Association of Manipuri Diaspora (AMAND) Pune conducts a diverse range of events that foster cultural exchange and enhance community involvement. These events celebrate the rich heritage of the Manipuri diaspora, serving as vital platforms for strengthening bonds within the community.

By organizing activities such as traditional festivals, workshops, and cultural performances, AMAND Pune provides opportunities for members to engage socially, culturally, and educationally. These gatherings not only allow participants to reconnect with their roots but also encourage the sharing of knowledge and traditions across generations.

Through these initiatives, AMAND Pune promotes unity and a sense of belonging, ensuring that the vibrant cultural tapestry of Manipur is preserved and cherished in Pune. In doing so, the organization helps create a supportive environment where the community can thrive and flourish together."
      />
      <div className="flex flex-col justify-center items-center gap-[4rem] md:flex-row md:flex-wrap">
        <EventsCard
          eventImage={Patriot}
          eventHeader="131st Patriot's Day,2022"
          eventDesc="The 131st Patriots’ Day 2022 was observed on Saturday, 13th August in Pune at the Auditorium of Symbiosis International University, Viman Nagar. The Patriots’ Day."
          eventLongDesc="The 131st Patriots' Day, commemorating the heroes of the Anglo-Manipur War of 1891, was observed on 13th August 2022 in Pune. Organized by the Association of Manipuri Diaspora (AMAND) in collaboration with Symbiosis Ishanya Cultural and Educational Centre, the event brought together over 300 participants to honor the martyrs who fought for Manipur’s sovereignty. The program included floral tributes, patriotic performances, and the premiere of the play `Mareibak Ningba Koirengsana` by the Manipuri Theatre Academy. Director Sarungbam Beeren Singh and the play’s cast were felicitated for their contributions.
AMAND President, Er. Giridhar Singh Naorem, welcomed the attendees with a solemn address, paying homage to the Manipuri soldiers who sacrificed their lives in defense of their homeland. The event opened with a patriotic song by Milan Sorokhaibam and his team, setting a respectful tone. The main highlight of the evening was the premiere of the play `Mareibak Ningba Koirengsana,` specially designed for this observation, performed by 27 artists from the Manipuri Theatre Academy (MATA). The play depicted key moments from the Anglo-Manipur War, celebrating the courage and determination of the Manipuri freedom fighters.
During the event, the director of the play, Sarungbam Beeren Singh, was honored with a traditional Manipuri Lengyan (scarf), a memento, and a coconut, presented by AMAND President, Er. Giridhar Singh Naorem. Other senior members of AMAND also felicitated the cast, while Shri Beeren Singh expressed his gratitude to the organization for the opportunity to present this play.
The evening concluded with a vote of thanks by AMAND Vice President, Shri Kulabidhu Chanam, who acknowledged the generous support of donors, the dedication of the Manipuri Theatre Academy, and the enthusiasm of all attendees, making the event a resounding success."
        />
        <EventsCard
          eventImage={Nongin}
          eventHeader="Nongin Gi Tantha -AGM 2017"
          eventDesc="AMAND organising AGM cum Annual Cultural Evening on 1st October, 2017 (5pm – 10pm). Venue: Symbiosis International University (SIU) Auditorium, Viman Nagar Campus, Pune."
          eventLongDesc="AMAND organized the AGM cum Annual Cultural Evening on 1st October 2017 at Symbiosis International University, Pune. The event, held under the aegis of the Government of Manipur, celebrated Manipuri culture and honored notable guests and dignitaries.
          AMAND organising AGM cum Annual Cultural Evening on 1st October, 2017 (5pm – 10pm).
Venue: Symbiosis International University (SIU) Auditorium, Viman Nagar Campus, Pune.

Organised by
AMAND, Pune in association with SICEC, Symbiosis Society, Pune Under the aegis of Govt. Of Manipur, India.

Theme
“Let them know us as we know them”

Chief Guest
Padma Bhushan Dr. S. B. Mujumdar, Founder & Chancellor Symbiosis International University, Pune

Guest of Honor
Dr. R. G. Pardeshi
Principal, Fergusson College, Pune

Shri P. R. Ashturkar
Secy, District Legal Services Authority, Pune

Programme details
5:00 pm Occupying the dias by Dignitaries 
5:05 pm Lighting of Lamp
5:10 pm Felicitation of the Dignitaries
5:15 pm Welcome Address
5:20 pm Speech by Shri P. R. Ashturkar
5:30 pm Speech by Dr. G. R. Pardeshi
5:40 pm Speech by Padma Bhushan Dr. S. B. Mujumdar 
5.50 pm Felicitation of L. Devendro Singh, Arjun Awardee 2017
5:55 pm Felicitation of Ganapati Visarjan dancers team
6:00 pm Felicitation of freshers
6:15 pm Presidential Speech
6:20 pm Vote of Thanks
6:25 pm Cultural Program
"
        />
        <EventsCard
          eventImage={Patriot17}
          eventHeader="126th Patriots' Day, 2017"
          eventDesc="AMAND Celebrated 126 Patriots' Day, 13 August 2017."
          eventLongDesc={`AMAND celebrated the 126th Patriots' Day on 13th August 2017 at Symbiosis International University, Pune. The event commemorated the brave Manipuri freedom fighters. Distinguished guests delivered inspiring speeches, and there were cultural performances honoring the heroes.`}
          eventGalleryLink="https://photos.google.com/share/AF1QipP9OnT1rW2XasUvuUtrfD3O6e517yrS-mD1y6NHCVrUDDf2cf9Y2UnPqsjDoqVltA?key=d2hrRk1hTXlsU3FzSG1qbjRWMzZvYzFBYi1LNkRn"
        />

        <EventsCard
          eventImage={Ladies}
          eventHeader="Ladies Club Sajibu Cheiraoba 2017"
          eventDesc="The AMAND Ladies’ Club which is a ladies wing of the Association of Manipuri Diaspora (AMAND) Pune, organized the unique aged old traditional Sajibu Cheiraoba."
          eventLongDesc="The AMAND Ladies’ Club, a prominent wing of the Association of Manipuri Diaspora (AMAND) in Pune, proudly hosted the Sajibu Cheiraoba 2017 on Sunday, April 16, 2017. This traditional festival, rooted in the rich cultural heritage of Manipur, took place at the Vidyanchal Sports Academy in Aundh, near Seasons Hotel, from 6:00 PM to 10:30 PM.

The event aimed to promote and protect the vibrant socio-cultural heritage of Manipur, serving as a significant platform for the Manipuri diaspora in Pune to reconnect with their roots. Through a series of engaging activities and performances, the program fostered a spirit of unity and coexistence among participants, allowing them to celebrate their shared identity and traditions far from home.

The Sajibu Cheiraoba festival is not just a celebration; it embodies the essence of togetherness, cultural pride, and the commitment to preserving the unique heritage of Manipur. Join us in cherishing and promoting the rich traditions that bind our community!"
        />
      </div>
    </div>
  );
};

export default Events;
