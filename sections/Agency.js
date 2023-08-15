import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='About US' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2021' />
              <p className='desc-p'>"Transforming entrepreneurial visions into innovative digital solutions since 2021. Unleash the potential of your business ideas with our expertise in crafting intelligent digital products that captivate markets and drive growth. From concept to reality, we merge creativity and technology to deliver cutting-edge experiences. Elevate your brand's digital presence and competitiveness with our proven track record of turning concepts into successful, user-centric solutions. Join us in revolutionizing industries, one smart digital product at a time."</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>2+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>35+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>120+</h1>
                  <h3>Active Clients</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/JPEG .jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Discover our dual mission as a leading software development and digital marketing agency. We specialize in crafting innovative solutions that bridge technology and marketing, offering seamless user experiences and robust digital strategies. Our dedicated team thrives on delivering cutting-edge software products while propelling brands to new heights through data-driven marketing campaigns. With a focus on excellence, creativity, and client satisfaction, we're committed to revolutionizing the digital landscape. Partner with us to elevate your business with top-tier software development and strategic digital marketing that drives growth and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
