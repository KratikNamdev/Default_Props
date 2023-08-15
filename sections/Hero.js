import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
     
        
         <h1 className="neon">
          De<span className="delay1">f</span>
          aul<span className="delay2">t</span> Pr
          <span className="delay3">o</span>ps
         </h1>
          <h1 className='hero-title'>We Build Digital Experience</h1>

          <div className='sub-heading'>
            <TitleSm title='Web Development' /> <span>.</span>
           <TitleSm title='Digital Marketing' /><span>.</span>
           <TitleSm title='Graphic Design' /><span>.</span>
           <TitleSm title='SEO' /> 
            
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>Experience unparalleled digital solutions with our agency. From web design and marketing to SEO and branding, we're the ultimate all-in-one stop for your digital needs. Elevate your online presence with experts committed to your success. Embrace the future with the last digital agency you'll ever require.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      {/* <BlogCard /> */}
    </>
  )
}

export default Hero
