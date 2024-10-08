const news = [
  {
    id: 1,
    "article-name": "Patriots’ Day observed at Pune",
    date: "Aug 17, 2016",
    year: 2016,
    link: "#",
  },
  {
    id: 2,
    "article-name": "Blood Donation Camp by Manipuri Diaspora at Pune",
    date: "Jul 11, 2016",
    year: 2016,
    link: "#",
  },
  {
    id: 3,
    "article-name": "Condolence Message on massive Earthquake in Manipur",
    date: "Jan 6, 2016",
    year: 2016,
    link: "#",
  },
  {
    id: 4,
    "article-name": "AMAND celebrates Ningol Chakouba",
    date: "Nov 16, 2015",
    year: 2015,
    link: "#",
  },
  {
    id: 5,
    "article-name":
      "Meeyamgi Thougal – ‘Spirit of Social Upliftment’ at SOS Children’s",
    date: "Oct 3, 2015",
    year: 2015,
    link: "#",
  },
  {
    id: 6,
    "article-name": "Heartfelt appreciation to the people of AMAND",
    date: "30 June, 2015",
    year: 2015,
    link: "#",
  },
  {
    id: 7,
    "article-name": "1st International Day of Yoga celebrated by AMAND, Pune",
    date: "21 June, 2015",
    year: 2015,
    link: "#",
  },
  {
    id: 8,
    "article-name":
      "Workshop on Cyber Crime and Its Relevant Law conducted for NE",
    date: "Apr 20, 2015",
    year: 2015,
    link: "#",
  },
  {
    id: 9,
    "article-name":
      "AMAND Pune PR: Ningol Chakouba at Pune 2014, Poknpham News",
    date: "31 October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 10,
    "article-name": "AMAND Pune PR: Ningol Chakouba at Pune 2014",
    date: "29th October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 11,
    "article-name": "AMAND Pune celebrates ‘Ningol Chakkouba’",
    date: "27th October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 12,
    "article-name": "Ningol Chakkouba celebrated across State and beyond",
    date: "27th October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 13,
    "article-name": "Ningol Chakouba 2014, AMAND Huiyen Lanpao",
    date: "27th October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 14,
    "article-name": "Ningol Chakkouba Celebrated at Pune",
    date: "26th October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 15,
    "article-name":
      "Annual General Body Meeting (AGM) and social gathering of AMAND, Pune",
    date: "06th October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 16,
    "article-name": "Pune Manipuri Diaspora receive Asiad players",
    date: "03rd October, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 17,
    "article-name":
      "Association of Manipuri Diaspora (AMAND) Pune honours MC Mary Kom",
    date: "9th September, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 18,
    "article-name": "Pune Manipuris book hall to watch biopic",
    date: "9th September, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 19,
    "article-name":
      "पुण्याच्या मणिपुरी ‘मेरी कोम’ साठी बुक करणार अखंड थिएटर, मुंबई",
    date: "8 सप्टेंबर 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 20,
    "article-name": "‘Mary Kom’ : Movie screened at Pune by AMAND, Pune",
    date: "8th September 2104",
    year: 2014,
    link: "#",
  },
  {
    id: 21,
    "article-name": "AMAND Press Release on Mary Kom Movie at Pune",
    date: "8th September 2104",
    year: 2014,
    link: "#",
  },
  {
    id: 22,
    "article-name":
      "पुण्यातील मणिपुरी बांधवांसाठी आज ‘मेरी कोम’ चित्रपटाचा खेळ",
    date: "7th September 2104",
    year: 2014,
    link: "#",
  },
  {
    id: 23,
    "article-name": "Manipuris in city celebrate Mary Kom’s success",
    date: "7th September 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 24,
    "article-name":
      "NGO organises special screening of biopic on boxing champion",
    date: "6th September 2104",
    year: 2014,
    link: "#",
  },
  {
    id: 25,
    "article-name": "123rd Patriots’ Day, the 13th August, 2014 at Pune",
    date: "18th August 2104",
    year: 2014,
    link: "#",
  },
  {
    id: 26,
    "article-name": "Patriots’ Day observed at Pune",
    date: "15th August 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 27,
    "article-name": "Patriots’ Day observed at Pune",
    date: "14th August 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 28,
    "article-name":
      "North east bound UoP gets linguistic twist from Manipuri Assn.",
    date: "2nd June 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 29,
    "article-name":
      "Manipuri Diaspora in Pune urges for action on racial discrimination",
    date: "20th April 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 30,
    "article-name":
      "Manipuri cultural extravaganza held in Pune to promote national integration",
    date: "15th February, 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 31,
    "article-name":
      "Blue Hills, a Manipuri cultural extravaganza organized at Pune",
    date: "4th February 2014",
    year: 2014,
    link: "#",
  },
  {
    id: 32,
    "article-name": "PR – ASSOCIATION OF MANIPURI DIASPORA (AMAND), PUNE",
    date: "1st May 2012",
    year: 2012,
    link: "#",
  },
];

export default news;
