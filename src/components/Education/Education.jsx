import React from "react";
import aboutimg from "../Images/education.jpg";
import education1 from "../Images/education1.jpeg";
import education2 from "../Images/education2.jpeg";

const Education = () => {
  return (
    <div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h5 className="mt-2 text-3xl font-bold tracking-tight text-[#800042] sm:text-4xl">
                  EDUCATION
                </h5>
                <p className="mt-2 text-[13px] font-bold tracking-tight text-gray-900 sm:text-2xl">
                  NathanielCares Foundation Research with Professors.
                </p>
                <p className="mt-6 text-lg leading-7 text-justify">
                  NathanielCares Foundation is not just interested in offering
                  helping hand to orphan children - nurturing them as a parent
                  would do, making healthcare accessible to them, and giving
                  emotional support, but how impactful providing these help
                  would have on the early childhood experiences and neurological
                  development as we compare orphan children enjoying these
                  benefits to those devoid of these help in neighboring
                  countries. <br />
                  <br />
                  In our comparative research with the dean of Kwame Nkrumah
                  University of Science and Technology (KNUST) and other
                  professors, we've found that a child's earliest experience
                  strongly influences their later cognitive development. In
                  particular, children that grow up in a nurturing environment
                  tend to have optimal brain development while children that
                  grow up in surroundings characterized by chaos and
                  uncertainties fail to reach their full cognitive potential.
                  This is because, in a situation where youngsters -
                  particularly orphans and rejected children, let alone to fend
                  for themselves undertake various irresponsible acts: engaging
                  in robbery, prostitution, gambling, pickpocketing, and other
                  social misfit behaviors grow up to become a threat to our
                  society. NathanielCares Foundation believes that providing
                  these kinds of children with basic needs prior to assisting
                  orphanage home overseers in Ghana nurture them to become
                  physically, mentally, and socially sound citizens effaces this
                  problem.
                </p>
              </div>
            </div>
            <a href={aboutimg} data-lightbox="gallery-name">
              <img
                src={aboutimg}
                alt="Nathanielcares Foundation"
                className=" rounded-lg shadow-xl ring-1 ring-gray-400/10 w-full h-auto sm:w-[200px] md:-ml-4 lg:-ml-0 sm:h-[50px] lg:w-[600px]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 sm-6">
          <a href={education1} data-lightbox="gallery-name">
            <img
              src={education1}
              alt="Nathanielcares Foundation"
              className=" rounded-lg shadow-xl ring-1 ring-gray-400/10 w-full h-auto sm:w-[200px] md:-ml-4 lg:-ml-0 sm:h-[50px] lg:w-[600px] "
            />
          </a>
        </div>
        <div className="col-md-6 sm-6">
          <a href={education2} data-lightbox="gallery-name">
            <img
              src={education2}
              alt="Nathanielcares Foundation"
              className=" rounded-lg shadow-xl ring-1 ring-gray-400/10 w-full h-auto sm:w-[200px] md:-ml-4 lg:-ml-0 sm:h-[50px] lg:w-[600px]"
            />
          </a>
        </div>
        <div className="p-5">
                <p className="mt-6 text-lg leading-7 text-justify">From the world perspective, NathanielCares Foundation hopes to work with UNICEF concerning the effects of the Israel-Gaza War on little children and orphans cognitive development. As children raised in an environment of uncertainties and chaos fail to reach their full cognitive potential. NathanielCares foundation hopes to provide a helping hand in the near future. The situation where Hazem Saeed Al-Maizi, the director of orphanage in Gaza City, was forced to throw food away in order to flee to Rafah with the 40 people under his care – most of whom are children and infants living with disabilities – inspired our mission. He recalled being too fatigued to hold the bag, crammed with baby milk, biscuits, dates, diapers, water and clothing, at the same time as carrying one of the orphans, 8-year-old Ayas, The situation where Palestinians displaced inside Gaza as Israel pushes on with its ground offensive describe cramped living conditions, shy-high prices for food, children going hungry and poor sanitation, amid severe limits on food and supplies entering the costal strip concerns Nathanielcares Foundation as well. What Nathanielcares Foundation anticipates doing is to find buttresses to our foundation and always replace the basic needs – food, shelter, and quality health care to victims of this and other world problems, especially kids</p>

        </div>
      </div>
    </div>
  );
};

export default Education;
