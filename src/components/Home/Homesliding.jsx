import { useEffect } from "react";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import aim1 from "../Images/aim1.jpeg"
import aim2 from "../Images/aim2.jpeg"
import aim3 from "../Images/aim3.jpeg"
import aim4 from "../Images/aim4.jpeg"
import aim5 from "../Images/aim5.jpeg"
import aim6 from "../Images/aim6.jpeg"
import aim7 from "../Images/aim7.jpeg"

const donationimages = [
    {
      src:aim1
    },
    {
      src:aim2
    },
    {
      src:aim3
    },
    {
      src:aim4
    },
    {
      src:aim5
    },
    {
      src:aim6
    },
    {
      src:aim7
    },

  ]
const Homesliding = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
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
    <Carousel responsive={responsive} autoPlay={true} infinite={true}>
    {
      donationimages.map(({src}) => {
        return(
            <div className="grid gap-4" style={{ backgroundColor: "#eedddd" }}>
            <a href={src} data-lightbox="gallery-name" >
            <img className="p-2 w-[100%] h-[400px]" src={src} alt="" />
            </a>
          </div>
        )
      })
    }
   </Carousel>
  )
}

export default Homesliding
