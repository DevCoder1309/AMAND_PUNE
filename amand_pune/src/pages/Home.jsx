import Hero from "../assets/Hero.png";
import Section from "../components/Section";
import Mission from "../assets/mission.png";
import About from "../assets/about.png";
import Breadcrumb from "../components/Breadcrumb";

function Home() {
  return (
    <div className="bg-bgColor flex flex-col justify-center items-center">
      <img src={Hero} alt="hero" className="w-full" />
      <div className="flex flex-col px-[4rem] py-[2rem] gap-[2rem] md:gap-[4rem]">
        <Breadcrumb />
        <Section
          image={Mission}
          header="Our Mission"
          text="At Amand Pune, our mission is to drive social change by empowering
          underserved communities through sustainable initiatives in education,
          healthcare, and social development. We strive to create equitable
          opportunities for all, fostering environments where individuals can
          grow, learn, and thrive. Our efforts focus on improving access to
          essential resources, nurturing self-reliance, and ensuring a better
          future for those in need. We are committed to promoting inclusivity
          and long-term impact through collaborative efforts with like-minded
          partners and communities."
          type="left"
        />
        <Section
          image={About}
          header="About Us"
          text="Amand Pune is a non-profit organization dedicated to improving the lives of underprivileged communities through education, healthcare, and social welfare initiatives. By focusing on sustainable development and empowerment, we aim to create lasting positive change. Our team works closely with local partners and volunteers to address pressing social challenges and provide opportunities for growth and self-reliance."
          type="right"
        />
      </div>
    </div>
  );
}

export default Home;
