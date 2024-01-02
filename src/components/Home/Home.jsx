import React from "react";
import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import about1 from "../Images/about1.jpeg"
import about2 from "../Images/about2.jpeg"
import about3 from "../Images/about3.jpeg"
import about4 from "../Images/about4.jpeg"
import about5 from "../Images/about5.jpeg"
import about7 from "../Images/about7.jpeg"
import Homesliding from "./Homesliding";
import aboutimg from "../Images/aboutimg.jpeg"
import aboutimg2 from "../Images/aboutimg2.jpeg"

const images = [
  {src: about1},
  {src: about2},
  {src: about3},
  {src: about4},
  {src: about5},
  {src: about7},
]

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div className="mt-[70px]">
      <Carousel responsive={responsive} autoPlay={true} infinite={true}>
      {
        images.map(({src}) => {
          return(
              <div className="grid gap-4" style={{ backgroundColor: "#eedddd" }}>
              <a href={src} data-lightbox="gallery-name" >
              <img className="p-2 w-[100%] h-[400px]" src={src} alt="Nathanielcares Foundation" />
              </a>
            </div>
          )
        })
      }
     </Carousel>
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#800042] sm:text-4xl">ABOUT US</p>
              <p className="mt-6 text-lg leading-7 text-justify">
              NathanielCares Foundation is a non-profit charitable organization
          founded by Nathaniel Afriyie, a graduate student of Opoku Ware School.
          Our mission is to offer a helping hand to various orphanage homes in
          Ghana to provide education and healthcare to orphans and neglected
          children. We primarily focus on providing cash, books, stationery,
          donations, and providing healthcare delivery among orphans. Our team
          is committed to providing free service for the orphanage homes, while
          also empowering our beneficiaries to become physically, socially, and
          mentally fit in their everyday life. We believe in fostering long-term
          support and enabling individuals to lead independent lives. We're also
          interested in how impactful providing these help would have on the
          early childhood experiences and neurological development as we compare
          children enjoying these benefits to those devoid of these in
          neighboring countries. 
              </p>
              
            </div>
          </div>
          <img
          src={aboutimg}
          alt="Nathanielcares Foundation"
          className=" rounded-lg shadow-xl ring-1 ring-gray-400/10 w-full h-auto sm:w-[200px] md:-ml-4 lg:-ml-0 sm:h-[50px] lg:w-[600px]"
        />
        </div>
      </div>
    </div>

    
    <div className="overflow-hidden bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      
      <Homesliding/>
      <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#800042] sm:text-4xl">OUR MISSION</p>
            <p className="mt-6 text-lg leading-7 text-justify">
            Our mission is to provide education, donations, healthcare access, and
            nurture the orphan and less fortunate children. Whether it is making
            quality education accessible to them by donating books and stationery,
            promoting and improving their health, or bringing them up in a
            nurturing environment prior to making them achieve optimal brain
            development, our initiatives are driven by a passion - indeed a
            fervor, to make a great impact on the neurological and cognitive
            development of young children.{" "}
            </p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#800042] sm:text-4xl">OUR GOAL</p>
            <p className="mt-6 text-lg leading-7 text-justify">
            Our goal is to provide orphan and less fortunate children an access to
            education and a nurturing environment for them to realize their
            optimal brain development, while shaping their later cognitive
            development prior to becoming good citizens.
            </p>
            
          </div>
        </div>
       
      </div>
    </div>
  </div>

  <div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#800042] sm:text-4xl">EVENTS</p>
          <p className="mt-6 text-lg leading-7 text-justify">
          1. NathanielCares Foundation plans on making donations together with the Kessben Outreach Foundation and SitaCares to at least 30 orphanage homes by December 2024, and celebrate the Christmas with them to make these kids feel that they're part and parcel of the Xmas. 
          <br /><br />

          2. NathanielCares Foundation plans on extending this help to all African countries in an attempt to give orphan and rejected children these outreach treatments prior to nurturing them to achieve optimal brain development and become responsible citizens to their respective countries. As we shared in the view of Friedrich Froebel, the father of Early Childhood Education (ECD), we anticipate working hand in hand with the UNICEF, Feed Africa Foundation, and Save the Children our crusade to pioneer the study of children's intellectual development, meet their basic needs and to expand their opportunities to reach their full potential, and improve access to healthcare and education to children in the continent of Africa in 2030.
          
          </p>
          
        </div>
      </div>
      <img
      src={aboutimg2}
      alt="Nathanielcares Foundation"
      className=" rounded-lg shadow-xl ring-1 ring-gray-400/10 w-full h-auto sm:w-[200px] md:-ml-4 lg:-ml-0 sm:h-[50px] lg:w-[600px]"
    />
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
