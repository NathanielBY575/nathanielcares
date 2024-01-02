import React from 'react'

import nathaniel from "../Images/nathaniel.jpg"
import advisor from "../Images/advisor.jpg"
import clement from "../Images/clement.jpg"
import cofounder from "../Images/cofounder.jpg"
import vice from "../Images/vice.jpg"
import volunteers from "../Images/volunteers.jpg"
import founder from "../Images/founder.jpg"

const teamData = [
  {
    name: "NATHANIEL AFRIYIE",
    position:"FOUNDER AND PRESIDENT",
    details: `Nathaniel, the founder, has always been actively involved in social activities in Ghana and had a dream to work with his childhood friends and qualified individuals in the social welfare sector. He is the eldest son of the late Mr. Daniel Afriyie, a trader, and the late Mrs. Akua Achiaa Afriyie, also a trader. He has his own Center based in Abuakwa-Housing and provides yearly program outlines. He is actively participating and helping in organizing all the programs of  NathanielCares Foundation. Nathaniel strongly believes in the philosophy that helping orphans leads to lifelong happiness and is dedicated to making a meaningful and constructive contribution to society in which they live. `,
    imageUrl: nathaniel
 },
  {
    name: "SITA AMA AMPONG",
    position:"VICE PRESIDENT",
    details: `Sita Ama Ampong, our deputy president, is a graduate of St. Louis Senior High School, a second year medical student at Kwame Nkrumah University of Science and Technology (KNUST). She is the heart of the  NathanielCares Foundation as she devotes her maximum time to organizing the various programs of the group. In each and every group activity, she gives personal attention. Under her guidance, food is prepared and all other activities are performed in every program the foundation undertakes. Also, various health issues awareness and edification of orphans with medical experts occurs under her guidance. `,
    imageUrl: vice
 },
  {
    name: "Mr. MARTIN KWAKU OSEI BROBBEY",
    position:"CO-FOUNDER",
    details: `Mr. Martin Kwaku Osei Brobbey, one of our  co-founders, is a graduate student of Opoku Ware Senior High School, a businessman at East Legon in Accra, and the MD of Lexta Ghana Limited - YAZZ, HOOCH, and ROXX Products. Mr. Martin is known for his hardworking and industrious nature, having worked with various organizations in Ghana for the past twenty years before joining NathanielCares Foundation. He is one of the significant contributors to this foundation as he provides numerous sanitary pads for girl orphans through this foundation. `,
    imageUrl: founder
 },
  {
    name: "Mr. SAMMY ADU BOAKYE",
    position:"CO-FOUNDER",
    details: `Mr. Sammy Adu-Boakye, our co-founder, is a graduate student of Presbyterian Boys Secondary and is currently the Program Director for Kessben Media. He is highly ambitious and hardworking, actively participating in numerous outreach events and organizations in Ghana by spearheading the Kessben Outreach Foundation - a charity foundation for the indigene, accident victims, and orphans. Mr. Sammy is the founder of Yes Study Abroad and also serves as an ambassador for Church Bells - a religious program - in Ghana before joining NathanielCares Foundation. `,
    imageUrl: cofounder
 },
  {
    name: "CLEMENT AGYEI",
    position:"CO-FOUNDER",
    details: `Clement Agyei, our Co-founder, is a graduate from Prempeh College. He's the founder of We Care Foundation. Clement is a compassionate and self-centered person who is best known for his contribution to low-income communities in Ghana. Clement also serves as an ambassador for the Toothtrek in Ghana.`,
    imageUrl: clement
 },
  {
    name: "PASTOR JEFFERED OWUSU BOAMAH",
    position:"ADVISOR",
    details: `Pastor Jeffered Owusu Boamah, our advisor, is a chair counselor and also a lecturer at Ghana Baptist Convention Bible School. Pastor Jeffered is a hardworking, selfless, counselor and a people-person who is very understandable and easy to work with. He is best known for holding a PHD and master's  degree in Theology.`,
    imageUrl: advisor
 },
  {
    name: "",
    position:"VOLUNTEERS",
    details: `Together with the vice president of NathanielCares Foundation, these guys volunteer in various ways to keep the foundation going. Their service isn't just picking up foodstuffs and donating them, but they also donate their quota to support our foundation. `,
    imageUrl: volunteers
 },
];

const Team = () => {
  return (
    <div className="bg-[#f0ebeb] py-24 sm:py-32 ">
    <h1 className=" lg:pl-[150px]  mt-2 mb-[50px] text-3xl font-bold tracking-tight text-decoration-underline sm:text-4xl">
    OUR TEAM
   </h1>
      <div className="mr-[200px]">
      <ul
        className="grid gap-x-12 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
      >
        {teamData.map((person) => (
          <li key={person.name}>
            <div className="flex flex-col lg:ml-2  items-center gap-y-3">
            <div className="w-[300px] h-[220px] mx-auto border-4 border-[#800042] rounded-full">
            <img
              className="object-cover w-full h-full rounded-full"
              src={person.imageUrl}
              alt="Nathanielcares Foundation"
              style={{ objectFit: 'fill', width: '100%', height: '100%' }}
            />
          </div>
              <div className="overflow-hidden">
                <h3 className="text-base font-bold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base font-bold leading-7 tracking-tight text-gray-500">
                  {person.position}
                </p>
                <p className="leading-7 text-justify tracking-tight text-gray-900">
                  {person.details} 
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Team
