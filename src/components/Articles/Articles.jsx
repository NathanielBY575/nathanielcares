import React from 'react'

import {  BookOpenIcon,} from '@heroicons/react/24/outline'
import Articleimage from "../Images/articleimage.jpg"

const features = [
  {
    name: 'November 10, 2022.',
    description:
      '1.	NathanielCares Foundation donated textbooks, board cleaners, and other stationery to Mamponteng Sakrawono Basic School. ',
    icon: BookOpenIcon,
  },
  {
    name: 'March 15, 2023',
    description:
      '2.	NathanielCares Foundation offered basic school stuff such as desks, uniforms, books, pens, pencils, erasers, and sharpeners to Akuapem South Orphanage Basic School. ',
    icon: BookOpenIcon,
  },
  {
    name: '. June 20, 2023',
    description:
      `3.	NathanielCares Foundation donated canned foods, drinks, toy guns and children's hats, washing soaps and powders, toiletries, diapers, and cash. `,
    icon: BookOpenIcon,
  },
  {
    name: 'October 10, 2023',
    description:
      '4.	NathanielCares Foundation donated books, pencils, sharpeners, and cash to Abuakwa-Kegyase Children’s Home. ',
    icon: BookOpenIcon,
  },
  {
    name: 'December 24, 2023',
    description:
      '5.	NathanielCares Foundation offered huge donations of foodstuffs - bags of rice, biscuits, drinks, cooking oil, yam, corn, etc and clothes to the All Nations Charity Home. They also celebrated the Xmas with the orphanage home. ',
    icon: BookOpenIcon,
  },
  {
    name: 'August 17, 2023',
    description:
      '6. More than a third of children surveyed in Afghanistan pushed into child labor as country mark two years of Taliban Rule - Save the Children. ',
    icon: BookOpenIcon,
    country: "Afghanistan "
  },
  {
    name: 'August 24, 2020',
    description:
      '7.	The ongoing failure to meet a child’s basic needs and the most common form of child abuse. A child might be left hungry or dirty, or without proper clothing, shelter, supervision or health care. This can put children and young people in danger. And it can also have long term effects on their physical and mental wellbeing - NSPCC Child Neglect.',
    icon: BookOpenIcon,
    country: "United Kingdom "
  },
  {
    name: 'August 24, 2020',
    description:
      '8.	NathanielCares Foundation has been actively partnering with schools, educational institutions, medical experts, and other outreach foundations to enhance quality access to education and healthcare among orphans and neglected children by bringing educational materials; desks, textbooks, exercise books, pencils, erasers, sharpeners, etc, school necessities; uniforms, shoes, bags, etc, and free healthcare delivery to their disposal. ',
    icon: BookOpenIcon,
    country: "Ghana"
  },
  {
    name: 'August 10, 2023',
    description:
      '9.	Save the Children calls for access to Northwest Syria - Save the Children statement. ',
    icon: BookOpenIcon,
    country: "Ethiopia "
  },
  {
    name: 'October 10, 2023',
    description:
      `10.	NathanielCares Foundation has been actively researching with professors of some universities in Ghana on how providing basic needs and making education accessible for orphans and neglected children affect the children growth. Through these, they've found that, bringing them up in a nurturing environment with all these provisions tend to help them realize their optimal brain development while children that are denied and let alone to fend for themselves fail to reach their full cognitive potential. As a result, the foundation yearns and wishes to extend their help to all such children in Ghana and Africa as a whole. `,
    icon: BookOpenIcon,
    country: "Ghana "
  },
]

const Articles = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className='align-items-center justify-content-center d-flex'>
    <img className="lg:h-[500px] w-[500px] rounded-full " src={Articleimage} alt="" />

</div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#800042] sm:text-4xl">
            ARTICLES
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          It's amazing to see the impact that NathanielCares Foundation is making through these generous donations. It's heartwarming to know that they are supporting education, providing basic necessities, and bringing joy to those in need. Keep up the great work! 🌟🙌🏼🎁
          </p>
        </div>
        <div className="">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#800042]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 text-justify">{feature.description}</dd>
                <p className='font-extrabold'>{feature.country}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Articles
