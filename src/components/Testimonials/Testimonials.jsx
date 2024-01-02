import React from 'react'
import baffour from "../Images/baffour.jpeg"
import eric from "../Images/eric.jpeg"
import matthew from "../Images/matthew.jpeg"
import student from "../Images/student.jpeg"
import kwabena from "../Images/kwabena.jpeg"

const teamData = [
  {
    name: "Mr. Matthew Ofori ",
    uppertext:"1)	NathanielCares Foundation Donations: Textbooks, Board Cleaners, and Other Stationery",
    position:"(Headmaster of Mamponteng Sakrawono Basic School)",
    details: `The donations from NathanielCares Foundation - textbooks, exercise books, blackboard cleaners, and other stationery has greatly benefited the pupils of Mamponteng Sakrawono Basic. These have been of a great help to us as staff because we no longer solely depend on writing on the board every lesson and wasting chalks; rather, use the donated textbooks during most lessons. Thank you for supporting pupils of Sakrawono Basic School.     `,
    imageUrl: matthew
 },
  {
    name: "Mr. Kwabena Oppong Boateng ",
    uppertext:"2)	Gratitude for NathanielCares Foundation's Donations to All Nations Charity Home (ANCH)",
    position:"(Chair Overseer of All Nations Charity Home)",
    details: `I would like to extend my heartfelt gratitude to NathanielCares Foundation for their generous donations of huge quantities of foodstuffs - bags of rice, biscuits, drinks, cooking oil, yam, corn, etc and clothes to the All Nations Charity Home. Your support has brought smiles on the faces of these orphans and provided nourishment and refreshments for the kids this Xmas. We're forever grateful and we'll continually thank you for your compassionate and selfless service of meeting the needs of orphanage homes in Ghana. Thank you once again, NathanielCares Foundation.  `,
    imageUrl: kwabena
 },
  {
    name: "Students ",
    uppertext:"3)	NathanielCares Foundation's Donations to Akuapem South Orphanage Basic School ",
    position:"(Akuapem South Orphanage Basic School)",
    details: `We want to deeply express our gratitude to NathanielCares Foundation for their marvellous provision of basic school stuff such as desks, uniforms, books, pens, pencils, erasers, and sharpeners to Akuapem South Orphanage Basic School. This benevolence has had a great impact on our studies and attendance as we no longer sat on the floor to learn, use wooden slates and charcoal to make notes, and go to school in house atires. We're truly grateful to NathanielCares Foundation for providing us with these valuable and helpful resources and contributing to the realization of our goals, securing us a brighter future.`,
    imageUrl: student
 },
  {
    name: "Mr. Eric Takyi Brago",
    uppertext:"4) NathanielCares Foundation's Donations to Kumasi Children’s Home: Canned foods, drinks, toy guns and children's hats, washing soaps and powders, toiletries, diapers, and cash.",
    position:"(Deputy Head of the Home)    ",
    details: `We cannot express our gratitude towards NathanielCares Foundation for their incredible donations to our home. Kumasi Children’s Home is so much thankful for this generosity form NathanielCares Foundation. Our initial struggle to providing these have now been effaced by this massive donation from NathanielCares Foundation. Thank you for bringing to our doorstep, hope and relief.`,
    imageUrl: eric
 },
  {
    name: "Mr. Adu Baffour",
    uppertext:"5) NathanielCares Foundation Donations to Abuakwa-Kegyase Children’s Home ",
    position:"(Home Overseer)",
    details: `We are so much thankful for the support provided by NathanielCares Foundation to our close knit home. We're deeply touched by their donation of books, pencils, sharpeners, and cash to Abuakwa-Kegyase Children’s Home. It's a heartwarming to know that there are non profit organisations like NathanielCares Foundation who truly care about making education of orphanage homes possible like ours. Thank you for your selfless, compassionate, and kindness acts. Your generous services have truly made a remarkable impact on the development of these kids future. `,
    imageUrl: baffour
 },
];
const Testimonials = () => {
  return (
    <div className="bg-[#f0ebeb] py-24 sm:py-32 pl-5">
    <h1 className=" lg:pl-[150px]  mt-2 mb-[50px] text-3xl font-bold tracking-tight text-decoration-underline sm:text-4xl">
    TESTIMONIALS
   </h1>
      <div className="mr-[200px]">
      <ul
        className="grid gap-x-12 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
      >
        {teamData.map((person) => (
          <li key={person.name}>
          <h5 className='text-[15px] text-center font-bold'>{person.uppertext}</h5>
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
                <p className="text-base font-bold leading-7 tracking-tight text-blue-500">
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

export default Testimonials
